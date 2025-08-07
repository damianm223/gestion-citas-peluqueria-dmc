import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '@core/services/booking/booking.service';
import { HorarioDisponible } from '@app/core/models/horario.model';

@Component({
  selector: 'app-schedule-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule-config.component.html'
})
export class ScheduleConfigComponent {
  dias: string[] = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  profesionalId = 1; // Puedes cambiar esto según el profesional que esté autenticado
  nuevaHora = '';
  nuevoDia = 'lunes';
  nuevaEspecialidad = '';

  constructor(public bookingService: BookingService) {}

  horarios(): HorarioDisponible[] {
    return this.bookingService.getHorariosPorProfesional(this.profesionalId);
  }

  agregarHora() {
    if (this.nuevaHora && this.nuevaEspecialidad) {
      this.bookingService.addHora(this.profesionalId, this.nuevoDia, this.nuevaEspecialidad, this.nuevaHora);
      this.nuevaHora = '';
    }
  }

  eliminarHora(dia: string, especialidad: string, hora: string) {
    this.bookingService.removeHora(this.profesionalId, dia, especialidad, hora);
  }
}
