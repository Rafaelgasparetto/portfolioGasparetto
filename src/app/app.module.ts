import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjetosComponent } from './projetos/projetos.component';
import { DivinaFashionComponent } from './projetosConcluidos/divina-fashion/divina-fashion.component';
import { JogoAdvinhaComponent } from './projetosConcluidos/jogo-advinha/jogo-advinha.component';
import { SyncTurComponent } from './projetosConcluidos/sync-tur/sync-tur.component';
import { LocadoraComponent } from './projetosConcluidos/locadora/locadora.component';
import { LocCarComponent } from './projetosConcluidos/loc-car/loc-car.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { BolosJuliaComponent } from './projetosConcluidos/bolos-julia/bolos-julia.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BarberShopComponent } from './projetosConcluidos/barber-shop/barber-shop.component';
import { VirtualStoreComponent } from './projetosConcluidos/virtual-store/virtual-store.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProjetosComponent,
    DivinaFashionComponent,
    JogoAdvinhaComponent,
    SyncTurComponent,
    LocadoraComponent,
    LocCarComponent,
    ApresentacaoComponent,
    CurriculoComponent,
    BolosJuliaComponent,
    BarberShopComponent,
    VirtualStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
