import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioInterface } from '../model/usuario.model';
import { LocalStorageService } from '../service/localStorage-service/local-storage.service';
import { UsuarioService } from '../service/usuario-service/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nome!: string;
  sexo!: string;
  usuarios: UsuarioInterface[] = [];
  firstFormGroup!: FormGroup 
  secondFormGroup!: FormGroup 

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private localStorage: LocalStorageService
    ) { }


  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({nome: new FormControl('')});
    this.secondFormGroup = this.formBuilder.group({sexo: new FormControl('')});

    this.usuarioService.lerUsuarios().subscribe({
      next: (usuarios: UsuarioInterface[]) => {
        this.usuarios = usuarios;
        console.log(usuarios);
      
      },
      error:() => {
        console.log("Erro ao ler usuarios");
      }
    })
  
  }


  salvarDadosUsuario(){

    const id = this.nextId();

    const nome = this.firstFormGroup.controls["nome"].value;
    const sexo = this.secondFormGroup.controls["sexo"].value;
    const adm = false;

    const usuario:UsuarioInterface = {id: id, nome: nome, sexo: sexo, adm: adm};

    if(sexo == 'homem' || sexo == 'mulher' || sexo == 'semSexoDefinido'){

      console.log(id);
      console.log(nome);
      console.log(sexo);

      this.nome = nome; // atribuição para a variavel global
      this.sexo = sexo; //atribuição para a variavel global

      this.localStorage.SalvarId(usuario.id) // puxar id do usuario logado

      this.localStorage.SalvarNome(usuario.nome) // puxar nome do usuario logado
  
      this.localStorage.SalvarSexo(usuario.sexo) // puxar sexo do usuario logado


      this.usuarioService.salvarUsuario(usuario).subscribe({
        next: () =>{
         console.log("Cadastrado Com sucesso");
         this.router.navigate(['/home']); //redirecionando para a pagina home
        },
        error: () => {
         console.log("erro ao cadastrar");
        } 
      })

    }




  }


  //----------------função para gerar o ID
  nextId(){

    let maiorId = 0;
    for (let i = 0; i < this.usuarios.length; i++) {
      this.usuarios[i].id
      if(this.usuarios.length > 0){
        maiorId = this.usuarios[i].id
      }

    }
    maiorId++;

    return maiorId;
  }

}
