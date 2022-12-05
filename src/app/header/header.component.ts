import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/localStorage-service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  adm:boolean=true;
  listNav = false;
  constructor(
    public router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    //variavel para ver se o usuario é adm ou não
    this.localStorage.GetAdmin().subscribe(Dadoadm=>{
      this.adm=Dadoadm
    })

    this.listNav = false;
    
  }

  Sair(){
    this.localStorage.Clear()
    this.router.navigate(['../login']);
  }

  fecharNav(){
    this.listNav = false;
  }


  



}
