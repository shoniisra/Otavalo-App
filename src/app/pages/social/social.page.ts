import { Component, OnInit } from "@angular/core";
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-social",
  templateUrl: "./social.page.html",
  styleUrls: ["./social.page.scss"]
})
export class SocialPage implements OnInit {
  r1: boolean = false;
  r2: boolean = false;
  r3: boolean = false;
  r4: boolean = false;
  r5: boolean = true;
  aux = 1;
 
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };
  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {}

  ngOnInit() {}
  segmentChanged(ev: any) {
    this.aux = parseInt(ev.detail.value);
    this.r1 = false;
    this.r2 = false;
    this.r3 = false;
    this.r4 = false;
    this.r5 = false;
    if (this.aux == 1) {
      this.r1 = true;
    } else if (this.aux == 2) {
      this.r2 = true;
    } else if (this.aux == 3) {
      this.r3 = true;
    } else if (this.aux == 4) {
      this.r4 = true;
    } else {
      this.r5 = true;
    }
  }
  onClick(){
    // this.videoPlayer.play("src/assets/vid1.mp4");
    // /home/shoniisra/Documentos/turismoApp/src/assets/vid1.mp4
    this.videoPlayer.play('file:///android_asset/www/assets/vid2.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
  }
}
