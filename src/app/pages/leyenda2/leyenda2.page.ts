import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leyenda2',
  templateUrl: './leyenda2.page.html',
  styleUrls: ['./leyenda2.page.scss'],
})
export class Leyenda2Page implements OnInit {
  tarjetas: any = [
    
    {
      titulo: "CASCADA DE PEGUCHE",
      subtitulo:"Caso",
      historia:
        "Rosa Lema cuenta que un día que estuvo lavando ropa en una acequia de Peguche, en un momento desapareció la ropa como por encanto.  Buscándola fue a encontrarla al pie de una pequefia paccha que forma la acequia poco más abajo.<br> Sintió miedo y empezó a gritar pidiendo auxilio. Llegaron algunos indios en su ayuda y hasta ellos, a pesar de que eran hombres fuertes y valientes, tuvieron dificultad de recuperar la ropa de que se había apoderado el cuichi.",
        imagen: "../../../assets/img/caso3.jpg",
        imagen2: "../../../assets/img/caso4.jpg",
      pagina: "/leyenda2"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
