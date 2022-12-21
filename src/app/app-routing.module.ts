import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { BarberShopComponent } from './projetosConcluidos/barber-shop/barber-shop.component';
import { BolosJuliaComponent } from './projetosConcluidos/bolos-julia/bolos-julia.component';
import { DivinaFashionComponent } from './projetosConcluidos/divina-fashion/divina-fashion.component';
import { JogoAdvinhaComponent } from './projetosConcluidos/jogo-advinha/jogo-advinha.component';
import { LocCarComponent } from './projetosConcluidos/loc-car/loc-car.component';
import { LocadoraComponent } from './projetosConcluidos/locadora/locadora.component';
import { SyncTurComponent } from './projetosConcluidos/sync-tur/sync-tur.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'projetos', component:ProjetosComponent},
  {path: 'divina-fashion', component:DivinaFashionComponent},
  {path: 'jogo-advinha', component:JogoAdvinhaComponent},
  {path: 'locadora', component:LocadoraComponent},
  {path: 'loc-car', component:LocCarComponent},
  {path: 'sync-tur', component:SyncTurComponent},
  {path: 'bolos-julia', component:BolosJuliaComponent},
  {path: 'apresentacao', component:ApresentacaoComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'barber-shop', component: BarberShopComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
