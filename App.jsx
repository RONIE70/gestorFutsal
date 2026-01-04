import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { BrowserPDF417Reader } from '@zxing/browser';
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
  { id: 'unicas', nombre: 'Únicas', edades: 'Plantel Superior', color: 'bg-rose-600' },
  { id: 'reserva', nombre: 'Reserva', edades: 'Sub-23', color: 'bg-orange-500' },
  { id: '4ta', nombre: '4ta.', edades: '2008 / 2009', color: 'bg-amber-500' },
  { id: '5ta', nombre: '5ta.', edades: '2010 / 2011', color: 'bg-emerald-500' },
  { id: '6ta', nombre: '6ta.', edades: '2012 / 2013', color: 'bg-cyan-500' },
  { id: '7ma', nombre: '7ma.', edades: '2014 / 2015', color: 'bg-blue-600' },
  { id: '8va', nombre: '8va.', edades: '2016 / 2017', color: 'bg-indigo-600' },
  { id: '9na', nombre: '9na.', edades: '2018 / 2021', color: 'bg-purple-600' },
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

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [db, setDb] = useState(null);
  const [jugadoras, setJugadoras] = useState([]);
  const [vista, setVista] = useState('inicio'); 
  const [categoriaSel, setCategoriaSel] = useState(null);
  const [jugadoraEdit, setJugadoraEdit] = useState(null);
  const [jugadoraSeleccionada, setJugadoraSeleccionada] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [escaneando, setEscaneando] = useState(false);
  const [pestanaRegistro, setPestanaRegistro] = useState('asistencia');
  const [mensaje, setMensaje] = useState(null);
  const [fotoDniBase64, setFotoDniBase64] = useState(null);

  const scannerRef = useRef(null);

    /* ===================== INIT FIREBASE ===================== */

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setDb(firestore);
    signInAnonymously(auth);
    return onAuthStateChanged(auth, setUsuario);
  }, []);

  /* ===================== ZXING SCANNER ===================== */

  useEffect(() => {
  if (!escaneando) return;

  let active = true;
  const reader = new BrowserPDF417Reader();
  scannerRef.current = reader;

  const iniciarCamara = async () => {
    await new Promise(res => setTimeout(res, 300)); // ⬅️ CLAVE

    if (!active) return;

    try {
      await reader.decodeFromVideoDevice(
        undefined,
        'reader',
        (result) => {
          if (result) {
            procesarPDF417DNI(result.getText());
            detenerEscaneo();
          }
        }
      );
    } catch (e) {
      mostrarAviso('No se pudo abrir la cámara');
      detenerEscaneo();
    }
  };

  iniciarCamara();

  return () => {
    active = false;
    reader.reset();
    scannerRef.current = null;
  };
}, [escaneando]);


  const detenerEscaneo = () => {
  if (scannerRef.current) {
    scannerRef.current.reset();
    scannerRef.current = null;
  }
  setEscaneando(false);
};


