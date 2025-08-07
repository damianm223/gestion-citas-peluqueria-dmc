import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '@core/services/appointment/appointment.service';
import { CommonModule } from '@angular/common';

interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
}

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html'
})
export class BookingConfirmationComponent implements OnInit {
  profesional: Profesional | null = null;
  diaSeleccionado: string | null = null;
  horaSeleccionada: string | null = null;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}
ngOnInit(): void {
  this.profesional = this.appointmentService.getProfesional();
  this.diaSeleccionado = this.appointmentService.getFecha();
  this.horaSeleccionada = this.appointmentService.getHora();
}


  volverInicio() {
    this.router.navigate(['/']);
  }

  nuevaCita() {
    this.router.navigate(['/calendar']);
  }
}
