import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leyenda4',
  templateUrl: './leyenda4.page.html',
  styleUrls: ['./leyenda4.page.scss'],
})
export class Leyenda4Page implements OnInit {
  tarjetas: any = [
   
    {
      titulo: "LA CHIFICHA",
      subtitulo:"Leyenda",
      historia:
        "Dicen que el Sol y la Luna tienen el pelo largo y que sus rayos se extienden con mucha fuerza por todo el Universo. Que esos rayos tienen la misma fuerza de las raíces de los árboles y las plantas. Entonces, si los kichwas perdieran la vitalidad de su pelo, el Sol y la Luna dejarían de brillar en sus corazones, la energía de los árboles, las plantas y la naturaleza no alimentaría sus espíritus y vivirían en la amargura y la soledad",
        imagen: "../../../assets/img/ley2.jpg",
        imagen2: "../../../assets/img/ley3.jpg",
      pagina: "/leyenda4"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
