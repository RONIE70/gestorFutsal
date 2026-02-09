import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  arrayUnion, 
  where 
} from 'firebase/firestore';
import { 
  Users, 
  Calendar, 
  ClipboardCheck, 
  DollarSign, 
  ChevronLeft, 
  Camera, 
  Trash2, 
  Edit3, 
  History,
  Activity,
  Award,
  BookOpen,
  CreditCard,
  FileText,
  AlertTriangle,
  Shirt,
  X,
  PlayCircle,
  Tv,
  Plus
} from 'lucide-react';

// --- CONFIGURACIÓN DE FIREBASE ---
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
  { id: 'reserva', nombre: 'Reserva', edades: 'Sub-23', color: 'bg-orange-500' },
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

const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const parsearDNIArgentino = (text) => {
  try {
    const parts = text.split('@');
    if (parts.length < 8) return null;
    return {
      dni: parts[1].trim(),
      apellido: parts[4].trim(),
      nombre: parts[5].trim(),
      fechaNacimiento: parts[6].trim(),
    };
  } catch (e) { return null; }
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
  const [entrenamientos, setEntrenamientos] = useState([]);
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
  const [libLoaded, setLibLoaded] = useState(false);
  const [sesionActiva, setSesionActiva] = useState(null);

  /* ===================== INIT FIREBASE ===================== */
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setDb(firestore);
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    initAuth();
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
    
    const unsubP = onSnapshot(query(collection(db, 'artifacts', appId, 'users', usuario.uid, 'players'), where("category", "==", categoriaSel.id)), (snap) => {
      setJugadoras(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const hoyId = new Date().toISOString().split('T')[0];
    const unsubPizarra = onSnapshot(doc(db, 'artifacts', appId, 'users', usuario.uid, 'daily_plans', `${categoriaSel.id}_${hoyId}`), (doc) => {
      if (doc.exists()) setPizarraHoy(doc.data());
      else setPizarraHoy(null);
    });

    const unsubT = onSnapshot(query(collection(db, 'artifacts', appId, 'users', usuario.uid, 'trainings'), where("category", "==", categoriaSel.id)), (snap) => {
        setEntrenamientos(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubP(); unsubPizarra(); unsubT(); };
  }, [usuario, db, categoriaSel]);

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

  const mostrarAviso = (txt) => { setMensaje(txt); setTimeout(() => setMensaje(null), 3000); };

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
    if (!usuario) return;
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
      data: { dni: formData.get('dni'), health: formData.get('health') || '' },
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
      const path = collection(db, 'artifacts', appId, 'users', usuario.uid, 'players');
      if (jugadoraEdit?.id) await updateDoc(doc(db, 'artifacts', appId, 'users', usuario.uid, 'players', jugadoraEdit.id), data);
      else await addDoc(path, data);
      setMostrarForm(false); setJugadoraEdit(null); setFotoDniBase64(null); setFotoPerfilBase64(null);
      mostrarAviso("Datos guardados");
    } catch (e) { mostrarAviso("Error al guardar"); }
  };

  const guardarActividad = async (jugadoraId, tipo, datos) => {
    if (!db || !usuario) return;
    const ahora = new Date();
    try {
      const ref = doc(db, 'artifacts', appId, 'users', usuario.uid, 'players', jugadoraId);
      await updateDoc(ref, {
        [`activities.${tipo}`]: arrayUnion({
          ...datos,
          fechaMs: Date.now(),
          fechaTexto: ahora.toLocaleDateString('es-AR'),
          hora: ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
          diaSemana: ahora.toLocaleDateString('es-AR', { weekday: 'long' })
        })
      });
      mostrarAviso(`${datos.etiqueta || 'Registro'} exitoso`);
    } catch (e) { mostrarAviso("Error de registro"); }
  };

  const guardarPizarra = async (e) => {
    e.preventDefault();
    if (!usuario || !db) return;
    const formData = new FormData(e.target);
    const hoyId = new Date().toISOString().split('T')[0];
    const data = {
      title: formData.get('titulo'),
      description: formData.get('description'),
      videoLink: formData.get('link'),
      date: hoyId,
      category: categoriaSel.id,
      updatedAt: Date.now()
    };
    try {
      await setDoc(doc(db, 'artifacts', appId, 'users', usuario.uid, 'daily_plans', `${categoriaSel.id}_${hoyId}`), data);
      mostrarAviso("Pizarra Actualizada");
    } catch (e) { mostrarAviso("Error pizarra"); }
  };

  const eliminarJugadora = async (id) => {
    if (!confirm("¿Deseas eliminar definitivamente?")) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'users', usuario.uid, 'players', id));
      setVista('categoria'); setJugadoraSeleccionada(null);
      mostrarAviso("Eliminada");
    } catch (e) { console.error(e); }
  };

  const Header = ({ title, sub, onBack, action }) => (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {onBack && <button onClick={onBack} className="p-2 bg-slate-100 rounded-full active:scale-90 transition-transform"><ChevronLeft size={20} /></button>}
        <div>
          <h1 className="text-lg font-black text-slate-950 uppercase italic tracking-tighter leading-none">{title}</h1>
          {sub && <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{sub}</p>}
        </div>
      </div>
      {action}
    </header>
  );

  const FormularioJugadora = () => (
    <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto text-slate-900">
      <div className="bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl my-8">
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <h3 className="font-black uppercase tracking-widest text-xs italic">Ficha Administrativa</h3>
          <button onClick={() => { setMostrarForm(false); setJugadoraEdit(null); setFotoDniBase64(null); setFotoPerfilBase64(null); }} className="text-2xl font-bold">×</button>
        </div>
        <form onSubmit={guardarJugadora} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-slate-900">
          <button type="button" onClick={() => setEscaneando(true)} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest">📷 ESCANEAR BARRAS DNI</button>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-indigo-600 uppercase ml-2">Foto Jugadora</label>
              <input type="file" accept="image/*" 
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => setFotoPerfilBase64(reader.result);
                    reader.readAsDataURL(file);
                  }
                }} className="hidden" id="foto-perfil-input" />
              <label htmlFor="foto-perfil-input" className="w-full h-32 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center cursor-pointer overflow-hidden text-center">
                {fotoPerfilBase64 || jugadoraEdit?.fotoPerfil ? <img src={fotoPerfilBase64 || jugadoraEdit?.fotoPerfil} className="w-full h-full object-cover" /> : <span className="text-[10px] font-black text-indigo-400 uppercase p-2">Galería</span>}
              </label>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Foto DNI</label>
              <input type="file" accept="image/*" onChange={handleFotoDni} className="hidden" id="foto-dni-input" />
              <label htmlFor="foto-dni-input" className="w-full h-32 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden text-center">
                {fotoDniBase64 || jugadoraEdit?.fotoDni ? <img src={fotoDniBase64 || jugadoraEdit?.fotoDni} className="w-full h-full object-cover opacity-50" /> : <span className="text-[10px] font-black text-slate-400 uppercase p-2">Galería DNI</span>}
              </label>
            </div>
          </div>

          <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nombre Completo</label><input name="nombre" defaultValue={jugadoraEdit?.name} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase ml-2">DNI</label><input name="dni" defaultValue={jugadoraEdit?.dni} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" /></div>
            <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase ml-2">Fecha Nac.</label><input name="fecha" placeholder="DD/MM/AAAA" defaultValue={jugadoraEdit?.birthDate} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" /></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <input name="telefono" defaultValue={jugadoraEdit?.telefono} placeholder="Teléfono" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="direccion" defaultValue={jugadoraEdit?.direccion} placeholder="Dirección" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="escuela" defaultValue={jugadoraEdit?.escuela} placeholder="Escuela" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <textarea name="patologias" defaultValue={jugadoraEdit?.salud_profunda?.patologias} placeholder="Patologías" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold h-20" />
            <textarea name="alergias" defaultValue={jugadoraEdit?.salud_profunda?.alergias} placeholder="Alergias" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold h-20" />
            <input name="grupoSanguineo" defaultValue={jugadoraEdit?.salud_profunda?.grupoSanguineo} placeholder="Grupo Sanguíneo" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="obraSocial" defaultValue={jugadoraEdit?.salud_profunda?.obraSocial} placeholder="Obra Social" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="contactoEmergencia" defaultValue={jugadoraEdit?.salud_profunda?.contactoEmergencia} placeholder="Contacto Emergencia" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="telEmergencia" defaultValue={jugadoraEdit?.salud_profunda?.telEmergencia} placeholder="Tel. Emergencia" className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase text-xs shadow-xl active:scale-95 transition-transform"> {jugadoraEdit ? 'ACTUALIZAR FICHA' : 'CREAR JUGADORA'} </button>
        </form>
      </div>
    </div>
  );

  /* ===================== RENDER VISTAS ===================== */

  if (vista === 'inicio') {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
        <header className="py-12 text-center flex flex-col items-center">
          <div className="mb-6 relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-indigo-600 overflow-hidden">
              <img src='/logo.jpg' alt="Escudo" className="w-20 h-20 object-contain" onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/53/53254.png"} />
            </div>
            <div className="absolute -top-1 -right-1 bg-indigo-600 w-4 h-4 rounded-full border-2 border-white"></div>
          </div>
          <h1 className="text-5xl font-black text-slate-950 italic tracking-tighter leading-none mb-2">FUTSAL<br/>FEMENINO</h1>
          <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full mb-4 shadow-sm"></div>
          <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em]">Gestión Deportiva Pro</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg text-white">
          {CATEGORIAS_EQUIPO.map(cat => (
            <button key={cat.id} onClick={() => { setCategoriaSel(cat); setVista('categoria'); }} className={`${cat.color} h-36 rounded-[40px] shadow-lg flex flex-col items-center justify-center active:scale-95 transition-all border-b-8 border-black/20`}>
              <span className="text-2xl font-black uppercase tracking-tighter">{cat.nombre}</span>
              <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">{cat.edades}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (vista === 'categoria' && categoriaSel) {
    return (
      <div className="flex flex-col h-screen bg-white text-slate-900">
        <Header title={categoriaSel.nombre} sub={categoriaSel.edades} onBack={() => setVista('inicio')} action={<button onClick={() => { setJugadoraEdit(null); setMostrarForm(true); }} className="bg-rose-600 text-white px-4 py-2 rounded-xl font-black text-[10px] tracking-widest shadow-xl">AGREGAR</button>} />
        
        <div className="p-4 grid grid-cols-3 gap-2 mb-6">
          <button onClick={() => {
             const hoy = new Date().toISOString().split('T')[0];
             setSesionActiva({ date: hoy, category: categoriaSel.id, parts: [{ name: 'Físico', duration: 10 }, { name: 'Técnico', duration: 15 }, { name: 'Estrategia', duration: 10 }, { name: 'Partido', duration: 25 }], attendance: {}, result: '', setPieceNotes: '' });
             setVista('planificador');
          }} className="bg-slate-900 text-white p-4 rounded-[28px] flex flex-col items-center justify-center gap-1 shadow-md active:scale-95"><Calendar size={20} /><span className="text-[8px] font-black uppercase">Sesión</span></button>
          
          <button onClick={() => setVista('plan_diario')} className="bg-indigo-600 text-white p-4 rounded-[28px] flex flex-col items-center justify-center gap-1 shadow-md active:scale-95"><Tv size={20} /><span className="text-[8px] font-black uppercase">Pizarra</span></button>
          
          <button onClick={() => setVista('historial')} className="bg-slate-100 text-slate-800 p-4 rounded-[28px] flex flex-col items-center justify-center gap-1 shadow-md active:scale-95"><History size={20} /><span className="text-[8px] font-black uppercase">Historial</span></button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto space-y-4 pb-36">
          {jugadoras.length === 0 ? (
            <div className="text-center py-20 text-slate-300">
              <p className="font-black uppercase tracking-widest text-[10px] italic">Sin atletas registradas</p>
            </div>
          ) : (
            jugadoras.filter(p => p && p.name).map(p => (
              <div key={p.id} className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200 flex justify-between items-center transition-all hover:border-indigo-300" onClick={() => { setJugadoraSeleccionada(p); setVista('detalle_jugadora'); }}>
                <div className="flex-grow flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center border border-slate-200">
                    {p.fotoPerfil ? <img src={p.fotoPerfil} className="w-full h-full object-cover" /> : p.fotoDni ? <img src={p.fotoDni} className="w-full h-full object-cover" /> : <Users size={16} className="text-slate-300" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-800 uppercase leading-none mb-1">{p.name}</h4>
                    <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">ID: {p.dni}</p>
                  </div>
                </div>
                <ChevronLeft size={20} className="rotate-180 text-slate-300" />
              </div>
            ))
          )}
        </div>

        <footer className="bg-slate-950 p-4 grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 border-t border-white/10 rounded-t-[48px] shadow-2xl z-40">
          <button onClick={() => { setPestanaRegistro('asistencia'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform"><span className="text-2xl mb-1">📅</span> <span className="text-[8px] font-black uppercase opacity-70">Asistencia</span></button>
          <button onClick={() => { setPestanaRegistro('partidos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform"><span className="text-2xl mb-1">🏆</span> <span className="text-[8px] font-black uppercase opacity-70">Partidos</span></button>
          <button onClick={() => { setPestanaRegistro('ejercicios'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white active:scale-90 transition-transform"><span className="text-2xl mb-1">🏋️</span> <span className="text-[8px] font-black uppercase opacity-70">Ejercicios</span></button>
          <button onClick={() => { setPestanaRegistro('pagos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-green-400 active:scale-90 transition-transform"><span className="text-2xl mb-1">💵</span> <span className="text-[8px] font-black uppercase">$ Pagos</span></button>
        </footer>

        {mostrarForm && <FormularioJugadora />}
        {escaneando && (
          <div className="fixed inset-0 z-[120] bg-black flex flex-col items-center justify-center p-6">
            <video id="reader" className="w-full max-w-sm aspect-video rounded-[32px] overflow-hidden border-4 border-rose-600 object-cover" autoPlay muted playsInline />
            <button onClick={detenerEscaneo} className="mt-10 bg-white text-black px-12 py-4 rounded-full font-black uppercase text-xs">CANCELAR</button>
          </div>
        )}
      </div>
    );
  }

  if (vista === 'plan_diario') {
    const youtubeId = getYoutubeId(pizarraHoy?.videoLink);
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
        <Header title="Pizarra del Día" sub={categoriaSel.nombre} onBack={() => setVista('categoria')} />
        <div className="p-4 space-y-6 pb-20 overflow-y-auto">
          <section className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
            <h3 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest italic">Cargar Trabajo Diario</h3>
            <form onSubmit={guardarPizarra} className="space-y-4 text-slate-900">
              <input name="titulo" defaultValue={pizarraHoy?.title} placeholder="Título de la sesión" className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs border-none" required />
              <textarea name="description" defaultValue={pizarraHoy?.description} placeholder="Detalle de los ejercicios..." className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs h-32 border-none" required />
              <input name="link" defaultValue={pizarraHoy?.videoLink} placeholder="Link Video YouTube" className="w-full bg-slate-100 p-4 rounded-2xl font-bold text-xs border-none" />
              <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg">Publicar Pizarra</button>
            </form>
          </section>

          {pizarraHoy && (
            <section className="bg-white p-6 rounded-[40px] shadow-lg border border-indigo-100 space-y-4">
              <div className="flex items-center gap-3 border-b pb-3"><PlayCircle size={32} className="text-indigo-600" /><div><h4 className="font-black text-slate-900 uppercase italic leading-none">{pizarraHoy.title}</h4></div></div>
              <div className="text-sm text-slate-700 font-medium whitespace-pre-wrap leading-relaxed">{pizarraHoy.description}</div>
              {youtubeId && <div className="rounded-2xl overflow-hidden aspect-video bg-black shadow-inner"><iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder="0" allowFullScreen></iframe></div>}
            </section>
          )}
        </div>
      </div>
    );
  }

  if (vista === 'planificador') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
        <Header title="Planificador" sub="Sesión de Entrenamiento" onBack={() => setVista('categoria')} />
        <div className="p-4 space-y-6 pb-20 overflow-y-auto">
          <section className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Diagrama de Sesión</h3>
            <div className="space-y-3">
              {sesionActiva?.parts?.map((part, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-rose-600 text-white rounded-xl flex items-center justify-center font-black text-sm">{part.duration}'</div>
                    <span className="font-black text-slate-900 uppercase italic text-xs tracking-tight">{part.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Notas Pelota Parada</h3>
            <textarea className="w-full bg-slate-50 p-4 rounded-3xl border-none font-bold text-xs" placeholder="Ej: Saque corto esquina..." value={sesionActiva?.setPieceNotes} onChange={(e) => setSesionActiva({...sesionActiva, setPieceNotes: e.target.value})} />
          </section>
          <section className="space-y-3">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">Presentes Hoy</h3>
            <div className="grid grid-cols-1 gap-2">
              {jugadoras.map(p => (
                <button key={p.id} onClick={() => {
                  const newAtt = {...sesionActiva.attendance};
                  newAtt[p.id] = !newAtt[p.id];
                  setSesionActiva({...sesionActiva, attendance: newAtt});
                }} className={`p-5 rounded-[28px] flex items-center justify-between transition-all ${sesionActiva?.attendance?.[p.id] ? 'bg-rose-600 text-white shadow-xl scale-[1.02]' : 'bg-white text-slate-400 border border-slate-100'}`}>
                  <span className="font-black uppercase text-[11px] italic tracking-tight">{p.name}</span>
                  <ClipboardCheck size={20} />
                </button>
              ))}
            </div>
          </section>
          <button onClick={async () => {
             try {
               await addDoc(collection(db, 'artifacts', appId, 'users', usuario.uid, 'trainings'), { ...sesionActiva, createdAt: Date.now() });
               mostrarAviso("Sesión guardada"); setVista('categoria');
             } catch (e) { mostrarAviso("Error al guardar"); }
          }} className="w-full bg-slate-950 text-white py-6 rounded-[32px] font-black uppercase text-[11px] tracking-widest shadow-2xl active:scale-95 transition-all">GUARDAR ENTRENAMIENTO</button>
        </div>
      </div>
    );
  }

  if (vista === 'registro_rapido') {
    const playersInCat = jugadoras.filter(p => p.category === categoriaSel.id);
    const fechaArgentina = new Date().toLocaleDateString('es-AR');
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
        <Header title={`Control ${pestanaRegistro}`} sub={`${categoriaSel.nombre} - ${fechaArgentina}`} onBack={() => setVista('categoria')} />
        <div className="p-4 space-y-4 pb-24 overflow-y-auto">
          {playersInCat.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
              <p className="text-xl font-black text-slate-900 mb-6 uppercase italic border-b pb-2 tracking-tighter">{p.name}</p>
              
              {pestanaRegistro === 'asistencia' && (
                <div className="grid grid-cols-2 gap-2">
                  {TIPOS_ASISTENCIA.map(s => <button key={s.id} onClick={() => guardarActividad(p.id, 'attendance', { status: s.id, etiqueta: s.etiqueta })} className={`${s.color} text-white py-5 rounded-3xl text-[10px] font-black uppercase shadow-lg active:scale-95 transition-all border-b-4 border-black/20`}>{s.etiqueta}</button>)}
                </div>
              )}

              {pestanaRegistro === 'pagos' && (
                <div className="grid grid-cols-2 gap-2">
                  {TIPOS_FINANZAS.map(f => <button key={f.id} onClick={() => { const m = prompt(`Monto para ${f.etiqueta}:`); if(m) guardarActividad(p.id, 'payments', { tipo: f.id, etiqueta: f.etiqueta, monto: parseFloat(m) }); }} className="bg-indigo-50 text-indigo-900 p-5 rounded-[32px] flex flex-col items-center border-2 border-indigo-100 active:bg-indigo-200 transition-all shadow-sm"><span className="text-3xl mb-1">{f.icono}</span><span className="text-[10px] font-black uppercase">{f.etiqueta}</span></button>)}
                </div>
              )}

              {pestanaRegistro === 'ejercicios' && (
                <div className="grid grid-cols-2 gap-2">
                  {TIPOS_EJERCICIO.map(d => <button key={d.id} onClick={() => { const n = prompt(`Resultado de ${d.etiqueta}:`); if(n) guardarActividad(p.id, 'drills', { tipo: d.id, etiqueta: d.etiqueta, nota: n }); }} className={`${d.color} text-white p-6 rounded-[32px] flex flex-col items-center shadow-lg active:scale-95 transition-transform`}><span className="text-3xl mb-1">{d.icono}</span><span className="text-[10px] font-black uppercase">{d.etiqueta}</span></button>)}
                </div>
              )}

              {pestanaRegistro === 'partidos' && (
                <div className="space-y-2">
                   <button onClick={() => { const g = prompt("Goles:"); const m = prompt("Minutos:"); if(g || m) guardarActividad(p.id, 'matches', { goles: g, min: m, etiqueta: 'Partido' }); }} className="w-full bg-slate-950 text-white py-6 rounded-[32px] font-black text-[11px] uppercase tracking-widest active:scale-95 shadow-xl">CARGAR ESTADÍSTICAS JUEGO</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (vista === 'detalle_jugadora' && jugadoraSeleccionada) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
        <Header title="Ficha Integral" onBack={() => setVista('categoria')} />
        <div className="p-4 space-y-6 pb-20 overflow-y-auto flex-grow">
          <div className="bg-white p-8 rounded-[48px] shadow-xl flex flex-col items-center text-center border border-slate-100">
            <div className="w-40 h-40 bg-indigo-50 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden mb-4 rotate-2">
              {jugadoraSeleccionada?.fotoPerfil ? <img src={jugadoraSeleccionada.fotoPerfil} className="w-full h-full object-cover" /> : jugadoraSeleccionada.fotoDni ? <img src={jugadoraSeleccionada.fotoDni} className="w-full h-full object-cover" /> : <span className="opacity-20 text-8xl p-8 block">👤</span>}
            </div>
            <h3 className="text-3xl font-black text-slate-900 uppercase leading-none italic tracking-tighter">{jugadoraSeleccionada?.name}</h3>
            <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mt-2 italic">DNI: {jugadoraSeleccionada.dni || 'PENDIENTE'}</p>
            <button onClick={() => { setJugadoraEdit(jugadoraSeleccionada); setMostrarForm(true); }} className="mt-4 w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest active:scale-95 shadow-lg">EDITAR FICHA</button>
          </div>
          
          <div className="bg-white p-6 rounded-[40px] border border-slate-100 space-y-4 shadow-sm">
            <div className="flex justify-between items-center"><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teléfono</span><span className="text-sm font-bold text-slate-700 tracking-tight">{jugadoraSeleccionada.telefono || 'N/A'}</span></div>
            <div className="flex flex-col border-t pt-3"><span className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Dirección</span><span className="text-sm font-bold text-slate-700 leading-tight">{jugadoraSeleccionada.direccion || 'N/A'}</span></div>
          </div>

          <div className="bg-white rounded-[32px] border-2 border-rose-500 overflow-hidden shadow-xl text-slate-900">
            <div className="bg-rose-500 p-4 flex justify-between items-center text-white"><span className="font-black text-xs uppercase italic tracking-widest">⚠️ Ficha Médica</span><span className="bg-white text-rose-600 px-3 py-1 rounded-full font-black text-xs">🩸 {jugadoraSeleccionada.salud_profunda?.grupoSanguineo || 'S/D'}</span></div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Alergias</p><p className="text-sm font-bold text-slate-800">{jugadoraSeleccionada.salud_profunda?.alergias || 'Ninguna'}</p></div>
                <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Patologías</p><p className="text-sm font-bold text-slate-800">{jugadoraSeleccionada.salud_profunda?.patologias || 'Ninguna'}</p></div>
              </div>
              <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100"><p className="text-[9px] font-black text-rose-600 uppercase mb-1 tracking-widest">En caso de Urgencia:</p><p className="text-lg font-black text-slate-900 leading-none">{jugadoraSeleccionada.salud_profunda?.contactoEmergencia || 'S/C'}</p><p className="text-sm font-bold text-rose-600 mt-1">{jugadoraSeleccionada.salud_profunda?.telEmergencia || ''}</p></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-sm text-slate-900">
             <h4 className="text-[10px] font-black text-slate-400 uppercase mb-3 italic tracking-widest">Historial Asistencias</h4>
             <div className="space-y-2">
                {jugadoraSeleccionada.activities?.attendance?.slice(-5).reverse().map((asist, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-800 uppercase">{asist.fechaTexto}</span><span className="text-[8px] text-slate-400 uppercase italic">{asist.diaSemana}</span></div>
                    <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-full ${asist.status === 'presente' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>{asist.etiqueta}</span>
                  </div>
                ))}
                {!jugadoraSeleccionada.activities?.attendance?.length && <p className="text-center text-[9px] text-slate-300 font-bold uppercase italic p-4">Sin registros</p>}
             </div>
          </div>
          <button onClick={() => eliminarJugadora(jugadoraSeleccionada.id)} className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest active:scale-95 mb-10 shadow-sm">Eliminar Atleta</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-10 text-slate-400 font-black uppercase text-xs italic text-center">
       {mensaje && <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl">{mensaje}</div>}
       <div className="flex flex-col items-center gap-4">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
         Conectando...
       </div>
    </div>
  );
}