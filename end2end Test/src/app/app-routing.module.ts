import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {StatsComponent} from './stats/stats.component';

const routes: Routes = [
  {path : 'dashboard', component : HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'timesheet', component: StatsComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
