import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-social",
  templateUrl: "./social.page.html",
  styleUrls: ["./social.page.scss"]
})
export class SocialPage implements OnInit {
  r1: boolean = true;
  r2: boolean = false;
  r3: boolean = false;
  r4: boolean = false;
  aux = 1;
 
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };
  constructor() {}

  ngOnInit() {}
  segmentChanged(ev: any) {
    this.aux = parseInt(ev.detail.value);
    this.r1 = false;
    this.r2 = false;
    this.r3 = false;
    this.r4 = false;
    if (this.aux == 1) {
      this.r1 = true;
    } else if (this.aux == 2) {
      this.r2 = true;
    } else if (this.aux == 3) {
      this.r3 = true;
    } else {
      this.r4 = true;
    }
  }
}
