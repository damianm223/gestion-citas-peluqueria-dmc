
export interface HorarioDisponible {
  id: number;
  profesionalId: number;
  especialidad: string;
  dia: string; // Ej: 'lunes'
  horas: string[]; // Ej: ['10:00', '11:00']
}