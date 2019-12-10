import { Component } from "@angular/core";

import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  }; 
  constructor(public alertController: AlertController) {}
 

}
