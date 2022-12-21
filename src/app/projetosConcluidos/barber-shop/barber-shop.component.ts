import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barber-shop',
  templateUrl: './barber-shop.component.html',
  styleUrls: ['./barber-shop.component.scss']
})
export class BarberShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irAoTopo(){
    window.scrollTo(0,0);
  }

}
