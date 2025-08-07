import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
  usuario: string | null = null;
  menuAbierto = false;
  esEscritorio = window.innerWidth >= 768;

  constructor(private router: Router, private authService: AuthService) {
    this.usuario = this.authService.getUsuario();
  }

  navigate(path: string) {
    this.router.navigate([path]);
    if (!this.esEscritorio) this.menuAbierto = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  @HostListener('window:resize')
  onResize() {
    this.esEscritorio = window.innerWidth >= 768;
    if (this.esEscritorio) this.menuAbierto = false;
  }
}
