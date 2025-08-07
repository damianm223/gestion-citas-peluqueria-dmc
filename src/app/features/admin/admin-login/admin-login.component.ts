import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    // Mock login (puedes cambiar esto por auth real después)
    if (this.username === 'admin' && this.password === '1234') {
      this.authService.login();
      this.router.navigate(['/admin/citas']);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
