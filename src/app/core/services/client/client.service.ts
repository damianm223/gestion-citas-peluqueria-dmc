import { Injectable } from '@angular/core';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  historial: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Ana Gómez',
      email: 'ana@example.com',
      telefono: '612345678',
      historial: ['Corte de pelo - 10/07/2025', 'Peinado - 02/08/2025']
    },
    {
      id: 2,
      nombre: 'Luis Martín',
      email: 'luis@example.com',
      telefono: '699112233',
      historial: ['Tinte - 15/06/2025']
    }
  ];

  getAll(): Cliente[] {
    return this.clientes;
  }

  getById(id: number): Cliente | undefined {
    return this.clientes.find(c => c.id === id);
  }
}
