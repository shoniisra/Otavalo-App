import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leyenda3',
  templateUrl: './leyenda3.page.html',
  styleUrls: ['./leyenda3.page.scss'],
})
export class Leyenda3Page implements OnInit {
  tarjetas: any = [
    
    {
      titulo: "MAMA PUMA",
      subtitulo:"Leyenda",
      historia:"Cuenta la leyenda que la sequía azotaba a toda la región y, por tanto, había que sacrificar una doncella para calmar las iras del «Taita» Imbabura. Una hermosa indígena llamada Nina Paccha fue la elegida, pero su joven enamorado, Guatalquí, no estaba dispuesto a perderla, por lo que huyeron juntos. El pueblo los siguió y cuando iban a ser alcanzados,el cielo se iluminó y Nina Paccha desapareció. Y mientras el pueblo no salía de su asombro, una fuerte lluvia empezó a caer sobre los campos",
      imagen: "../../../assets/img/ley1.png",
        imagen2: "",
      pagina: "/leyenda3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
