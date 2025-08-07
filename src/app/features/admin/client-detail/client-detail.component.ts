import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService, Cliente } from '@core/services/client/client.service';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent {
  cliente?: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cliente = this.clientService.getById(id);
  }

  volver() {
    this.router.navigate(['/admin/clientes']);
  }
}
