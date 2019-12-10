import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ergologico',
  templateUrl: './ergologico.page.html',
  styleUrls: ['./ergologico.page.scss'],
})
export class ErgologicoPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };
  constructor() { }

  ngOnInit() {
  }

}
