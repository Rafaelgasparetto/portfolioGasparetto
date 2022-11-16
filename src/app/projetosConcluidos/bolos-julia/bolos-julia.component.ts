import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolos-julia',
  templateUrl: './bolos-julia.component.html',
  styleUrls: ['./bolos-julia.component.scss']
})
export class BolosJuliaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irAoTopo(){
    window.scrollTo(0,0);
  }


}
