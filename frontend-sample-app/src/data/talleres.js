
import imgkarate from '../assets/karate.jpg'; //cambien la imagen por una del deporte
import imgajedrez from '../assets/ajedrez.jpg'; 
import imgbasquet from '../assets/basquet.jpg';
import imgfutsal from '../assets/futsal.jpg';
import imggimnasia from '../assets/gimnasia.jpg';
import imgpingpong from '../assets/pingpong.jpg';


// Definición de los 10 bloques oficiales de la universidad
export const BLOQUES_HORARIOS = [
  '09:40 - 10:50',
  '11:05 - 12:15',
  '12:30 - 13:40',
  '13:40 - 14:40',
  '14:40 - 15:50',
  '16:05 - 17:15',
  '17:30 - 18:40',
  '18:55 - 20:05',
  '20:20 - 21:30',
  '21:45 - 22:55'
]

// Opciones de Reserva con el detalle por día y cancha
export const OPCIONES_RESERVA = [
  // ==========================================
  // CANCHA 1 DE FÚTBOL
  // ==========================================
  // Lunes
  { id: 'c1-lun-1', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c1-lun-2', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-lun-3', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-lun-4', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-lun-5', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-lun-6', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-lun-7', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-lun-8', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-lun-9', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-lun-10', nombre: 'Cancha 1 de Fútbol', dia: 'Lunes', horario: '21:45 - 22:55', cupos: 0 },

  // Martes
  { id: 'c1-mar-1', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c1-mar-2', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-mar-3', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-mar-4', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-mar-5', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-mar-6', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-mar-7', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-mar-8', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-mar-9', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-mar-10', nombre: 'Cancha 1 de Fútbol', dia: 'Martes', horario: '21:45 - 22:55', cupos: 0 },

  // Miércoles
  { id: 'c1-mie-1', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c1-mie-2', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-mie-3', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-mie-4', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-mie-5', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-mie-6', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-mie-7', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-mie-8', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-mie-9', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-mie-10', nombre: 'Cancha 1 de Fútbol', dia: 'Miércoles', horario: '21:45 - 22:55', cupos: 0 },

  // Jueves
  { id: 'c1-jue-1', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c1-jue-2', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-jue-3', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-jue-4', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-jue-5', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-jue-6', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-jue-7', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-jue-8', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-jue-9', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-jue-10', nombre: 'Cancha 1 de Fútbol', dia: 'Jueves', horario: '21:45 - 22:55', cupos: 0 },

  // Viernes
  { id: 'c1-vie-1', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 'c1-vie-2', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-vie-3', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-vie-4', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-vie-5', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-vie-6', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-vie-7', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-vie-8', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-vie-9', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-vie-10', nombre: 'Cancha 1 de Fútbol', dia: 'Viernes', horario: '21:45 - 22:55', cupos: 0 },

  // Sábado
  { id: 'c1-sab-1', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c1-sab-2', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c1-sab-3', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c1-sab-4', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c1-sab-5', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c1-sab-6', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c1-sab-7', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c1-sab-8', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c1-sab-9', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c1-sab-10', nombre: 'Cancha 1 de Fútbol', dia: 'Sábado', horario: '21:45 - 22:55', cupos: 0 },

  // ==========================================
  // CANCHA 2 DE FÚTBOL
  // ==========================================
  // Lunes
  { id: 'c2-lun-1', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 'c2-lun-2', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-lun-3', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-lun-4', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-lun-5', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-lun-6', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-lun-7', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c2-lun-8', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-lun-9', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-lun-10', nombre: 'Cancha 2 de Fútbol', dia: 'Lunes', horario: '21:45 - 22:55', cupos: 0 },

  // Martes
  { id: 'c2-mar-1', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c2-mar-2', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-mar-3', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-mar-4', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-mar-5', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-mar-6', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-mar-7', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c2-mar-8', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-mar-9', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-mar-10', nombre: 'Cancha 2 de Fútbol', dia: 'Martes', horario: '21:45 - 22:55', cupos: 0 },

  // Miércoles
  { id: 'c2-mie-1', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '09:40 - 10:50', cupos: 1 },
  { id: 'c2-mie-2', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-mie-3', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-mie-4', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-mie-5', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-mie-6', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-mie-7', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c2-mie-8', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-mie-9', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-mie-10', nombre: 'Cancha 2 de Fútbol', dia: 'Miércoles', horario: '21:45 - 22:55', cupos: 0 },

  // Jueves
  { id: 'c2-jue-1', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '09:40 - 10:50', cupos: 1 },
  { id: 'c2-jue-2', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-jue-3', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-jue-4', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-jue-5', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-jue-6', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-jue-7', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c2-jue-8', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-jue-9', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-jue-10', nombre: 'Cancha 2 de Fútbol', dia: 'Jueves', horario: '21:45 - 22:55', cupos: 0 },

  // Viernes
  { id: 'c2-vie-1', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 'c2-vie-2', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-vie-3', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-vie-4', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-vie-5', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-vie-6', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-vie-7', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '17:30 - 18:40', cupos: 1 },
  { id: 'c2-vie-8', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-vie-9', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-vie-10', nombre: 'Cancha 2 de Fútbol', dia: 'Viernes', horario: '21:45 - 22:55', cupos: 0 },

  // Sábado
  { id: 'c2-sab-1', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '09:40 - 10:50', cupos: 0 },
  { id: 'c2-sab-2', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '11:05 - 12:15', cupos: 0 },
  { id: 'c2-sab-3', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'c2-sab-4', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '13:40 - 14:40', cupos: 0 },
  { id: 'c2-sab-5', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '14:40 - 15:50', cupos: 0 },
  { id: 'c2-sab-6', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'c2-sab-7', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '17:30 - 18:40', cupos: 0 },
  { id: 'c2-sab-8', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'c2-sab-9', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '20:20 - 21:30', cupos: 0 },
  { id: 'c2-sab-10', nombre: 'Cancha 2 de Fútbol', dia: 'Sábado', horario: '21:45 - 22:55', cupos: 0 },

  // ==========================================
  // CANCHA DE TENIS
  // ==========================================
  // Lunes
  { id: 't-lun-1', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-lun-2', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-lun-3', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-lun-4', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '13:40 - 14:40', cupos: 1 },
  { id: 't-lun-5', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '14:40 - 15:50', cupos: 1 },
  { id: 't-lun-6', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '16:05 - 17:15', cupos: 0 },
  { id: 't-lun-7', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '17:30 - 18:40', cupos: 1 },
  { id: 't-lun-8', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '18:55 - 20:05', cupos: 0 },
  { id: 't-lun-9', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-lun-10', nombre: 'Cancha de Tenis', dia: 'Lunes', horario: '21:45 - 22:55', cupos: 0 },

  // Martes
  { id: 't-mar-1', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-mar-2', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-mar-3', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-mar-4', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '13:40 - 14:40', cupos: 1 },
  { id: 't-mar-5', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '14:40 - 15:50', cupos: 1 },
  { id: 't-mar-6', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '16:05 - 17:15', cupos: 1 },
  { id: 't-mar-7', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '17:30 - 18:40', cupos: 1 },
  { id: 't-mar-8', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '18:55 - 20:05', cupos: 1 },
  { id: 't-mar-9', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-mar-10', nombre: 'Cancha de Tenis', dia: 'Martes', horario: '21:45 - 22:55', cupos: 0 },

  // Miércoles
  { id: 't-mie-1', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-mie-2', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-mie-3', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-mie-4', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '13:40 - 14:40', cupos: 1 },
  { id: 't-mie-5', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '14:40 - 15:50', cupos: 1 },
  { id: 't-mie-6', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '16:05 - 17:15', cupos: 0 },
  { id: 't-mie-7', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '17:30 - 18:40', cupos: 0 },
  { id: 't-mie-8', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '18:55 - 20:05', cupos: 1 },
  { id: 't-mie-9', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-mie-10', nombre: 'Cancha de Tenis', dia: 'Miércoles', horario: '21:45 - 22:55', cupos: 0 },

  // Jueves
  { id: 't-jue-1', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-jue-2', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-jue-3', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-jue-4', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '13:40 - 14:40', cupos: 1 },
  { id: 't-jue-5', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '14:40 - 15:50', cupos: 1 },
  { id: 't-jue-6', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '16:05 - 17:15', cupos: 1 },
  { id: 't-jue-7', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '17:30 - 18:40', cupos: 0 },
  { id: 't-jue-8', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '18:55 - 20:05', cupos: 0 },
  { id: 't-jue-9', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-jue-10', nombre: 'Cancha de Tenis', dia: 'Jueves', horario: '21:45 - 22:55', cupos: 0 },

  // Viernes
  { id: 't-vie-1', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-vie-2', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-vie-3', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-vie-4', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '13:40 - 14:40', cupos: 1 },
  { id: 't-vie-5', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '14:40 - 15:50', cupos: 1 },
  { id: 't-vie-6', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '16:05 - 17:15', cupos: 1 },
  { id: 't-vie-7', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '17:30 - 18:40', cupos: 1 },
  { id: 't-vie-8', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '18:55 - 20:05', cupos: 1 },
  { id: 't-vie-9', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-vie-10', nombre: 'Cancha de Tenis', dia: 'Viernes', horario: '21:45 - 22:55', cupos: 0 },

  // Sábado
  { id: 't-sab-1', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '09:40 - 10:50', cupos: 1 },
  { id: 't-sab-2', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '11:05 - 12:15', cupos: 1 },
  { id: 't-sab-3', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '12:30 - 13:40', cupos: 1 },
  { id: 't-sab-4', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '13:40 - 14:40', cupos: 0 },
  { id: 't-sab-5', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '14:40 - 15:50', cupos: 0 },
  { id: 't-sab-6', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '16:05 - 17:15', cupos: 0 },
  { id: 't-sab-7', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '17:30 - 18:40', cupos: 0 },
  { id: 't-sab-8', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '18:55 - 20:05', cupos: 0 },
  { id: 't-sab-9', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '20:20 - 21:30', cupos: 0 },
  { id: 't-sab-10', nombre: 'Cancha de Tenis', dia: 'Sábado', horario: '21:45 - 22:55', cupos: 0 },

  // ==========================================
  // SALA DE PESAS / MUSCULACIÓN
  // ==========================================
  { id: 'p-1', nombre: 'Sala de Pesas / Musculación', horario: '09:40 - 10:50', cupos: 15 },
  { id: 'p-2', nombre: 'Sala de Pesas / Musculación', horario: '11:05 - 12:15', cupos: 8 },
  { id: 'p-3', nombre: 'Sala de Pesas / Musculación', horario: '12:30 - 13:40', cupos: 0 },
  { id: 'p-4', nombre: 'Sala de Pesas / Musculación', horario: '13:40 - 14:40', cupos: 12 },
  { id: 'p-5', nombre: 'Sala de Pesas / Musculación', horario: '14:40 - 15:50', cupos: 5 },
  { id: 'p-6', nombre: 'Sala de Pesas / Musculación', horario: '16:05 - 17:15', cupos: 0 },
  { id: 'p-7', nombre: 'Sala de Pesas / Musculación', horario: '17:30 - 18:40', cupos: 3 },
  { id: 'p-8', nombre: 'Sala de Pesas / Musculación', horario: '18:55 - 20:05', cupos: 0 },
  { id: 'p-9', nombre: 'Sala de Pesas / Musculación', horario: '20:20 - 21:30', cupos: 6 },
  { id: 'p-10', nombre: 'Sala de Pesas / Musculación', horario: '21:45 - 22:55', cupos: 10 }
]

export const LISTA_TALLERES = [
  { 
    id: 1, 
    nombre: 'Ajedrez', 
    campus: 'Campus Casa Central',
    profesor: 'Raúl Molina Muñoz',
    recinto: 'Sala de Estar',
    horario: 'Jueves: 12:30 - 13:40',
    imagen: imgajedrez
  },
  { 
    id: 2, 
    nombre: 'Básquetbol', 
    campus: 'Campus Casa Central',
    profesor: 'Por definir',
    recinto: 'Gimnasio Principal',
    horario: 'Lunes y Miércoles: 15:45 - 17:15',
    imagen: imgbasquet
  },
  { 
    id: 3, 
    nombre: 'Futsal', 
    campus: 'Campus Casa Central',
    profesor: 'Pablo Fernández Troncoso',
    recinto: 'Cancha Exterior',
    horario: 'Lunes: 17:30 - 18:40  \n Jueves 17:30 - 18:40',
    imagen: imgfutsal
  },
  { 
    id: 4, 
    nombre: 'Gimnasia Artística', 
    campus: 'Campus Casa Central',
    profesor: ' Bruce Gallardo',
    recinto: 'Sala de Gimnasia',
    horario: 'Viernes: 11:00 - 12:30',
    imagen: imggimnasia
    
  },
  { 
    id: 5, 
    nombre: 'Básquetbol 3x3', 
    campus: ' San Joaquín / Vitacura',
    profesor: ' Felipe Reyes Sangermani',
    recinto: 'Sala de Gimnasia',
    horario: 'Lunes: 13:40-14:40, Vitacura \n Martes: 12:30-13:40 San Joaquín',
    imagen: imgbasquet
    
  },
  { 
    id: 6, 
    nombre: 'Tenis de Mesa', 
    campus: 'San Joaquín',
    profesor: 'Isabel Castillo Barrera',
    recinto: 'Gimnasio',
    horario: 'Jueves: 17:30 - 18:40',
    imagen: imgpingpong
    
  },
  { 
    id: 7, 
    nombre: 'Karate', 
    campus: 'Campus San Joaquín / Vitacura',
    profesor: ' Patricio Cifra Abarca',
    recinto: 'Gimnasio',
    horario: 'Jueves: 13:40 - 14:40 San Joaquín\n Martes: 12:30 - 13:40 Vitacura',
    imagen: imgkarate
    
  },
  { 
    id: 8, 
    nombre: 'Futsal', 
    campus: 'Campus San Joaquín',
    profesor: '  Jose Silva Albornoz',
    recinto: 'Gimnasio',
    horario: 'Miércoles: 17:30 - 18:40',
    imagen: imgfutsal
    
  }
];