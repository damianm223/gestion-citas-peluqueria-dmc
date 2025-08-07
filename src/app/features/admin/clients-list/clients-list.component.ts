import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients-list.component.html',
})
export class ClientsListComponent {
  clientes: Cliente[] = [
    { id: 1, nombre: 'Ana Gómez', email: 'ana@example.com', telefono: '612345678' },
    { id: 2, nombre: 'Luis Martín', email: 'luis@example.com', telefono: '699112233' },
    { id: 3, nombre: 'Pedro Ruiz', email: 'pedro@example.com', telefono: '611998877' }
  ];

  filtroNombre: string = '';
  filtroEmail: string = '';
  filtroTelefono: string = '';

  constructor(private router: Router) {}

  get clientesFiltrados(): Cliente[] {
    return this.clientes.filter(c =>
      c.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) &&
      c.email.toLowerCase().includes(this.filtroEmail.toLowerCase()) &&
      c.telefono.includes(this.filtroTelefono)
    );
  }

  verDetalle(id: number) {
    this.router.navigate(['/admin/clientes', id]);
  }
}
