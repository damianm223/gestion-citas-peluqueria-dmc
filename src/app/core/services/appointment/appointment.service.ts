import { Injectable } from '@angular/core';

interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
}

export interface Appointment {
  id: number;
  cliente: string;
  email: string;
  telefono: string;
  profesional: string;
  fecha: string;
  hora: string;
  estado: 'pendiente' | 'completada' | 'en curso';
  observaciones?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private profesionalSeleccionado: Profesional | null = null;
  private fechaSeleccionada: string | null = null;
  private horaSeleccionada: string | null = null;

  // ---- Profesional ----
  setProfesional(prof: Profesional) {
    this.profesionalSeleccionado = prof;
  }
  getProfesional(): Profesional | null {
    return this.profesionalSeleccionado;
  }

  // ---- Fecha ----
  setFecha(fecha: string) {
    this.fechaSeleccionada = fecha;
  }
  getFecha(): string | null {
    return this.fechaSeleccionada;
  }

  // ---- Hora ----
  setHora(hora: string) {
    this.horaSeleccionada = hora;
  }
  getHora(): string | null {
    return this.horaSeleccionada;
  }

  // ---- Mock citas (para admin) ----
  private appointments: Appointment[] = [
    {
      id: 1,
      cliente: 'Ana Gómez',
      email: 'ana@example.com',
      telefono: '612345678',
      profesional: 'Jose Antonio',
      fecha: '2025-08-10',
      hora: '10:30',
      estado: 'pendiente',
      observaciones: 'Quiere peinado para boda'
    },
    {
      id: 2,
      cliente: 'Luis Martín',
      email: 'luis@example.com',
      telefono: '699112233',
      profesional: 'Carlos',
      fecha: '2025-08-12',
      hora: '16:00',
      estado: 'completada'
    }
  ];

  getAll(): Appointment[] {
    return this.appointments;
  }

  getById(id: number): Appointment | undefined {
    return this.appointments.find(a => a.id === id);
  }
}
