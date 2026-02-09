import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { BrowserPDF417Reader } from '@zxing/browser';
import { parsearDNIArgentino } from './src/utils/parsearDNIArgentino';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  arrayUnion, 
  where 
} from 'firebase/firestore';



// --- CONFIGURACIÓN DE FIREBASE ---
// IMPORTANTE: Asegúrate de completar estos datos con los de tu consola de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5xSfvGA86x4Ekc2LsSuUz7f1hpQh7jwg",
  authDomain: "futsal-pro-9de3a.firebaseapp.com",
  projectId: "futsal-pro-9de3a",
  storageBucket: "futsal-pro-9de3a.firebasestorage.app",
  messagingSenderId: "424044829956",
  appId: "1:424044829956:web:b3f348f2d8afd2859f8451",
  measurementId: "G-Z97DHMX05S"
};

const appId = typeof __app_id !== 'undefined' ? __app_id : 'futsal-total-v3';

// --- CONSTANTES ---
const CATEGORIAS_EQUIPO = [
  { id: 'primera', nombre: 'Primera', edades: 'libre', color: 'bg-zinc-800' },
  { id: '3ra.', nombre: '3ra.', edades: '2008-2007-2006', color: 'bg-indigo-500' },
  { id: 'unicas', nombre: 'Únicas', edades: 'Plantel Superior', color: 'bg-rose-600' },
  { id: 'reserva', nombre: 'Reserva', edades: 'Sub-23', color: 'bg-amber-500' },
  { id: '4ta', nombre: '4ta.', edades: '2009 / 2010', color: 'bg-lime-500' },
  { id: '5ta', nombre: '5ta.', edades: '2011 / 2012', color: 'bg-emerald-500' },
  { id: '6ta', nombre: '6ta.', edades: '2013 / 2014', color: 'bg-cyan-500' },
  { id: '7ma', nombre: '7ma.', edades: '2015 / 2016', color: 'bg-blue-600' },
  { id: '8va', nombre: '8va.', edades: '2017 / 2018', color: 'bg-indigo-600' },
  { id: '9na', nombre: '9na.', edades: '2019 / 2021', color: 'bg-purple-600' },
];

const TIPOS_ASISTENCIA = [
  { id: 'presente', etiqueta: 'Presente', color: 'bg-green-600' },
  { id: 'enfermedad', etiqueta: 'Enfermedad', color: 'bg-blue-500' },
  { id: 'lesion', etiqueta: 'Lesión', color: 'bg-red-500' },
  { id: 'tarde', etiqueta: 'Tarde', color: 'bg-yellow-500' },
  { id: 'con_aviso', etiqueta: 'Con Aviso', color: 'bg-slate-400' },
  { id: 'sin_aviso', etiqueta: 'Sin Aviso', color: 'bg-slate-900' },
];

const TIPOS_EJERCICIO = [
  { id: 'fisico', etiqueta: 'Físico', icono: '🏃‍♀️', color: 'bg-sky-500' },
  { id: 'tecnico', etiqueta: 'Técnico', icono: '⚽', color: 'bg-emerald-500' },
  { id: 'tactico', etiqueta: 'Táctico', icono: '🧠', color: 'bg-purple-500' },
  { id: 'combinado', etiqueta: 'Combinado', icono: '⚙️', color: 'bg-amber-500' },
];

const TIPOS_FINANZAS = [
  { id: 'cuota', etiqueta: 'Cuota Social', icono: '💳' },
  { id: 'inscripcion', etiqueta: 'Inscripción', icono: '📝' },
  { id: 'sancion', etiqueta: 'Sanción', icono: '⚠️' },
  { id: 'conjunto', etiqueta: 'Conjunto', icono: '👕' },
  { id: 'otros', etiqueta: 'Otros', icono: '➕' },
];

