import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logueado = false;
  private usuarioLogueado: string | null = null;

  login(nombre: string = 'Admin') {
    this.logueado = true;
    this.usuarioLogueado = nombre;
  }

  logout() {
    this.logueado = false;
    this.usuarioLogueado = null;
  }

  isLoggedIn(): boolean {
    return this.logueado;
  }

  getUsuario(): string | null {
    return this.usuarioLogueado;
  }
}
