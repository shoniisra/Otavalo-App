import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

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
  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController,private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
  }
  onClick(){
    // this.videoPlayer.play("src/assets/vid1.mp4");
    // /home/shoniisra/Documentos/turismoApp/src/assets/vid1.mp4
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.videoPlayer.play('file:///android_asset/www/assets/vid1.mp4').then(() => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }).catch(err => {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

}
