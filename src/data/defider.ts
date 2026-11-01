export type Campus = "Casa Central" | "Vitacura" | "San Joaquín";
export const campuses: Campus[] = ["Casa Central", "Vitacura", "San Joaquín"];

export const selecciones = [
  { nombre: "Atletismo", campus: "Casa Central / San Joaquín", entrenamiento: "Lun y Mié 18:00–20:00" },
  { nombre: "Ajedrez", campus: "Casa Central / San Joaquín", entrenamiento: "Mar y Jue 17:00–19:00" },
  { nombre: "Básquetbol", campus: "Casa Central / San Joaquín", entrenamiento: "Lun, Mié y Vie 19:00–21:00" },
  { nombre: "Fútbol", campus: "Casa Central / San Joaquín", entrenamiento: "Mar y Jue 18:30–20:30" },
  { nombre: "Futsal", campus: "Casa Central / San Joaquín", entrenamiento: "Lun y Mié 17:00–19:00" },
  { nombre: "Handball", campus: "Casa Central", entrenamiento: "Mar y Jue 19:00–21:00" },
  { nombre: "Natación", campus: "Casa Central", entrenamiento: "Lun a Vie 07:00–08:30" },
  { nombre: "Rugby", campus: "Casa Central / San Joaquín", entrenamiento: "Mar, Jue y Sáb" },
  { nombre: "Tenis", campus: "Casa Central / San Joaquín", entrenamiento: "Mié y Vie 16:00–18:00" },
  { nombre: "Tenis de Mesa", campus: "Casa Central / San Joaquín", entrenamiento: "Lun y Jue 17:30–19:30" },
  { nombre: "Vóleibol", campus: "Casa Central / San Joaquín", entrenamiento: "Mar y Jue 17:00–19:00" },
  { nombre: "Escalada", campus: "Casa Central", entrenamiento: "Mié y Vie 18:00–20:00" },
];

export type Taller = { nombre: string; area: string; horario: string[]; lugar: string };

export const talleres: Record<Campus, Taller[]> = {
  "Casa Central": [
    { nombre: "Ajedrez", area: "Deportivo", horario: ["Martes 17:00–18:30", "Jueves 17:00–18:30"], lugar: "Sala de Ajedrez" },
    { nombre: "Básquetbol", area: "Deportivo", horario: ["Lunes 18:00–19:30", "Miércoles 18:00–19:30"], lugar: "Gimnasio Central" },
    { nombre: "Futsal", area: "Deportivo", horario: ["Martes 19:00–20:30", "Jueves 19:00–20:30"], lugar: "Gimnasio Central" },
    { nombre: "Gimnasia Artística", area: "Deportivo", horario: ["Lunes 16:00–17:30", "Miércoles 16:00–17:30"], lugar: "Sala Multiuso" },
    { nombre: "Spinning", area: "Acondicionamiento", horario: ["Lunes 13:00–14:00", "Miércoles 13:00–14:00", "Viernes 13:00–14:00"], lugar: "Sala de Spinning" },
    { nombre: "Yoga", area: "Bienestar", horario: ["Martes 13:00–14:00", "Jueves 13:00–14:00"], lugar: "Sala Multiuso" },
    { nombre: "Danza Contemporánea", area: "Artístico", horario: ["Viernes 16:00–18:00"], lugar: "Sala de Danza" },
  ],
  Vitacura: [
    { nombre: "Básquetbol 3x3", area: "Deportivo", horario: ["Martes 18:00–19:30", "Jueves 18:00–19:30"], lugar: "Multicancha" },
    { nombre: "Karate", area: "Deportivo", horario: ["Lunes 19:00–20:30", "Miércoles 19:00–20:30"], lugar: "Sala Multiuso" },
    { nombre: "Funcional", area: "Acondicionamiento", horario: ["Lunes 13:00–14:00", "Jueves 13:00–14:00"], lugar: "Sala de Musculación" },
    { nombre: "Pilates", area: "Bienestar", horario: ["Miércoles 13:00–14:00"], lugar: "Sala Multiuso" },
  ],
  "San Joaquín": [
    { nombre: "Tenis de Mesa", area: "Deportivo", horario: ["Lunes 17:00–18:30", "Miércoles 17:00–18:30"], lugar: "Gimnasio San Joaquín" },
    { nombre: "Básquetbol 3x3", area: "Deportivo", horario: ["Martes 17:00–18:30", "Jueves 17:00–18:30"], lugar: "Multicancha" },
    { nombre: "Karate", area: "Deportivo", horario: ["Martes 19:00–20:30", "Jueves 19:00–20:30"], lugar: "Sala de Artes Marciales" },
    { nombre: "Futsal", area: "Deportivo", horario: ["Lunes 19:00–20:30", "Miércoles 19:00–20:30"], lugar: "Gimnasio San Joaquín" },
    { nombre: "Spinning", area: "Acondicionamiento", horario: ["Martes 13:00–14:00", "Jueves 13:00–14:00"], lugar: "Sala de Spinning" },
    { nombre: "Zumba", area: "Bienestar", horario: ["Viernes 13:00–14:00"], lugar: "Sala Multiuso" },
  ],
};

export type Servicio = {
  slug: string;
  nombre: string;
  descripcion: string;
  opciones?: string[];
  bloques: string[];
  cupos: number;
};

export const servicios: Servicio[] = [
  {
    slug: "sala-musculacion",
    nombre: "Sala de musculación",
    descripcion: "Reserva un bloque de 1 hora en la sala de musculación de tu campus.",
    bloques: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    cupos: 20,
  },
  {
    slug: "taller-spinning",
    nombre: "Taller de spinning",
    descripcion: "Asegura tu bicicleta para la próxima clase de spinning.",
    bloques: ["13:00", "18:00", "19:00"],
    cupos: 15,
  },
  {
    slug: "canchas",
    nombre: "Canchas de fútbol y tenis",
    descripcion: "Reserva una cancha de fútbol o de tenis por 1 hora.",
    opciones: ["Cancha de fútbol", "Cancha de tenis 1", "Cancha de tenis 2"],
    bloques: ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
    cupos: 1,
  },
];
