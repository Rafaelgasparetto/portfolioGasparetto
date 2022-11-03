import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../model/usuario.model';
import { UsuarioService } from '../service/usuario-service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario!: UsuarioInterface[];
  
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    
  }


}
