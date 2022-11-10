import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loc-car',
  templateUrl: './loc-car.component.html',
  styleUrls: ['./loc-car.component.scss']
})
export class LocCarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  irAoTopo(){
    window.scrollTo(0,0);
  }



  



}