// Helper para extraer ID de Youtube
const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function App() {

  const readerRef = useRef(null);
  const scannerRef = useRef(null);
  const ultimoTextoRef = useRef(null);
  const lecturasIgualesRef = useRef(0);

  const [usuario, setUsuario] = useState(null);
  const [db, setDb] = useState(null);
  const [jugadoras, setJugadoras] = useState([]);
  const [pizarraHoy, setPizarraHoy] = useState(null);
  const [vista, setVista] = useState('inicio'); 
  const [categoriaSel, setCategoriaSel] = useState(null);
  const [jugadoraEdit, setJugadoraEdit] = useState(null);
  const [jugadoraSeleccionada, setJugadoraSeleccionada] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [escaneando, setEscaneando] = useState(false);
  const [pestanaRegistro, setPestanaRegistro] = useState('asistencia');
  const [mensaje, setMensaje] = useState(null);
  const [fotoDniBase64, setFotoDniBase64] = useState(null);
  const [fotoPerfilBase64, setFotoPerfilBase64] = useState(null);


    /* ===================== INIT FIREBASE ===================== */

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setDb(firestore);
    signInAnonymously(auth);
    return onAuthStateChanged(auth, setUsuario);
  }, []);

  /* ===================== CARGA ZXING ===================== */
  useEffect(() => {
    if (escaneando && !libLoaded) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@zxing/browser@0.1.5/dist/index.js';
      script.async = true;
      script.onload = () => setLibLoaded(true);
      document.body.appendChild(script);
    }
  }, [escaneando, libLoaded]);

  /* ===================== SNAPSHOTS ===================== */
  useEffect(() => {
    if (!usuario || !db || !categoriaSel) return;
    
    // Players Snapshot
    const unsubP = onSnapshot(query(collection(db, 'artifacts', appId, 'users', usuario.uid, 'players'), where("category", "==", categoriaSel.id)), (snap) => {
      setJugadoras(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Pizarra Snapshot (Hoy)
    const hoyId = new Date().toISOString().split('T')[0];
    const unsubPizarra = onSnapshot(doc(db, 'artifacts', appId, 'users', usuario.uid, 'daily_plans', `${categoriaSel.id}_${hoyId}`), (doc) => {
      if (doc.exists()) setPizarraHoy(doc.data());
      else setPizarraHoy(null);
    });

    return () => { unsubP(); unsubPizarra(); };
  }, [usuario, db, categoriaSel]);  


  /* ===================== LÓGICA ESCÁNER ===================== */
  const iniciarCamara = async () => {
    if (!window.ZXingBrowser || !libLoaded) return;
    if (!readerRef.current) readerRef.current = new window.ZXingBrowser.BrowserPDF417Reader();
    try {
      const controls = await readerRef.current.decodeFromConstraints(
        { audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } },
        'reader',
        (result) => {
          if (!result) return;
          const texto = result.getText();
          if (texto === ultimoTextoRef.current) lecturasIgualesRef.current++;
          else { ultimoTextoRef.current = texto; lecturasIgualesRef.current = 1; }
          if (lecturasIgualesRef.current >= 2) {
            const datos = parsearDNIArgentino(texto);
            if (datos) {
              setJugadoraEdit(prev => ({ ...prev, name: `${datos.nombre} ${datos.apellido}`, dni: datos.dni, birthDate: datos.fechaNacimiento }));
              mostrarAviso("DNI Leído");
              detenerEscaneo();
            }
          }
        }
      );
      scannerRef.current = controls;
    } catch (e) { detenerEscaneo(); }
  };

  const detenerEscaneo = () => { 
    if (scannerRef.current) { scannerRef.current.stop(); scannerRef.current = null; }
    setEscaneando(false); 
  };

  useEffect(() => {
    if (escaneando && libLoaded) iniciarCamara();
    return () => detenerEscaneo();
  }, [escaneando, libLoaded]);

/* ===================== DNI PROCESS ===================== */

  const procesarPDF417DNI = (text) => {
    console.log('📦 Texto recibido PDF417:', text);

  const datos = parsearDNIArgentino(text);

  if (!datos) {
    mostrarAviso('No se pudo leer el DNI');
    return;
  }

  console.log('✅ DNI PARSEADO:', datos);

  // 👉 Acá podés guardar en estado, enviar a Firebase, etc.
  // setDniData(datos);
};


  useEffect(() => {
    if (!usuario || !db || !categoriaSel) return;
    const path = `players`; // Usamos una colección simple para evitar problemas de ruta
    const q = query(collection(db, path), where("category", "==", categoriaSel.id));
    
    return onSnapshot(q, (snapshot) => {
      setJugadoras(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, [usuario, db, categoriaSel]);

  const mostrarAviso = (txt) => {
    setMensaje(txt);
    setTimeout(() => setMensaje(null), 3000);
  };

  const handleFotoDni = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoDniBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };


  const guardarJugadora = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const data = {
      name: formData.get('nombre'),
      dni: formData.get('dni'),
      category: categoriaSel.id,
      birthDate: formData.get('fecha'),
      telefono: formData.get('telefono'),
      direccion: formData.get('direccion'),
      escuela: formData.get('escuela'),
      nombrePadre: formData.get('nombrePadre'),
      nombreMadre: formData.get('nombreMadre'),
      fotoPerfil: fotoPerfilBase64 || jugadoraEdit?.fotoPerfil || '',
      fotoDni: fotoDniBase64 || jugadoraEdit?.fotoDni || '',
      activities: jugadoraEdit?.activities || { attendance: [], matches: [], drills: [], payments: [] },
      data: { dni: formData.get('dni'), health: formData.get('health') || '' },
      stats: jugadoraEdit?.stats || { behavior: 5, theory: 5 },
      salud_profunda: {
      patologias: formData.get('patologias'),
      alergias: formData.get('alergias'),
      medicacion: formData.get('medicacion'),
      obraSocial: formData.get('obraSocial'),
      contactoEmergencia: formData.get('contactoEmergencia'),
      telEmergencia: formData.get('telEmergencia'),
      grupoSanguineo: formData.get('grupoSanguineo'),
    },

    activities: jugadoraEdit?.activities || { attendance: [], matches: [], drills: [], payments: [] },
    stats: jugadoraEdit?.stats || { behavior: 5, theory: 5 }
      
    };

    try {
      const path = `players`;
      if (jugadoraEdit?.id) {
        await updateDoc(doc(db, path, jugadoraEdit.id), data);
        mostrarAviso("Actualizada");
      } else {
        await addDoc(collection(db, path), data);
        mostrarAviso("Agregada");
      }
      setMostrarForm(false);
      setJugadoraEdit(null);
      setFotoDniBase64(null);
    } catch (e) {
      mostrarAviso("Error al guardar");
    }
  };

  const guardarActividad = async (jugadoraId, tipo, datos) => {
    if (!db || !usuario) return;
    const path = `players`;
    const ref = doc(db, path, jugadoraId);

    // Capturamos el momento exacto del registro
    const ahora = new Date();
    
    // Formateamos para Argentina
    const fechaFormateada = ahora.toLocaleDateString('es-AR'); 
    const horaFormateada = ahora.toLocaleTimeString('es-AR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    const diaSemana = ahora.toLocaleDateString('es-AR', { weekday: 'long' });

    try {
      await updateDoc(ref, {
        [`activities.${tipo}`]: arrayUnion({
          ...datos,
          fechaMs: Date.now(), // Para poder ordenar cronológicamente
          fechaTexto: fechaFormateada,
          hora: horaFormateada,
          diaSemana: diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1) // Capitaliza el día
        })
      });
      mostrarAviso(`${datos.etiqueta} registrado`);
    } catch (e) {
      console.error(e);
      mostrarAviso("Error al guardar registro");
    }
  };

   const guardarPizarra = async (e) => {
    e.preventDefault();
    if (!usuario || !db) return;
    const formData = new FormData(e.target);
    const hoyId = new Date().toISOString().split('T')[0];
    const data = {
      title: formData.get('titulo'),
      description: formData.get('descripcion'),
      videoLink: formData.get('link'),
      date: hoyId,
      category: categoriaSel.id,
      updatedAt: Date.now()
    };
    try {
      await setDoc(doc(db, 'artifacts', appId, 'users', usuario.uid, 'daily_plans', `${categoriaSel.id}_${hoyId}`), data);
      mostrarAviso("Pizarra Actualizada");
    } catch (e) { mostrarAviso("Error al guardar pizarra"); }
  };

  const eliminarJugadora = async (id) => {
    if (!confirm("¿Deseas eliminar definitivamente a esta jugadora?")) return;
    try {
      const path = `players`;
      await deleteDoc(doc(db, path, id));
      setVista('categoria');
      setJugadoraSeleccionada(null);
      mostrarAviso("Eliminada");
    } catch (e) { console.error(e); }
  };

  const FormularioJugadora = () => (
    <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto text-slate-900">
      <div className="bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl my-8">
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <h3 className="font-black uppercase tracking-widest text-xs italic">Ficha Administrativa</h3>
          <button onClick={() => { setMostrarForm(false); setJugadoraEdit(null); setFotoDniBase64(null); }} className="text-2xl font-bold">×</button>
        </div>
        <form onSubmit={guardarJugadora} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-4">
            <button
              type="button"
              onClick={() => setEscaneando(true)}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest"
            >
              📷 ESCANEAR BARRAS DNI
            </button>

            
            <div className="grid grid-cols-2 gap-4">
  {/* FOTO DE PERFIL (La que se verá en la ficha) */}
  <div className="space-y-1">
    <label className="text-[10px] font-black text-indigo-600 uppercase ml-2">Foto Jugadora</label>
    <div className="relative">
      <input type="file" accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setFotoPerfilBase64(reader.result); // Necesitas crear este estado
            reader.readAsDataURL(file);
          }
        }} className="hidden" id="foto-perfil-input" />
      <label htmlFor="foto-perfil-input" className="w-full h-32 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
        {fotoPerfilBase64 || jugadoraEdit?.fotoPerfil ? (
          <img src={fotoPerfilBase64 || jugadoraEdit?.fotoPerfil} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[10px] font-black text-indigo-400 uppercase text-center p-2">Subir Foto Jugadora</span>
        )}
      </label>
    </div>
  </div>

  {/* FOTO DNI (Guardada por seguridad) */}
  <div className="space-y-1">
    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Foto DNI</label>
    <div className="relative">
      <input type="file" accept="image/*" onChange={handleFotoDni} className="hidden" id="foto-dni-input" />
      <label htmlFor="foto-dni-input" className="w-full h-32 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
        {fotoDniBase64 || jugadoraEdit?.fotoDni ? (
          <img src={fotoDniBase64 || jugadoraEdit?.fotoDni} className="w-full h-full object-cover opacity-50" />
        ) : (
          <span className="text-[10px] font-black text-slate-400 uppercase text-center p-2">Subir Foto DNI</span>
        )}
      </label>
    </div>
  </div>
</div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nombre Completo</label>
            <input name="nombre" defaultValue={jugadoraEdit?.name} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">DNI / ID</label>
              <input name="dni" defaultValue={jugadoraEdit?.dni} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Fecha Nacimiento</label>
              <input name="fecha" placeholder="DD/MM/AAAA" defaultValue={jugadoraEdit?.birthDate} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
             <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Teléfono de Contacto</label>
              <input name="telefono" defaultValue={jugadoraEdit?.telefono} placeholder="Ej: 11 1234 5678" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Dirección de Domicilio</label>
              <input name="direccion" defaultValue={jugadoraEdit?.direccion} placeholder="Calle, Altura, Localidad" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Escuela / Colegio</label>
              <input name="escuela" defaultValue={jugadoraEdit?.escuela} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nombre del Padre</label>
              <input name="nombrePadre" defaultValue={jugadoraEdit?.nombrePadre} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nombre de la Madre</label>
              <input name="nombreMadre" defaultValue={jugadoraEdit?.nombreMadre} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold text-sm" />
            </div>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
            {jugadoraEdit ? 'ACTUALIZAR FICHA' : 'CREAR JUGADORA'}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {mensaje && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl">
          {mensaje}
        </div>
      )}

      {escaneando && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6">
          <h2 className="text-white font-black uppercase tracking-widest text-xs mb-4 italic">Enfoca el Código de Barras</h2>
          <video
  id="reader"
  className="w-full max-w-md rounded-3xl border-4 border-indigo-600 shadow-2xl bg-black object-cover"
  style={{ height: '280px' }}
  autoPlay
  muted
  playsInline
/>

            <button onClick={detenerEscaneo} className="mt-8 bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest">Cancelar</button>
          </div>
      )}

      {mostrarForm && <FormularioJugadora />}

