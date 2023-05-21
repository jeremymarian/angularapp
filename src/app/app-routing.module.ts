import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlAccess } from './control-access.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule),
    canActivate: [ControlAccess],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
