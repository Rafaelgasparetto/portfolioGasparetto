import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/localStorage-service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
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

  }

  Sair(){
    this.localStorage.Clear()
    this.router.navigate(['../login']);
  }

  fecharNav(){
    this.listNav = closed;
  }


  



}
