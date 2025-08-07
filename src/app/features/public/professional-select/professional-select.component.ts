import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppointmentService } from '@core/services/appointment/appointment.service';

interface Profesional {
  id: number;
  nombre: string;
  especialidad: string;
}

@Component({
  selector: 'app-professional-select',
  standalone: true,
    imports: [CommonModule, RouterModule], // 👈 Añadir RouterModule
  templateUrl: './professional-select.component.html'
})
export class ProfessionalSelectComponent {
  profesionales: Profesional[] = [
    { id: 1, nombre: 'Juan Pérez', especialidad: 'Peluquero' },
    { id: 2, nombre: 'María López', especialidad: 'Peluquera' },
    { id: 3, nombre: 'Carlos García', especialidad: 'Barbero' }
  ];

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  seleccionarProfesional(prof: Profesional) {
    this.appointmentService.setProfesional(prof);
    this.router.navigate(['/calendar']);
  }

  seleccionarCualquiera() {
    const cualquiera: Profesional = {
      id: 0,
      nombre: 'Cualquiera disponible',
      especialidad: 'Peluquería'
    };
    this.appointmentService.setProfesional(cualquiera);
    this.router.navigate(['/calendar']);
  }
}
