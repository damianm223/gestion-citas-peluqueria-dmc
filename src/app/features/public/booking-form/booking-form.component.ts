import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '@core/services/appointment/appointment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
}

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent implements OnInit {
  profesional: Profesional | null = null;
  diaSeleccionado: string | null = null;
  horaSeleccionada: string | null = null;

  nombre: string = '';
  email: string = '';
  telefono: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

ngOnInit(): void {
  this.profesional = this.appointmentService.getProfesional();
  this.diaSeleccionado = this.appointmentService.getFecha();
  this.horaSeleccionada = this.appointmentService.getHora();
}


  reservarCita() {
    if (!this.nombre || !this.email || !this.telefono) {
      alert('Por favor, completa todos los campos');
      return;
    }

    console.log('Reserva confirmada:', {
      profesional: this.profesional,
      dia: this.diaSeleccionado,
      hora: this.horaSeleccionada,
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono
    });

    this.router.navigate(['/booking/success']);
  }
}