{/* ===================== VISTAS ===================== */}

/* ===================== VISTA INICIO ===================== */
{vista === 'inicio' && (
  <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center text-slate-900">
    <header className="py-12 text-center flex flex-col items-center">
      <div className="mb-6 relative">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-indigo-600 overflow-hidden">
          <img
            src="/logo.jpg"
            alt="Escudo Club"
            className="w-20 h-20 object-contain"
            onError={(e) =>
              (e.target.src =
                "https://cdn-icons-png.flaticon.com/512/53/53254.png")
            }
          />
        </div>
        <div className="absolute -top-1 -right-1 bg-indigo-600 w-4 h-4 rounded-full border-2 border-white"></div>
      </div>

      <h1 className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none mb-2">
        FUTSAL<br />FEMENINO
      </h1>
      <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4 shadow-sm"></div>
      <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em]">
        Gestión Deportiva Pro
      </p>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
      {CATEGORIAS_EQUIPO.map(cat => (
        <button
          key={cat.id}
          onClick={() => { setCategoriaSel(cat); setVista('categoria'); }}
          className={`${cat.color} h-36 rounded-[40px] shadow-lg text-white flex flex-col items-center justify-center active:scale-95 transition-all border-b-8 border-black/20`}
        >
          <span className="text-2xl font-black uppercase tracking-tighter">{cat.nombre}</span>
          <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">{cat.edades}</span>
        </button>
      ))}
    </div>
  </div>
)}

