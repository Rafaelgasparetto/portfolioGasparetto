import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UsuarioInterface } from '../model/usuario.model';
import { LocalStorageService } from '../service/localStorage-service/local-storage.service';
import { UsuarioService } from '../service/usuario-service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adm!:boolean;
  usuario!: UsuarioInterface[];
  nomeUsuario ='';
  sexoUsuario='';
  
  // ingles:boolean=false;
  // portugues:boolean=true;


  constructor(
    private usuarioService: UsuarioService,
    private localStorage: LocalStorageService

  ) { }

  ngOnInit(): void {
    //função para pegar o valor da variavel do admin
    this.localStorage.GetAdmin().subscribe(dado=>{
      this.adm=dado
    })
    if (this.adm==false){//caso o usuario não for admin, vai chamar a função
      this.puxarDadosService()
    }
  }


  puxarDadosService(){
    this.localStorage.GetId().subscribe(id=>{
      this.usuarioService.lerUsuarioById(id).subscribe({
        next:(usuario)=>{
          // console.log(usuario.nome)
          // console.log(usuario.sexo)
          this.nomeUsuario = usuario.nome;
          this.sexoUsuario = usuario.sexo;
          
        },
        error: () =>{

          console.log("falha");
          
          console.log(this.nomeUsuario);
          console.log(this.sexoUsuario);
        }
        
      })
    })


    
    

  }



}
