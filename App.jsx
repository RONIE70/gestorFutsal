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
const firebaseConfig = {
  apiKey: "AIzaSyD5xSfvGA86x4Ekc2LsSuUz7f1hpQh7jwg",
  authDomain: "futsal-pro-9de3a.firebaseapp.com",
  projectId: "futsal-pro-9de3a",
  storageBucket: "futsal-pro-9de3a.firebasestorage.app",
  messagingSenderId: "424044829956",
  appId: "1:424044829956:web:b3f348f2d8afd2859f8451",
  measurementId: "G-Z97DHMX05S"
};

// --- CONSTANTES ---
const CATEGORIAS_EQUIPO = [
  { id: 'primera', nombre: 'Primera', edades: 'libre', color: 'bg-emerald-500' },
  { id: '3ra.', nombre: '3ra.', edades: '2008-2007-2006', color: 'bg-orange-500' },
  { id: 'unicas', nombre: 'Únicas', edades: 'Plantel Superior', color: 'bg-rose-600' },
  { id: 'reserva', nombre: 'Reserva', edades: 'Sub-23', color: 'bg-orange-500' },
  { id: '4ta', nombre: '4ta.', edades: '2009 / 2010', color: 'bg-amber-500' },
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

export default function App() {
  const readerRef = useRef(null);
  const scannerRef = useRef(null);
  const ultimoTextoRef = useRef(null);
  const lecturasIgualesRef = useRef(0);

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
  const [fotoPerfilBase64, setFotoPerfilBase64] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setDb(firestore);
    signInAnonymously(auth);
    return onAuthStateChanged(auth, setUsuario);
  }, []);

  useEffect(() => {
    if (!usuario || !db || !categoriaSel) return;
    const path = `players`;
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
      }
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
      setFotoPerfilBase64(null);
    } catch (e) {
      mostrarAviso("Error al guardar");
    }
  };

  const guardarActividad = async (jugadoraId, tipo, datos) => {
    if (!db || !usuario) return;
    const path = `players`;
    const ref = doc(db, path, jugadoraId);
    const ahora = new Date();
    
    try {
      await updateDoc(ref, {
        [`activities.${tipo}`]: arrayUnion({
          ...datos,
          fechaMs: Date.now(),
          fechaTexto: ahora.toLocaleDateString('es-AR'),
          hora: ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
          diaSemana: ahora.toLocaleDateString('es-AR', { weekday: 'long' })
        })
      });
      mostrarAviso(`${datos.etiqueta} registrado`);
    } catch (e) {
      mostrarAviso("Error al guardar registro");
    }
  };

  const iniciarCamara = async () => {
    if (!readerRef.current) return;
    try {
      const controls = await readerRef.current.decodeFromConstraints(
        { audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } } },
        'reader',
        (result) => {
          if (!result) return;
          const texto = result.getText();
          if (texto === ultimoTextoRef.current) {
            lecturasIgualesRef.current++;
          } else {
            ultimoTextoRef.current = texto;
            lecturasIgualesRef.current = 1;
          }
          if (lecturasIgualesRef.current >= 2) {
            procesarPDF417DNI(texto);
            detenerEscaneo();
          }
        }
      );
      scannerRef.current = controls;
    } catch (e) {
      mostrarAviso('No se pudo abrir la cámara');
      detenerEscaneo();
    }
  };

  const detenerEscaneo = () => { 
    if (scannerRef.current) { scannerRef.current.stop(); scannerRef.current = null; }
    setEscaneando(false); 
  };

  useEffect(() => {
    if (!escaneando) return;
    readerRef.current = new BrowserPDF417Reader();
    requestAnimationFrame(() => { iniciarCamara(); });
    return () => {
      if (scannerRef.current) { scannerRef.current.stop(); scannerRef.current = null; }
      if (readerRef.current) { readerRef.current.reset(); readerRef.current = null; }
      ultimoTextoRef.current = null;
      lecturasIgualesRef.current = 0;
    };
  }, [escaneando]);

  const procesarPDF417DNI = (text) => {
    const datos = parsearDNIArgentino(text);
    if (!datos) { mostrarAviso('No se pudo leer el DNI'); return; }
  };

  const eliminarJugadora = async (id) => {
    if (!confirm("¿Deseas eliminar definitivamente a esta jugadora?")) return;
    try {
      await deleteDoc(doc(db, 'players', id));
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
          <button onClick={() => { setMostrarForm(false); setJugadoraEdit(null); setFotoDniBase64(null); setFotoPerfilBase64(null); }} className="text-2xl font-bold">×</button>
        </div>
        <form onSubmit={guardarJugadora} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <button type="button" onClick={() => setEscaneando(true)} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest">📷 ESCANEAR BARRAS DNI</button>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1 text-center">
              <label className="text-[10px] font-black text-indigo-600 uppercase">Foto Jugadora</label>
              <input type="file" accept="image/*" capture="user" onChange={(e) => {
                const reader = new FileReader();
                reader.onloadend = () => setFotoPerfilBase64(reader.result);
                if(e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
              }} className="hidden" id="foto-perfil-input" />
              <label htmlFor="foto-perfil-input" className="w-full h-32 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200 flex items-center justify-center cursor-pointer overflow-hidden">
                {fotoPerfilBase64 || jugadoraEdit?.fotoPerfil ? <img src={fotoPerfilBase64 || jugadoraEdit?.fotoPerfil} className="w-full h-full object-cover" /> : <span className="text-[10px] font-black text-indigo-400 uppercase p-2 text-center">Subir Foto</span>}
              </label>
            </div>
            <div className="space-y-1 text-center">
              <label className="text-[10px] font-black text-slate-400 uppercase">Foto DNI</label>
              <input type="file" accept="image/*" capture="environment" onChange={handleFotoDni} className="hidden" id="foto-dni-input" />
              <label htmlFor="foto-dni-input" className="w-full h-32 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer overflow-hidden">
                {fotoDniBase64 || jugadoraEdit?.fotoDni ? <img src={fotoDniBase64 || jugadoraEdit?.fotoDni} className="w-full h-full object-cover opacity-50" /> : <span className="text-[10px] font-black text-slate-400 uppercase p-2 text-center">Subir DNI</span>}
              </label>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nombre Completo</label>
            <input name="nombre" defaultValue={jugadoraEdit?.name} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input name="dni" placeholder="DNI" defaultValue={jugadoraEdit?.dni} required className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
            <input name="fecha" placeholder="Nacimiento" defaultValue={jugadoraEdit?.birthDate} className="w-full bg-slate-100 p-4 rounded-2xl border-none font-bold" />
          </div>

          <div className="bg-rose-50 p-4 rounded-[24px] border border-rose-100 space-y-2">
            <h4 className="text-[10px] font-black text-rose-600 uppercase ml-2">Salud Profunda</h4>
            <div className="grid grid-cols-2 gap-2">
              <input name="grupoSanguineo" placeholder="G. Sanguíneo" defaultValue={jugadoraEdit?.salud_profunda?.grupoSanguineo} className="bg-white p-2 rounded-xl text-xs font-bold" />
              <input name="obraSocial" placeholder="Obra Social" defaultValue={jugadoraEdit?.salud_profunda?.obraSocial} className="bg-white p-2 rounded-xl text-xs font-bold" />
            </div>
            <textarea name="alergias" placeholder="Alergias / Patologías" defaultValue={jugadoraEdit?.salud_profunda?.alergias} className="w-full bg-white p-2 rounded-xl text-xs font-bold h-12" />
            <input name="medicacion" placeholder="Medicación" defaultValue={jugadoraEdit?.salud_profunda?.medicacion} className="w-full bg-white p-2 rounded-xl text-xs font-bold" />
            <div className="grid grid-cols-2 gap-2">
              <input name="contactoEmergencia" placeholder="Contacto" defaultValue={jugadoraEdit?.salud_profunda?.contactoEmergencia} className="bg-white p-2 rounded-xl text-xs font-bold" />
              <input name="telEmergencia" placeholder="Teléfono" defaultValue={jugadoraEdit?.salud_profunda?.telEmergencia} className="bg-white p-2 rounded-xl text-xs font-bold" />
            </div>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">
            {jugadoraEdit ? 'ACTUALIZAR FICHA' : 'CREAR JUGADORA'}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {mensaje && <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl">{mensaje}</div>}

      {escaneando && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6">
          <video id="reader" className="w-full max-w-md rounded-3xl border-4 border-indigo-600 shadow-2xl bg-black object-cover" style={{ height: '280px' }} autoPlay muted playsInline />
          <button onClick={detenerEscaneo} className="mt-8 bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px]">Cancelar</button>
        </div>
      )}

      {mostrarForm && <FormularioJugadora />}

      {vista === 'inicio' && (
        <div className="p-6 max-w-lg mx-auto">
          <header className="py-12 text-center">
            <h1 className="text-5xl font-black text-slate-950 italic leading-none mb-2">FUTSAL<br/>FEMENINO</h1>
            <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.3em]">Gestión Deportiva Pro</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIAS_EQUIPO.map(cat => (
              <button key={cat.id} onClick={() => { setCategoriaSel(cat); setVista('categoria'); }} className={`${cat.color} h-36 rounded-[40px] shadow-lg text-white flex flex-col items-center justify-center active:scale-95 transition-all`}>
                <span className="text-2xl font-black uppercase">{cat.nombre}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {vista === 'categoria' && (
        <div className="flex flex-col h-screen">
          <header className={`${categoriaSel?.color} p-6 text-white shadow-xl flex justify-between items-center rounded-b-[48px] z-10 sticky top-0`}>
            <button onClick={() => setVista('inicio')} className="bg-white/20 p-3 rounded-2xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg></button>
            <h2 className="text-xl font-black uppercase">{categoriaSel?.nombre}</h2>
            <button onClick={() => { setJugadoraEdit(null); setMostrarForm(true); }} className="bg-white text-slate-900 px-5 py-2.5 rounded-2xl font-black text-[10px]">AGREGAR</button>
          </header>

          <div className="flex-grow p-6 overflow-y-auto space-y-4 pb-36">
            {jugadoras.map(p => (
              <div key={p.id} onClick={() => { setJugadoraSeleccionada(p); setVista('detalle_jugadora'); }} className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center">
                    {p?.fotoPerfil ? <img src={p.fotoPerfil} className="w-full h-full object-cover" /> : <span className="text-xl">👤</span>}
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-800 uppercase leading-none">{p?.name}</p>
                    <p className="text-[10px] font-black text-indigo-500 uppercase">ID: {p?.dni}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.stopPropagation(); setJugadoraEdit(p); setMostrarForm(true); }} className="p-3 bg-slate-100 rounded-xl text-slate-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                  <button onClick={(e) => { e.stopPropagation(); eliminarJugadora(p.id); }} className="p-3 bg-red-50 rounded-xl text-red-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
              </div>
            ))}
          </div>
          
          <footer className="bg-slate-950 p-4 grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 border-t border-white/10 rounded-t-[48px] shadow-2xl z-40">
            <button onClick={() => { setPestanaRegistro('asistencia'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white"><span className="text-2xl">📅</span><span className="text-[8px] font-black uppercase opacity-70">Asistencia</span></button>
            <button onClick={() => { setPestanaRegistro('partidos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white"><span className="text-2xl">🏆</span><span className="text-[8px] font-black uppercase opacity-70">Partidos</span></button>
            <button onClick={() => { setPestanaRegistro('ejercicios'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-white"><span className="text-2xl">🏋️</span><span className="text-[8px] font-black uppercase opacity-70">Ejercicios</span></button>
            <button onClick={() => { setPestanaRegistro('pagos'); setVista('registro_rapido'); }} className="flex flex-col items-center py-2 text-green-400"><span className="text-2xl">💵</span><span className="text-[8px] font-black uppercase opacity-70">Pagos</span></button>
          </footer>
        </div>
      )}

      {vista === 'registro_rapido' && (
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <header className="bg-slate-900 p-6 text-white flex justify-between items-center rounded-b-[40px] sticky top-0 z-50">
            <button onClick={() => setVista('categoria')} className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase">CERRAR</button>
            <h2 className="text-[10px] font-black uppercase italic tracking-widest">Control: {pestanaRegistro}</h2>
            <div className="w-10"></div>
          </header>
          <div className="p-4 space-y-4 pb-20 flex-grow overflow-y-auto">
            {jugadoras.map(p => (
              <div key={p.id} className="bg-white p-5 rounded-[32px] shadow-md border border-slate-200 text-slate-900">
                <p className="text-xl font-black mb-4 border-b pb-2 uppercase italic leading-none">{p?.name}</p>
                {pestanaRegistro === 'asistencia' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_ASISTENCIA.map(s => (
                      <button key={s.id} onClick={() => guardarActividad(p.id, 'attendance', { status: s.id, etiqueta: s.etiqueta })} className={`${s.color} text-white py-4 rounded-2xl text-[10px] font-black uppercase`}>{s.etiqueta}</button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'pagos' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_FINANZAS.map(f => (
                      <button key={f.id} onClick={() => { const m = prompt(`Monto ${f.etiqueta}:`); if(m) guardarActividad(p.id, 'payments', { tipo: f.id, etiqueta: f.etiqueta, monto: parseFloat(m) }); }} className="bg-indigo-50 text-indigo-900 p-4 rounded-2xl flex flex-col items-center border-2 border-indigo-100">
                        <span className="text-3xl mb-1">{f.icono}</span>
                        <span className="text-[10px] font-black uppercase">{f.etiqueta}</span>
                      </button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'ejercicios' && (
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS_EJERCICIO.map(d => (
                      <button key={d.id} onClick={() => { const n = prompt(`Resultado ${d.etiqueta}:`); if(n) guardarActividad(p.id, 'drills', { tipo: d.id, etiqueta: d.etiqueta, nota: n }); }} className={`${d.color} text-white p-5 rounded-2xl flex flex-col items-center shadow-lg`}>
                        <span className="text-3xl mb-1">{d.icono}</span>
                        <span className="text-[10px] font-black uppercase">{d.etiqueta}</span>
                      </button>
                    ))}
                  </div>
                )}
                {pestanaRegistro === 'partidos' && (
                  <button onClick={() => { const g = prompt("Goles:"); const m = prompt("Minutos:"); if(g || m) guardarActividad(p.id, 'matches', { goles: g, min: m }); }} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase italic">REGISTRAR ESTADÍSTICAS JUEGO</button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {vista === 'detalle_jugadora' && jugadoraSeleccionada && (
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <header className="bg-indigo-950 p-6 text-white flex justify-between items-center sticky top-0 z-50 rounded-b-[40px]">
            <button onClick={() => setVista('categoria')} className="bg-white/10 p-2 rounded-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg></button>
            <h2 className="text-[10px] font-black uppercase italic tracking-widest text-center">Ficha de Atleta</h2>
            <div className="w-10"></div>
          </header>

          <div className="p-4 space-y-6 pb-20 overflow-y-auto flex-grow">
            <div className="bg-white p-8 rounded-[48px] shadow-xl flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-40 h-40 bg-indigo-50 rounded-[40px] flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                  {jugadoraSeleccionada?.fotoPerfil ? <img src={jugadoraSeleccionada.fotoPerfil} className="w-full h-full object-cover" /> : <span className="opacity-20 text-8xl">⚽</span>}
                </div>
                <div className={`absolute -bottom-2 -right-2 ${categoriaSel?.color} text-white px-4 py-1 rounded-2xl text-[10px] font-black uppercase`}>{categoriaSel?.nombre}</div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase leading-none">{jugadoraSeleccionada?.name}</h3>
              <div className="flex gap-4 w-full mt-6">
                <button onClick={() => { setJugadoraEdit(jugadoraSeleccionada); setMostrarForm(true); }} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px]">Editar Ficha</button>
                <button onClick={() => eliminarJugadora(jugadoraSeleccionada.id)} className="p-4 bg-red-50 text-red-600 rounded-2xl shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
              </div>
            </div>

            <section className="space-y-3">
              <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest">Información de Contacto</h4>
              <div className="bg-white p-6 rounded-[32px] border border-slate-200 space-y-4">
                <div className="flex justify-between items-center"><span className="text-[9px] font-black text-slate-400 uppercase">Teléfono</span><span className="text-sm font-bold text-slate-700">{jugadoraSeleccionada?.telefono || 'N/A'}</span></div>
                <div className="flex flex-col border-t pt-3"><span className="text-[9px] font-black text-slate-400 uppercase mb-1">Dirección</span><span className="text-sm font-bold text-slate-700">{jugadoraSeleccionada?.direccion || 'N/A'}</span></div>
                <div className="flex justify-between items-center border-t pt-3"><span className="text-[9px] font-black text-slate-400 uppercase">Escuela</span><span className="text-sm font-bold text-slate-700">{jugadoraSeleccionada?.escuela || 'N/A'}</span></div>
              </div>
            </section>

            <section className="space-y-3">
              <h4 className="text-[10px] font-black text-rose-500 uppercase ml-4 tracking-widest">⚠️ Ficha Médica de Emergencia</h4>
              <div className="bg-white rounded-[32px] border-2 border-rose-500 overflow-hidden shadow-xl">
                <div className="bg-rose-500 p-4 flex justify-between items-center text-white font-black text-xs uppercase">
                  <span>Declaración Jurada</span>
                  <span className="bg-white text-rose-600 px-3 py-1 rounded-full">🩸 {jugadoraSeleccionada?.salud_profunda?.grupoSanguineo || 'S/D'}</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-slate-900">
                    <div><p className="text-[9px] font-black text-slate-400 uppercase">Alergias</p><p className="text-sm font-bold">{jugadoraSeleccionada?.salud_profunda?.alergias || 'Ninguna'}</p></div>
                    <div><p className="text-[9px] font-black text-slate-400 uppercase">Medicación</p><p className="text-sm font-bold">{jugadoraSeleccionada?.salud_profunda?.medicacion || 'No'}</p></div>
                  </div>
                  <div className="border-t pt-3 text-slate-900"><p className="text-[9px] font-black text-slate-400 uppercase">Obra Social</p><p className="text-sm font-bold">{jugadoraSeleccionada?.salud_profunda?.obraSocial || 'No informada'}</p></div>
                  <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 flex justify-between items-center">
                    <div><p className="text-[9px] font-black text-rose-600 uppercase mb-1">En caso de urgencia avisar a:</p><p className="text-lg font-black text-slate-900 leading-none">{jugadoraSeleccionada?.salud_profunda?.contactoEmergencia || 'Sin contacto'}</p><p className="text-sm font-bold text-rose-600 mt-1">{jugadoraSeleccionada?.salud_profunda?.telEmergencia || ''}</p></div>
                    {jugadoraSeleccionada?.salud_profunda?.telEmergencia && <a href={`tel:${jugadoraSeleccionada.salud_profunda.telEmergencia}`} className="bg-rose-500 p-3 rounded-full text-white shadow-lg">📞</a>}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 pb-10">
              <h4 className="text-[10px] font-black text-slate-500 uppercase ml-4 tracking-widest">Historial de Entrenamientos</h4>
              <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-50">
                {!jugadoraSeleccionada?.activities?.attendance || jugadoraSeleccionada.activities.attendance.length === 0 ? (
                  <div className="p-6 text-center text-slate-400 text-[10px] font-black uppercase italic">Sin asistencias registradas</div>
                ) : (
                  [...jugadoraSeleccionada.activities.attendance].sort((a, b) => b.fechaMs - a.fechaMs).map((asist, idx) => (
                    <div key={idx} className="p-4 flex justify-between items-center">
                      <div className="flex flex-col"><span className="text-[10px] font-black text-slate-900 uppercase">{asist.diaSemana}</span><span className="text-[12px] font-bold text-slate-500">{asist.fechaTexto}</span></div>
                      <div className="flex flex-col items-end"><span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase text-white ${asist.status === 'presente' ? 'bg-green-500' : 'bg-slate-400'}`}>{asist.etiqueta}</span><span className="text-[9px] font-bold text-slate-400 mt-1">{asist.hora} hs</span></div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}