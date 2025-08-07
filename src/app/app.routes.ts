import { Routes } from '@angular/router';

// ==============================
// Public (Cliente)
// ==============================
import { ProfessionalSelectComponent } from '@features/public/professional-select/professional-select.component';
import { CalendarViewComponent } from '@features/public/calendar-view/calendar-view.component';
import { BookingFormComponent } from '@features/public/booking-form/booking-form.component';
import { BookingConfirmationComponent } from '@features/public/booking-confirmation/booking-confirmation.component';
import { LoginRegisterComponent } from '@features/public/login-register/login-register.component';

// ==============================
// Admin
// ==============================
import { AdminLoginComponent } from '@features/admin/admin-login/admin-login.component';
import { DashboardComponent } from '@features/admin/dashboard/dashboard.component';
import { AppointmentsListComponent } from '@features/admin/appointments-list/appointments-list.component';
import { AppointmentDetailComponent } from '@features/admin/appointment-detail/appointment-detail.component';
import { ClientsListComponent } from '@features/admin/clients-list/clients-list.component';
import { ClientDetailComponent } from '@features/admin/client-detail/client-detail.component';
import { ScheduleConfigComponent } from '@features/admin/schedule-config/schedule-config.component';
import { AdminLayoutComponent } from '@features/admin/layout/admin-layout/admin-layout.component';

// ==============================
// Professionals (Gestión de peluqueros/fisios)
// ==============================
import { ProfessionalsListComponent } from '@features/professionals/professionals-list/professionals-list.component';
import { ProfessionalScheduleComponent } from '@features/professionals/professional-schedule/professional-schedule.component';
import { AdminGuard } from './core/guards/admin/admin.guard';

export const routes: Routes = [
  // ============================
  // Public (Cliente)
  // ============================
  { path: '', component: ProfessionalSelectComponent },
  { path: 'calendar', component: CalendarViewComponent },
  { path: 'booking', component: BookingFormComponent },
  { path: 'booking/success', component: BookingConfirmationComponent },
  { path: 'login', component: LoginRegisterComponent },

  // ============================
  // Admin con layout
  // ============================
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'citas', component: AppointmentsListComponent },
      { path: 'citas/:id', component: AppointmentDetailComponent },
      { path: 'clientes', component: ClientsListComponent },
      { path: 'clientes/:id', component: ClientDetailComponent },
      { path: 'horarios', component: ScheduleConfigComponent },
      { path: 'profesionales', component: ProfessionalsListComponent },
      { path: 'profesionales/:id/horario', component: ProfessionalScheduleComponent }
    ]
  },

  // ============================
  // Login Admin fuera de layout
  // ============================
  { path: 'admin/login', component: AdminLoginComponent },

  // ============================
  // Wildcard
  // ============================
  { path: '**', redirectTo: '' }
];
