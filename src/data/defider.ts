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

export type Taller = { nombre: string; area: string; horario: string[]; lugar: string; profesor: string };

export const talleres: Record<Campus, Taller[]> = {
  "Casa Central": [
    { profesor: "Profesor: Raúl Molina Muñoz", nombre: "Ajedrez", area: "Deportivo", horario: ["Jueves: 12:30 – 13:40"], lugar: "Sala de Estar" },
    { profesor: "Profesor: Antonio López Pérez" , nombre: "Básquetbol", area: "Deportivo", horario: ["Viernes: 14:40 - 15:50"], lugar: "Cancha 5x5" },
    { profesor: "Profesor: Pablo Fernández Troncoso", nombre: "Futsal", area: "Deportivo", horario: ["Lunes: 17:30 - 18:40", "Jueves 17:30 - 18:40"], lugar: "Cancha 7x7" },
    { profesor: "Profesor: Bruce Gallardo", nombre: "Gimnasia Artística", area: "Deportivo", horario: ["Martes y Jueves: 12:30 - 13:40"], lugar: "Gimnasio 1" },
    { profesor: "Profesor: Gastón Vergara Verdejo", nombre: "Judo", area: "Deportivo", horario:["Lunes: 18:50 - 20:00", "Miércoles: 18:50 - 20:00 y 20:15 - 21:25"], lugar: "Sala Multiuso Gimnasio 3"},
    { profesor: "Profesor: Germán Oliveros Santos", nombre: "Karate", area: "Deportivo", horario: ["Martes: 12:30 - 13:40"], lugar: "Sala Multiuso Gimnasio 3" },
    { profesor: "Profesor: Miguel Gonzalez Vergara", nombre: "Running", area:"Deportivo", horario: ["Martes y Jueves: 11:05 - 12:15"],  lugar: "Pista Atlética Estadio USM"},
    { profesor: "Profesor: Sebastián Aguilar Gajardo", nombre: "Taekwondo", area: "Deportivo", horario:["Martes: 18:50 - 20:00","Viernes: 17:30 - 18:40"], lugar: "Gimnasio 2"},
    { profesor: "Profesor: Enrique Cabello Contreras", nombre: "Tenis", area: "Deportivo", horario:["Jueves: 11:05 - 11:15"], lugar: "Cancha Tenis"},
    { profesor: "Profesor: Antonio López Pérez", nombre: "Ultimate Frisbee", area: "Deportivo", horario:["Viernes: 14:40 - 15:50"], lugar: "Estadio USM"},
    { profesor: "Profesor: Jorge Botau Mancilla", nombre: "Vóleibol", area: "Deportivo", horario:["Martes: 12:30 - 13:40"], lugar: "Gimnasio 2"},
    { profesor: "Profesores: \r\n Gonzalo Riesco Camus y Jorge Botau Mancilla", nombre: "Entrenamiento Funcional", area: "Fitness", horario: ["Martes: 9:40 - 10:50","Viernes: 12:30 - 13:40"], lugar: "Sala Multiuso Gimnasio 3"},
    { profesor: "Profesor: Gonzalo Riesco Camus y Jorge Botau Mancilla", nombre: "GAP", area: "Fitness", horario: ["Jueves: 14:40 - 15:50", "Viernes: 09:40 - 10:50"], lugar: "Sala Multiuso Gimnasio 3" },
    { profesor: "Profesora: Nicole Monsalve Vargas", nombre: "Pilates", area: "Fitness", horario: ["Lunes: 16:05 - 17:15", "Jueves: 12:30 - 13:40"], lugar: "Sala Multiuso Gimnasio 3"  },
    { profesor: "Profesor: Gonzalo Riesco Camus y Jorge Botau Mancilla", nombre: "TRX", area: "Fitness", horario: ["Martes: 11:05 - 12:15", "Viernes: 11:05 - 12:15"], lugar: "Sala Multiuso Gimnasio 3" },
    { profesor: "Profesoras: Nicole Monsalve Vargas y Claudia Alcaíno Arce",nombre: "Yoga", area: "Fitness", horario: ["Lunes: 11:05 - 12:15", "Jueves: 16:05 - 17:15", "Viernes: 14:40 a 15:50"], lugar: "Sala Multiuso Gimnasio 3" },
  ],
  Vitacura: [
    { profesor: "Profesor: Felipe Reyes Sangermani", nombre: "Básquetbol 3x3", area: "Deportivo", horario: ["Lunes: 13:40 - 14:40"], lugar: "Gimnasio" },
    { profesor: "Profesor: Patricio Cifra Abarca", nombre: "Karate", area: "Deportivo", horario: ["Martes: 12:30 - 13:40 "], lugar: "Gimnasio" },
    { profesor: "Profesor: Karen Cea", nombre: "Entrenamiento Funcional", area: "Fitness", horario: ["Martes 13:40 - 14:40"], lugar: "Gimnasio"},
    { profesor: "Profesor: Haruko Tsukame Saez", nombre: "Salsa", area: "Artísticos y Culturales", horario: ["Jueves: 12:25 - 14:25"], lugar:"Gimnasio"},
    { profesor: "Profesor: Haruko Tsukame Saez", nombre: "Danza", area: "Artísticos y Culturales", horario: ["Jueves: 12:15 - 13:25"], lugar: "Gimnasio "},
    { profesor: "Profesor: José Gallardo Hurtado", nombre: "Teatro", area: "Artísticos y Culturales", horario: ["Martes: 12:15 - 13:25 "], lugar: "Belloto 1"}

  ],
  "San Joaquín": [
    { profesor: "Profesora: Isabel Castillo Barrera", nombre: "Tenis de Mesa", area: "Deportivo", horario: ["Jueves: 17:30 - 18:40"], lugar: "Gimnasio" },
    { profesor: "Profesor: Felipe Reyes Sangermani", nombre: "Básquetbol 3x3", area: "Deportivo", horario: ["Martes: 12:30 - 13:40"], lugar: "Gimnasio" },
    { profesor: "Profesor: Patricio Cifra Abarca", nombre: "Karate", area: "Deportivo", horario: ["Jueves: 13:40 - 14:40"], lugar: "Gimnasio" },
    { profesor: "Profesor: Jose Silva Albornoz", nombre: "Futsal", area: "Deportivo", horario: ["Miércoles: 17:30 - 18:40"], lugar: "Gimnasio" },
    { profesor: "Profesor: José Sanchez Maldonado", nombre: "Balonmano", area: "Deportivo", horario:["Viernes: 13:40 - 14:40"], lugar: "Gimnasio"},
    { profesor: "Profesor: Luis Bugueño Lizana", nombre: "Vóleibol Playa", area: "Deportivo", horario:["Jueves: 17:30 - 18:40"], lugar: "Cancha Vóleibol Playa"},
    { profesor: "Profesor: Luis Bugueño Lizana", nombre: "Vóleibol", area: "Deportivo", horario: ["Martes: 13:40 - 14:40 y 17:30 - 18:40"], lugar: "Gimnasio"},
    { profesor: "Profesora: Karen Cea", nombre: "Entrenamiento Funcional", area: "Fitness", horario: ["Lunes: 13:40 - 14:40", "Jueves: 12:30 - 13:30"], lugar: "Gimnasio"},
    { profesor: "Profesora: Valeska Ahumada", nombre: "Spinning", area: "Fitness", horario: ["Lunes: 12:30 a 13:30","Jueves: 12:30 a 13:30"], lugar: "Sala de Spinning" },
    { profesor: "Profesor: Haruko Tsukame Saez", nombre: "Salsa", area: "Artísticos y Culturales", horario: ["Viernes: 12:15 - 13:25"], lugar:"Sala Multiuso"},
    { profesor: "Profesor: Haruko Tsukame Saez", nombre: "Danza", area: "Artísticos y Culturales", horario: ["Martes: 12:15 - 13:25", "Viernes: 15:00 - 17:00"], lugar: "Sala Multiuso"},
    { profesor: "Profesor: Haruko Tsukame Saez", nombre: "Folclor", area: "Artísticos y Culturales", horario: ["Martes: 13:25 - 14:25","Viernes 17:30 - 19:40"], lugar: "Sala Multiuso"},
    { profesor: "Profesor: José Gallardo Hurtado", nombre: "Teatro", area: "Artísticos y Culturales", horario: ["Jueves: 12:15 - 13:25"], lugar: "TAM"}
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
