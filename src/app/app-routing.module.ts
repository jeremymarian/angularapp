import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ReactappComponent } from './pages/reactapp/reactapp.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () =>
      import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reactp', component: ReactappComponent },
  { path: 'proyects', component: ProyectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