/* ===================== DNI PROCESS ===================== */

  const procesarPDF417DNI = (text) => {
    const sep = text.includes('|') ? '|' : '@';
    const p = text.split(sep);

    setJugadoraEdit(prev => ({
      ...(prev || {}),
      name: `${p[2] || ''} ${p[1] || ''}`.trim(),
      dni: p[4] || '',
      birthDate: p[6]
        ? `${p[6].slice(6,8)}/${p[6].slice(4,6)}/${p[6].slice(0,4)}`
        : ''
    }));

    mostrarAviso("DNI leído correctamente");
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
      fotoDni: fotoDniBase64 || jugadoraEdit?.fotoDni || '',
      activities: jugadoraEdit?.activities || { attendance: [], matches: [], drills: [], payments: [] },
      data: { dni: formData.get('dni'), health: formData.get('health') || '' },
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
    try {
      await updateDoc(ref, {
        [`activities.${tipo}`]: arrayUnion({
          ...datos,
          fechaMs: Date.now(),
          fechaTexto: new Date().toLocaleDateString()
        })
      });
      mostrarAviso("Registro guardado");
    } catch (e) {
      console.error(e);
    }
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

            
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Foto DNI (Frente/Dorso)</label>
              <div className="relative">
                <input type="file" accept="image/*" capture="environment" onChange={handleFotoDni} className="hidden" id="foto-dni-input" />
                <label htmlFor="foto-dni-input" className="w-full bg-slate-100 p-4 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition">
                  {fotoDniBase64 || jugadoraEdit?.fotoDni ? (
                    <img src={fotoDniBase64 || jugadoraEdit?.fotoDni} alt="Vista previa DNI" className="h-24 rounded-lg shadow-sm" />
                  ) : (
                    <span className="text-[10px] font-black text-slate-500 uppercase">Tap para capturar foto</span>
                  )}
                </label>
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
          <div id="reader" className="w-full max-w-sm bg-white rounded-3xl overflow-hidden aspect-video border-4 border-indigo-600 shadow-2xl"></div>
          <button onClick={detenerEscaneo} className="mt-8 bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest">Cancelar</button>
        </div>
      )}

      {mostrarForm && <FormularioJugadora />}

      {/* VISTA INICIO */}
      {vista === 'inicio' && (
        <div className="p-6 max-w-lg mx-auto">
          <header className="py-12 text-center">
            <h1 className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none mb-2">FUTSAL<br/>FEMENINO</h1>
            <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4 shadow-sm"></div>
            <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em]">Gestión Deportiva Pro</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIAS_EQUIPO.map(cat => (
              <button key={cat.id} onClick={() => { setCategoriaSel(cat); setVista('categoria'); }} className={`${cat.color} h-36 rounded-[40px] shadow-lg text-white flex flex-col items-center justify-center active:scale-95 transition-all border-b-8 border-black/20`}>
                <span className="text-2xl font-black uppercase tracking-tighter">{cat.nombre}</span>
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">{cat.edades}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VISTA CATEGORIA */}
      {vista === 'categoria' && (
        <div className="flex flex-col h-screen">
          <header className={`${categoriaSel.color} p-6 text-white shadow-xl flex justify-between items-center rounded-b-[48px] z-10 sticky top-0`}>
            <button onClick={() => setVista('inicio')} className="bg-white/20 p-3 rounded-2xl active:scale-90">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="text-center">
              <h2 className="text-xl font-black uppercase tracking-widest leading-none mb-1">{categoriaSel.nombre}</h2>
              <span className="text-[9px] font-black opacity-60 bg-black/10 px-2 py-0.5 rounded-full uppercase">{categoriaSel.edades}</span>
            </div>
            <button onClick={() => { setJugadoraEdit(null); setMostrarForm(true); }} className="bg-white text-slate-900 px-5 py-2.5 rounded-2xl font-black text-[10px] shadow-xl active:scale-90 tracking-widest">
              AGREGA
            </button>
          </header>

          <div className="flex-grow p-6 overflow-y-auto space-y-4 pb-36">
            {jugadoras.length === 0 ? (
              <div className="text-center py-20 text-slate-300">
                <p className="font-black uppercase tracking-widest text-[10px] italic">Sin atletas registradas</p>
              </div>
            ) : (
              jugadoras.map(p => (
                <div key={p.id} className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200 flex justify-between items-center transition-all hover:border-indigo-300">
                  <div className="flex-grow flex items-center gap-4" onClick={() => { setJugadoraSeleccionada(p); setVista('detalle_jugadora'); }}>
                    <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center border border-slate-200">
                      {p.fotoDni ? <img src={p.fotoDni} className="w-full h-full object-cover" alt="foto" /> : <span className="text-xs">👤</span>}
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-800 uppercase tracking-tighter leading-none mb-1">{p.name}</p>
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">ID: {p.dni}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button onClick={() => { setJugadoraEdit(p); setMostrarForm(true); }} className="p-3 bg-slate-100 rounded-xl text-slate-400 active:bg-indigo-100 active:text-indigo-600 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button onClick={() => eliminarJugadora(p.id)} className="p-3 bg-red-50 rounded-xl text-red-400 active:bg-red-100 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <footer className="bg-slate-950 p-4 grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 border-t border-white/10 rounded-t-[48px] shadow-2xl z-40">
            <button onClick={() => { setPestanaRegistro('asistencia'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform">
               <span className="text-2xl mb-1">📅</span> <span className="text-[8px] font-black uppercase tracking-widest opacity-70">Asistencia</span>
            </button>
            <button onClick={() => { setPestanaRegistro('partidos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform">
               <span className="text-2xl mb-1">🏆</span> <span className="text-[8px] font-black uppercase tracking-widest opacity-70">Partidos</span>
            </button>
            <button onClick={() => { setPestanaRegistro('ejercicios'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform">
               <span className="text-2xl mb-1">🏋️</span> <span className="text-[8px] font-black uppercase tracking-widest opacity-70">Ejercicios</span>
            </button>
            <button onClick={() => { setPestanaRegistro('pagos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-green-400 active:scale-90 transition-transform">
               <span className="text-2xl mb-1">💵</span> <span className="text-[8px] font-black uppercase tracking-widest">$ Pagos</span>
            </button>
          </footer>
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
      {vista === 'detalle_jugadora' && jugadoraSeleccionada && (
        <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
          <header className="bg-indigo-950 p-6 text-white flex justify-between items-center sticky top-0 z-50 shadow-2xl rounded-b-[40px]">
            <button onClick={() => setVista('categoria')} className="bg-white/10 p-2 rounded-xl active:scale-90 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] italic text-center">Ficha Integral</h2>
            <div className="w-10"></div>
          </header>
          <div className="p-4 space-y-6 pb-20 overflow-y-auto flex-grow">
            <div className="bg-white p-8 rounded-[48px] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center text-6xl border-4 border-white shadow-xl overflow-hidden">
                  {jugadoraSeleccionada.fotoDni ? <img src={jugadoraSeleccionada.fotoDni} className="w-full h-full object-cover" alt="foto" /> : "👤"}
                </div>
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-1">{jugadoraSeleccionada.name}</h3>
              <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6">DNI: {jugadoraSeleccionada.dni || 'PENDIENTE'}</p>
              
              <div className="flex gap-4 w-full">
                <button onClick={() => { setJugadoraEdit(jugadoraSeleccionada); setMostrarForm(true); }} className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-sm active:scale-95 transition-all">Editar</button>
                <button onClick={() => eliminarJugadora(jugadoraSeleccionada.id)} className="flex-1 bg-red-50 text-red-600 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-sm active:scale-95 transition-all">Eliminar</button>
              </div>
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
               <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]">Salud / Alergias</h4>
               <div className="bg-slate-900 p-6 rounded-[32px] text-white shadow-xl italic text-sm">
                  {jugadoraSeleccionada.data?.health || "Sin observaciones médicas registradas."}
               </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}