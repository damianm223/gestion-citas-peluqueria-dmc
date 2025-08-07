import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cita {
  id: number;
  cliente: string;
  profesional: string;
  fecha: string;
  hora: string;
  estado: 'Pendiente' | 'En curso' | 'Completada';
}

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments-list.component.html'
})
export class AppointmentsListComponent {
  citas: Cita[] = [
    { id: 1, cliente: 'Ana Gómez', profesional: 'Juan Pérez', fecha: '01/09/2025', hora: '10:00', estado: 'Pendiente' },
    { id: 2, cliente: 'Luis Martín', profesional: 'María López', fecha: '01/09/2025', hora: '11:00', estado: 'En curso' },
    { id: 3, cliente: 'Pedro Ruiz', profesional: 'Carlos García', fecha: '02/09/2025', hora: '16:00', estado: 'Completada' }
  ];

  // Filtros
  filtroCliente: string = '';
  filtroProfesional: string = '';
  filtroFecha: string = '';
  filtroHora: string = '';
  filtroEstado: string = '';

  constructor(private router: Router) {}

  get profesionalesDisponibles() {
    return [...new Set(this.citas.map(c => c.profesional))];
  }

  get estadosDisponibles() {
    return [...new Set(this.citas.map(c => c.estado))];
  }

  get filteredCitas() {
    return this.citas.filter(c =>
      c.cliente.toLowerCase().includes(this.filtroCliente.toLowerCase()) &&
      (this.filtroProfesional === '' || c.profesional === this.filtroProfesional) &&
      c.fecha.includes(this.filtroFecha) &&
      c.hora.includes(this.filtroHora) &&
      (this.filtroEstado === '' || c.estado === this.filtroEstado)
    );
  }

  verDetalle(citaId: number) {
    this.router.navigate([`/admin/citas/${citaId}`]);
  }
}
