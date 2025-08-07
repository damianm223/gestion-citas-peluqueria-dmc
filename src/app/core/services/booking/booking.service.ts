import { Injectable } from '@angular/core';
import { HorarioDisponible } from '@app/core/models/horario.model';



@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private disponibilidad: HorarioDisponible[] = [
    {
      id: 1,
      profesionalId: 1,
      especialidad: 'Corte de pelo',
      dia: 'lunes',
      horas: ['10:00', '11:00', '12:00']
    },
    {
      id: 2,
      profesionalId: 2,
      especialidad: 'Color',
      dia: 'martes',
      horas: ['09:30', '10:30']
    }
  ];

  // === GET Horarios por profesional ===
  getHorariosPorProfesional(profesionalId: number): HorarioDisponible[] {
    return this.disponibilidad.filter(h => h.profesionalId === profesionalId);
  }

  getHorasPorDia(profesionalId: number, dia: string): string[] {
    const horarios = this.disponibilidad.filter(h => h.profesionalId === profesionalId && h.dia === dia);
    return horarios.flatMap(h => h.horas);
  }

  // === Añadir nueva hora ===
  addHora(profesionalId: number, dia: string, especialidad: string, hora: string): void {
    let horario = this.disponibilidad.find(
      h => h.profesionalId === profesionalId && h.dia === dia && h.especialidad === especialidad
    );

    if (horario) {
      if (!horario.horas.includes(hora)) {
        horario.horas.push(hora);
      }
    } else {
      this.disponibilidad.push({
        id: Date.now(),
        profesionalId,
        especialidad,
        dia,
        horas: [hora]
      });
    }
  }

  // === Eliminar hora existente ===
  removeHora(profesionalId: number, dia: string, especialidad: string, hora: string): void {
    const horario = this.disponibilidad.find(
      h => h.profesionalId === profesionalId && h.dia === dia && h.especialidad === especialidad
    );

    if (horario) {
      horario.horas = horario.horas.filter(h => h !== hora);
    }
  }

  // === Obtener especialidades por profesional ===
  getEspecialidades(profesionalId: number): string[] {
    const especialidades = this.disponibilidad
      .filter(h => h.profesionalId === profesionalId)
      .map(h => h.especialidad);
    return [...new Set(especialidades)];
  }
}