/* ===================== VISTA CATEGORIA ===================== */
{vista === 'categoria' && (
  <div className="flex flex-col h-screen bg-white">

    <Header
      title={categoriaSel.nombre}
      sub={categoriaSel.edades}
      onBack={() => setVista('inicio')}
      action={
        <button
          onClick={() => { setJugadoraEdit(null); setMostrarForm(true); }}
          className="bg-rose-600 text-white px-4 py-2 rounded-xl font-black text-[10px] tracking-widest"
        >
          AGREGAR
        </button>
      }
    />

    <div className="flex-grow p-6 overflow-y-auto space-y-4 pb-36">
      {jugadoras.length === 0 ? (
        <div className="text-center py-20 text-slate-300">
          <p className="font-black uppercase tracking-widest text-[10px] italic">
            Sin atletas registradas
          </p>
        </div>
      ) : (
        jugadoras.filter(p => p && p.name).map(p => (
          <div
            key={p.id}
            className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200 flex justify-between items-center transition-all"
          >
            <div
              className="flex-grow flex items-center gap-4"
              onClick={() => { setJugadoraSeleccionada(p); setVista('detalle_jugadora'); }}
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center border">
                {p.fotoPerfil ? (
                  <img src={p.fotoPerfil} className="w-full h-full object-cover" />
                ) : p.fotoDni ? (
                  <img src={p.fotoDni} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs">👤</span>
                )}
              </div>

              <div>
                <p className="text-lg font-black text-slate-800 uppercase leading-none">{p.name}</p>
                <p className="text-[10px] font-black text-indigo-500">ID: {p.dni}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => { setJugadoraEdit(p); setMostrarForm(true); }}>✏️</button>
              <button onClick={() => eliminarJugadora(p.id)}>🗑️</button>
            </div>
          </div>
        ))
      )}
    </div>

    <footer className="bg-slate-950 p-4 grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 border-t border-white/10 rounded-t-[48px] shadow-2xl z-40">
      <button onClick={() => { setPestanaRegistro('asistencia'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white">
        <span className="text-2xl">📅</span>
        <span className="text-[8px] font-black uppercase opacity-70">Asistencia</span>
      </button>
      <button onClick={() => { setPestanaRegistro('partidos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white">
        <span className="text-2xl">🏆</span>
        <span className="text-[8px] font-black uppercase opacity-70">Partidos</span>
      </button>
      <button onClick={() => { setPestanaRegistro('ejercicios'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white">
        <span className="text-2xl">🏋️</span>
        <span className="text-[8px] font-black uppercase opacity-70">Ejercicios</span>
      </button>
      <button onClick={() => { setPestanaRegistro('pagos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-green-400">
        <span className="text-2xl">💵</span>
        <span className="text-[8px] font-black">$ Pagos</span>
      </button>
    </footer>
  </div>
)}

/* ===================== VISTA PLAN_DIARIO ===================== */
{vista === 'plan_diario' && (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <Header
      title="Pizarra del Día"
      sub={categoriaSel.nombre}
      onBack={() => setVista('categoria')}
    />

    <div className="p-4 space-y-6 pb-20 overflow-y-auto text-slate-900">
      <section className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
        <h3 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">
          Publicar Trabajo
        </h3>

        <form onSubmit={guardarPizarra} className="space-y-4">
          <input
            name="titulo"
            defaultValue={pizarraHoy?.title}
            placeholder="Título de la sesión"
            className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs border-none"
            required
          />
          <textarea
            name="description"
            defaultValue={pizarraHoy?.description}
            placeholder="Detalle de los ejercicios..."
            className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs h-32 border-none"
            required
          />
          <input
            name="link"
            defaultValue={pizarraHoy?.videoLink}
            placeholder="Link de Video (YouTube)"
            className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs border-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest"
          >
            Publicar para los profes
          </button>
        </form>
      </section>
    </div>
  </div>
)}

/* ===================== VISTA PLANIFICADOR ===================== */
{vista === 'planificador' && (
  <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
    <Header
      title="Planificador"
      sub="Sesión de Entrenamiento"
      onBack={() => setVista('categoria')}
    />

    <div className="p-4 space-y-6 pb-20 overflow-y-auto">
      <section className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
          Diagrama de Sesión
        </h3>

        <div className="space-y-3">
          {sesionActiva?.parts?.map((part, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-xl flex items-center justify-center font-black text-sm">
                  {part.duration}'
                </div>
                <span className="font-black text-slate-900 uppercase italic text-xs tracking-tight">
                  {part.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={async () => {
          try {
            await addDoc(collection(db, 'artifacts', appId, 'users', usuario.uid, 'trainings'), { ...sesionActiva, createdAt: Date.now() });
            mostrarAviso("Sesión guardada");
            setVista('categoria');
          } catch (e) {
            mostrarAviso("Error al guardar");
          }
        }}
        className="w-full bg-slate-950 text-white py-6 rounded-[32px] font-black uppercase text-[11px] tracking-widest shadow-2xl"
      >
        GUARDAR ENTRENAMIENTO
      </button>
    </div>
  </div>
)}


      {/* VISTA REGISTRO RÁPIDO */}
      {vista === 'registro_rapido' && (
        <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
          <header className="bg-slate-900 p-6 text-white flex justify-between items-center sticky top-0 z-50 rounded-b-[40px] shadow-xl">
            <button onClick={() => setVista('categoria')} className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">CERRAR</button>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] italic">Control: {pestanaRegistro}</h2>
            <div className="w-10"></div>
          </header>
          <div className="p-4 space-y-4 pb-20 flex-grow overflow-y-auto">
            {jugadoras.map(p => (
              <div key={p.id} className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200">
                <p className="text-xl font-black text-slate-900 mb-4 border-b pb-2 uppercase italic tracking-tighter">{p.name}</p>
                {pestanaRegistro === 'asistencia' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_ASISTENCIA.map(s => (
                      <button key={s.id} onClick={() => guardarActividad(p.id, 'attendance', { status: s.id, etiqueta: s.etiqueta })} className={`${s.color} text-white py-4 rounded-2xl text-[10px] font-black uppercase shadow-lg border-b-4 border-black/20 active:scale-95 transition-all`}>
                        {s.etiqueta}
                      </button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'pagos' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_FINANZAS.map(f => (
                      <button key={f.id} onClick={() => { const m = prompt(`Monto ${f.etiqueta}:`); if(m) guardarActividad(p.id, 'payments', { tipo: f.id, etiqueta: f.etiqueta, monto: parseFloat(m) }); }} className="bg-indigo-50 text-indigo-900 p-4 rounded-2xl flex flex-col items-center border-2 border-indigo-100 active:bg-indigo-200 transition-all">
                        <span className="text-3xl mb-1">{f.icono}</span>
                        <span className="text-[10px] font-black uppercase">{f.etiqueta}</span>
                      </button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'ejercicios' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_EJERCICIO.map(d => (
                      <button key={d.id} onClick={() => { const n = prompt(`Resultado ${d.etiqueta}:`); if(n) guardarActividad(p.id, 'drills', { tipo: d.id, etiqueta: d.etiqueta, nota: n }); }} className={`${d.color} text-white p-5 rounded-2xl flex flex-col items-center shadow-lg active:scale-95 transition-all`}>
                        <span className="text-3xl mb-1">{d.icono}</span>
                        <span className="text-[10px] font-black uppercase">{d.etiqueta}</span>
                      </button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'partidos' && (
                  <button onClick={() => { const g = prompt("Goles:"); const m = prompt("Minutos:"); if(g || m) guardarActividad(p.id, 'matches', { goles: g, min: m }); }} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase italic tracking-widest shadow-xl active:scale-95 transition-all">
                    REGISTRAR ESTADÍSTICAS JUEGO
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VISTA DETALLE JUGADORA */}
{/* VISTA DETALLE JUGADORA */}
{vista === 'detalle_jugadora' && jugadoraSeleccionada && (
        <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
          <header className="bg-indigo-950 p-6 text-white flex justify-between items-center rounded-b-[40px] sticky top-0 z-50 shadow-2xl">
            <button onClick={() => setVista('categoria')} className="bg-white/10 p-2 rounded-xl active:scale-90 transition-transform"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg></button>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] italic">Ficha Jugadora</h2>
            <div className="w-10"></div>
          </header>
          <div className="p-4 space-y-6 pb-20 overflow-y-auto flex-grow">
            <div className="bg-white p-8 rounded-[48px] shadow-xl flex flex-col items-center text-center border border-slate-100">
              <div className="w-40 h-40 bg-indigo-50 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 mb-4">
                {jugadoraSeleccionada?.fotoPerfil ? <img src={jugadoraSeleccionada.fotoPerfil} className="w-full h-full object-cover" /> : <span className="opacity-20 text-8xl p-8 block">⚽</span>}
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase leading-none mb-1">{jugadoraSeleccionada?.name}</h3>
              <button onClick={() => { setJugadoraEdit(jugadoraSeleccionada); setMostrarForm(true); }} className="mt-4 w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl active:scale-95 transition-all">Editar Ficha</button>
            </div>

            <section className="space-y-3">
               <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]">Información de Contacto</h4>
               <div className="bg-white p-6 rounded-[32px] border border-slate-200 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase">Teléfono</span>
                    <span className="text-sm font-bold text-slate-700 tracking-tight">{jugadoraSeleccionada.telefono || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col border-t pt-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase mb-1">Dirección</span>
                    <span className="text-sm font-bold text-slate-700 leading-tight">{jugadoraSeleccionada.direccion || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase">Escuela</span>
                    <span className="text-sm font-bold text-slate-700">{jugadoraSeleccionada.escuela || 'N/A'}</span>
                  </div>
               </div>
            </section>

            <section className="space-y-3">
               <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]">Adultos Responsables</h4>
               <div className="bg-white p-6 rounded-[32px] border border-slate-200 grid grid-cols-2 gap-4 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-indigo-400 uppercase mb-1">Padre</span>
                    <span className="text-xs font-black text-slate-700 uppercase">{jugadoraSeleccionada.nombrePadre || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col border-l pl-4">
                    <span className="text-[9px] font-black text-rose-400 uppercase mb-1">Madre</span>
                    <span className="text-xs font-black text-slate-700 uppercase">{jugadoraSeleccionada.nombreMadre || 'N/A'}</span>
                  </div>
               </div>
            </section>

     
  <section className="space-y-3">
  <h4 className="text-[10px] font-black text-rose-500 uppercase ml-4 tracking-[0.2em]">⚠️ Ficha Médica de Emergencia</h4>
  <div className="bg-white rounded-[32px] border-2 border-rose-500 overflow-hidden shadow-xl">
    {/* Cabecera con Grupo Sanguíneo */}
    <div className="bg-rose-500 p-4 flex justify-between items-center text-white">
      <span className="font-black text-xs uppercase italic">Declaración Jurada</span>
      <span className="bg-white text-rose-600 px-3 py-1 rounded-full font-black text-xs">
        🩸 {jugadoraSeleccionada.salud_profunda?.grupoSanguineo || 'S/D'}
      </span>
    </div>
              <div className="space-y-1">
    <label className="text-[9px] font-black text-slate-400 uppercase ml-2">Medicación Actual</label>
    <input name="medicacion" placeholder="¿Toma algo regularmente?" defaultValue={jugadoraEdit?.salud_profunda?.medicacion} className="w-full bg-white p-3 rounded-xl border-none font-bold text-sm" />
  </div>

    <div className="p-6 space-y-4">
      {/* Alergias y Medicación */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[9px] font-black text-slate-400 uppercase">Alergias / Patologías</p>
          <p className="text-sm font-bold text-slate-800">{jugadoraSeleccionada.salud_profunda?.alergias || 'Ninguna'}</p>
        </div>
        <div>
          <p className="text-[9px] font-black text-slate-400 uppercase">Dolencias físicas</p>
          <p className="text-sm font-bold text-slate-800">{jugadoraSeleccionada.salud_profunda?.medicacion || 'No'}</p>
        </div>
      </div>

      <div className="border-t pt-3">
        <p className="text-[9px] font-black text-slate-400 uppercase">Obra Social / Prepaga</p>
        <p className="text-sm font-bold text-slate-800">{jugadoraSeleccionada.salud_profunda?.obraSocial || 'No informada'}</p>
      </div>

      {/* Contacto de Urgencia destacado */}
      <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
        <p className="text-[9px] font-black text-rose-600 uppercase mb-1">En caso de urgencia avisar a:</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-black text-slate-900 leading-none">{jugadoraSeleccionada.salud_profunda?.contactoEmergencia || 'Sin contacto'}</p>
            <p className="text-sm font-bold text-rose-600 mt-1">{jugadoraSeleccionada.salud_profunda?.telEmergencia || ''}</p>
          </div>
          {jugadoraSeleccionada.salud_profunda?.telEmergencia && (
            <a href={`tel:${jugadoraSeleccionada.salud_profunda.telEmergencia}`} className="bg-rose-500 p-3 rounded-full text-white shadow-lg active:scale-90 transition-transform">
               📞
            </a>
          )}
        </div>
      </div>
    </div>
  </div>

               <div className="bg-slate-900 p-6 rounded-[32px] text-white shadow-xl italic text-sm">
                  {jugadoraSeleccionada.data?.health || "Sin observaciones médicas registradas."}
               </div>
            </section>
            <section className="space-y-3 pb-10">
    <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]">Historial de Entrenamientos</h4>
    <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
      {!jugadoraSeleccionada.activities?.attendance || jugadoraSeleccionada.activities.attendance.length === 0 ? (
        <div className="p-6 text-center text-slate-400 text-[10px] font-bold uppercase italic">Sin asistencias registradas</div>
      ) : (
        <div className="divide-y divide-slate-50">
          {/* Ordenamos por fecha más reciente primero */}
          {[...jugadoraSeleccionada.activities.attendance]
            .sort((a, b) => b.fechaMs - a.fechaMs)
            .map((asist, idx) => (
              <div key={idx} className="p-4 flex justify-between items-center hover:bg-slate-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-900 uppercase">{asist.diaSemana}</span>
                  <span className="text-[12px] font-bold text-slate-500">{asist.fechaTexto}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase text-white ${
                    asist.status === 'presente' ? 'bg-green-500' : 'bg-slate-400'
                  }`}>
                    {asist.etiqueta}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 mt-1">{asist.hora} hs</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
</section>
          </div>
        </div>
      )}
    </div>
  );
}