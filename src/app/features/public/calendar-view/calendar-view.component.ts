import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '@core/services/booking/booking.service';
import { AppointmentService } from '@core/services/appointment/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 añade FormsModule
  templateUrl: './calendar-view.component.html'
})
export class CalendarViewComponent {
  dias: string[] = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  diaSeleccionado: string = this.dias[0];
  horasDisponibles: string[] = [];

  constructor(
    private bookingService: BookingService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.cargarHoras();
  }

  get profesionalSeleccionado() {
    return this.appointmentService.getProfesional();
  }

  cargarHoras() {
    const profesional = this.profesionalSeleccionado;
    if (profesional) {
      this.horasDisponibles = this.bookingService.getHorasPorDia(profesional.id, this.diaSeleccionado);
    } else {
      this.horasDisponibles = [];
    }
  }

  seleccionarHora(hora: string) {
    this.appointmentService.setFecha(this.diaSeleccionado);
    this.appointmentService.setHora(hora);
    this.router.navigate(['/booking']);
  }
}
