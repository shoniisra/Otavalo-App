import { Component } from "@angular/core";

import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor(public alertController: AlertController) {}
  
async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: " El cantón Otavalo está ubicado en la provincia de Imbabura, en la    región norte del Ecuador. Tiene una superficie de 528 kilómetros      cuadrados. Se encuentra a 110 kilómetros (2 horas) al norte de Quito.      <br />      Límites: Los cantones Cotacachi, Antonio Ante e Ibarra limitan al      norte. La frontera sur tiene el cantón de Quito (Pichincha). Al este      se encuentran los cantones Ibarra y Cayambe (Pichincha) y al oeste los      cantones Quito y Cotacachi (Pichincha).      <br />      Población: 110.000 habitantes. El 44,3% de la población vive en el      sector urbano y el 55,7% restante en el sector rural.      <br />      Idioma oficial: Español y kichwa      <br />      Moneda: dólar estadounidense      <br />      Religión: Existe libertad de religión, pero predomina el catolicismo.      <br />      Altitud y clima: Existen diferentes altitudes, desde los 1.100      m.s.n.m. en la zona de la Selva Alegre hasta los 4.700 m.s.n.m. en el      cerro Imbabura. La temperatura media es de 14 grados centígrados.",      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }
}
