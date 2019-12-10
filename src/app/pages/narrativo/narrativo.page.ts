import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-narrativo",
  templateUrl: "./narrativo.page.html",
  styleUrls: ["./narrativo.page.scss"]
})
export class NarrativoPage implements OnInit {
  tarjetas: any = [
    {
      titulo: "TAITA IMBABURA",
      subtitulo:"Caso",
      historia:
        "Los pocos que han visto a Taita Manuel Imbabura afirman  que  es  un  anciano  majestuoso, de piel clara  con  barba  larga  y  cabellos  largos. Viste túnica,   gorro  azul  y,  a  veces,  luce  sombrero blanco y botas negras. Aparece y desaparece sin previo aviso,  apoyado  siempre  en  una  rama de tocte  que  tiene  grabados  signos  cabalísticos y con  la que opera prodigios",
      imagen: "../../../assets/img/caso1.jpg",
      imagen2: "../../../assets/img/caso2.jpg",
      pagina: "/leyenda1"
    },
    {
      titulo: "CASCADA DE PEGUCHE",
      subtitulo:"Caso",
      historia:
        "Rosa Lema cuenta que un día que estuvo lavando ropa en una acequia de Peguche, en un momento desapareció la ropa como por encanto.  Buscándola fue a encontrarla al pie de una pequefia paccha que forma la acequia poco más abajo.<br> Sintió miedo y empezó a gritar pidiendo auxilio. Llegaron algunos indios en su ayuda y hasta ellos, a pesar de que eran hombres fuertes y valientes, tuvieron dificultad de recuperar la ropa de que se había apoderado el cuichi.",
        imagen: "../../../assets/img/caso3.jpg",
        imagen2: "../../../assets/img/caso4.jpg",
      pagina: "/leyenda2"
    },
    {
      titulo: "NINA PACCHA",
      subtitulo:"Leyenda",
      historia:"Cuenta la leyenda que la sequía azotaba a toda la región y, por tanto, había que sacrificar una doncella para calmar las iras del «Taita» Imbabura. Una hermosa indígena llamada Nina Paccha fue la elegida, pero su joven enamorado, Guatalquí, no estaba dispuesto a perderla, por lo que huyeron juntos. El pueblo los siguió y cuando iban a ser alcanzados,el cielo se iluminó y Nina Paccha desapareció. Y mientras el pueblo no salía de su asombro, una fuerte lluvia empezó a caer sobre los campos",
      imagen: "../../../assets/img/ley1.png",
        imagen2: "",
      pagina: "/leyenda3"
    },
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
  constructor() {}

  ngOnInit() {}
}
