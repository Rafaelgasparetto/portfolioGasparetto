import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsuarioInterface } from 'src/app/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private listaUsuario:any;
  private url='https://63640a8a7b209ece0f3f1b8c.mockapi.io/usuario'; //URL da mockAPI Novo
  // private url='http://localhost:3000/login'; antigo url

  constructor( private httpClient:HttpClient ) 
  { this.listaUsuario = []; }

  //---- fazendo o progress spiner
  private _loading = new BehaviorSubject<boolean>(false)
  public readonly loading = this._loading.asObservable();


  //----------------------Funçoes do Spinner----------------------

  showLoading(){
    this._loading.next(true);
  }
  hideLoading(){
    this._loading.next(false);
  }

  get usuario(){
    return this.listaUsuario;
  }

  set usuario(element:UsuarioInterface){
    this.listaUsuario.push(element)
  }

  lerUsuarios():Observable<UsuarioInterface[]>{
    return this.httpClient.get<UsuarioInterface[]>(this.url)
  }

  salvarUsuario(objeto:UsuarioInterface):Observable<UsuarioInterface>{
    return this.httpClient.post<UsuarioInterface>(this.url,objeto)
  }

  lerUsuarioById(id:number):Observable<UsuarioInterface>{
    return this.httpClient.get<UsuarioInterface>(`${this.url}/${id}`)
  }


}
