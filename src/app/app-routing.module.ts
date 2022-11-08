import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'projetos', component:ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
