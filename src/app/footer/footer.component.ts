import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ingles:boolean=false;
  portugues:boolean=true;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // idiomaIngles(){
  //   this.ingles = true;
  //   this.portugues = false;
  //   console.log("Ingles: "+this.ingles);
  //   console.log("Portugues: "+this.portugues); 
  // }

  // idiomaPortugues(){
  //   this.portugues = true;
  //   this.ingles = false;
  //   console.log("Portugues: "+this.portugues);
  //   console.log("Ingles: "+this.ingles);
  // }

}
