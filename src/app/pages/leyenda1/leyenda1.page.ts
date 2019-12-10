import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leyenda1',
  templateUrl: './leyenda1.page.html',
  styleUrls: ['./leyenda1.page.scss'],
})
export class Leyenda1Page implements OnInit {

  constructor() { }

  tarjetas: any = [
    {
      titulo: "TAITA IMBABURA",
      subtitulo:"Caso",
      historia:
        "Los pocos que han visto a Taita Manuel Imbabura afirman  que  es  un  anciano  majestuoso, de piel clara  con  barba  larga  y  cabellos  largos. Viste túnica,   gorro  azul  y,  a  veces,  luce  sombrero blanco y botas negras. Aparece y desaparece sin previo aviso,  apoyado  siempre  en  una  rama de tocte  que  tiene  grabados  signos  cabalísticos y con  la que opera prodigios",
      imagen: "../../../assets/img/caso1.jpg",
      imagen2: "../../../assets/img/caso2.jpg",
      pagina: "/leyenda1"
    }
  ];

  ngOnInit() {
  }

}
