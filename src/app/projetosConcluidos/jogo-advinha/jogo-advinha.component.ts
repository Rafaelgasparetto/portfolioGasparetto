import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-advinha',
  templateUrl: './jogo-advinha.component.html',
  styleUrls: ['./jogo-advinha.component.scss']
})
export class JogoAdvinhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irAoTopo(){
    window.scrollTo(0,0);
  }

}
