import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magico',
  templateUrl: './magico.page.html',
  styleUrls: ['./magico.page.scss'],
})
export class MagicoPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };
  constructor() { }

  ngOnInit() {
  }

}
