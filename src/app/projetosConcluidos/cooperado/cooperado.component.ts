import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperado',
  templateUrl: './cooperado.component.html',
  styleUrls: ['./cooperado.component.scss']
})
export class CooperadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  irAoTopo(){
    window.scrollTo(0,0);
  }


}
