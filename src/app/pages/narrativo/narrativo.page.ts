import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-narrativo",
  templateUrl: "./narrativo.page.html",
  styleUrls: ["./narrativo.page.scss"]
})
export class NarrativoPage implements OnInit {
  tarjetas: any = [
    {
      titulo: "PUCHO REMACHES",
      historia:
        "Pucho Remaches fue el nombre de una familia posadera; dueña del tambo de Mojanda, situado en la mitad del antiguo camino entre Quito y Otavalo. Los Remaches solían asesinar a las personas que pedían posada y se alojaban en el Tambo. Sobre todo a las que llegaban solas, decían no tener familia o a nadie que los esperase en el lugar de su destino.Una vez que mataban a los huéspedes, los perver­sos se quedaban con sus pertenencias, y con sus cuerpos preparaban fritada, famosa por su exquisito sabor. Sin sospechar nada acerca de su origen, este apetecido plato era degustado por los viajeros que recorrían dicho camino; las familias que con ese único propósito subían a Mojanda; o los habitantes de Otavalo cuando los Remaches llevaban la fritada a dicha ciudad para venderla. Su crueldad la descubrió casualmente un hombre solitario que, en una noche, al no poder conciliar el sueño, escuchó a los esposos Remaches su intención de asesinarlo y de elaborar fritada con su cuerpo. Ante esta situación el aterrado huésped se ocultó debajo de la cama mientras uno de los Remaches afila­ba el hacha para decapitarlo. Debajo del catre encontró un cadáver al que subió a la cama colocándolo en su reemplazo. Gracias a la oscuridad, los Remaches no pudieron darse cuenta del engaño, descargando el hacha sobre el que ya estaba muerto. Este ardid permitió al viajero escapar a la ciudad de Otavalo, en donde dio aviso de lo que había vivido. Con dicha información, días más tarde, las autoridades capturaron a los Remaches y los fusilaron en la plaza central de Otavalo, ante la presencia del pueblo, los in­dígenas de los alrededores y de sus dos tiernos hijos",
      imagen: "https://picsum.photos/id/1005/100/50/?blur=1",
      pagina: "/leyenda1"
    },
    {
      titulo: "MAMA PUMA",
      historia:
        "Pucho Remaches fue el nombre de una familia posadera; dueña del tambo de Mojanda, situado en la mitad del antiguo camino entre Quito y Otavalo. Los Remaches solían asesinar a las personas que pedían posada y se alojaban en el Tambo. Sobre todo a las que llegaban solas, decían no tener familia o a nadie que los esperase en el lugar de su destino.Una vez que mataban a los huéspedes, los perver­sos se quedaban con sus pertenencias, y con sus cuerpos preparaban fritada, famosa por su exquisito sabor. Sin sospechar nada acerca de su origen, este apetecido plato era degustado por los viajeros que recorrían dicho camino; las familias que con ese único propósito subían a Mojanda; o los habitantes de Otavalo cuando los Remaches llevaban la fritada a dicha ciudad para venderla. Su crueldad la descubrió casualmente un hombre solitario que, en una noche, al no poder conciliar el sueño, escuchó a los esposos Remaches su intención de asesinarlo y de elaborar fritada con su cuerpo. Ante esta situación el aterrado huésped se ocultó debajo de la cama mientras uno de los Remaches afila­ba el hacha para decapitarlo. Debajo del catre encontró un cadáver al que subió a la cama colocándolo en su reemplazo. Gracias a la oscuridad, los Remaches no pudieron darse cuenta del engaño, descargando el hacha sobre el que ya estaba muerto. Este ardid permitió al viajero escapar a la ciudad de Otavalo, en donde dio aviso de lo que había vivido. Con dicha información, días más tarde, las autoridades capturaron a los Remaches y los fusilaron en la plaza central de Otavalo, ante la presencia del pueblo, los in­dígenas de los alrededores y de sus dos tiernos hijos",
      imagen: "https://picsum.photos/id/1011/100/50/?blur=1",
      pagina: "/leyenda2"
    },
    {
      titulo: "PRINCESA DEL LAGO",
      historia:
        "Pucho Remaches fue el nombre de una familia posadera; dueña del tambo de Mojanda, situado en la mitad del antiguo camino entre Quito y Otavalo. Los Remaches solían asesinar a las personas que pedían posada y se alojaban en el Tambo. Sobre todo a las que llegaban solas, decían no tener familia o a nadie que los esperase en el lugar de su destino.Una vez que mataban a los huéspedes, los perver­sos se quedaban con sus pertenencias, y con sus cuerpos preparaban fritada, famosa por su exquisito sabor. Sin sospechar nada acerca de su origen, este apetecido plato era degustado por los viajeros que recorrían dicho camino; las familias que con ese único propósito subían a Mojanda; o los habitantes de Otavalo cuando los Remaches llevaban la fritada a dicha ciudad para venderla. Su crueldad la descubrió casualmente un hombre solitario que, en una noche, al no poder conciliar el sueño, escuchó a los esposos Remaches su intención de asesinarlo y de elaborar fritada con su cuerpo. Ante esta situación el aterrado huésped se ocultó debajo de la cama mientras uno de los Remaches afila­ba el hacha para decapitarlo. Debajo del catre encontró un cadáver al que subió a la cama colocándolo en su reemplazo. Gracias a la oscuridad, los Remaches no pudieron darse cuenta del engaño, descargando el hacha sobre el que ya estaba muerto. Este ardid permitió al viajero escapar a la ciudad de Otavalo, en donde dio aviso de lo que había vivido. Con dicha información, días más tarde, las autoridades capturaron a los Remaches y los fusilaron en la plaza central de Otavalo, ante la presencia del pueblo, los in­dígenas de los alrededores y de sus dos tiernos hijos",
      imagen: "https://picsum.photos/id/1025/100/50/?blur=1",
      pagina: "/leyenda3"
    },
    {
      titulo: "LA CHIFICHA",
      historia:
        "Pucho Remaches fue el nombre de una familia posadera; dueña del tambo de Mojanda, situado en la mitad del antiguo camino entre Quito y Otavalo. Los Remaches solían asesinar a las personas que pedían posada y se alojaban en el Tambo. Sobre todo a las que llegaban solas, decían no tener familia o a nadie que los esperase en el lugar de su destino.Una vez que mataban a los huéspedes, los perver­sos se quedaban con sus pertenencias, y con sus cuerpos preparaban fritada, famosa por su exquisito sabor. Sin sospechar nada acerca de su origen, este apetecido plato era degustado por los viajeros que recorrían dicho camino; las familias que con ese único propósito subían a Mojanda; o los habitantes de Otavalo cuando los Remaches llevaban la fritada a dicha ciudad para venderla. Su crueldad la descubrió casualmente un hombre solitario que, en una noche, al no poder conciliar el sueño, escuchó a los esposos Remaches su intención de asesinarlo y de elaborar fritada con su cuerpo. Ante esta situación el aterrado huésped se ocultó debajo de la cama mientras uno de los Remaches afila­ba el hacha para decapitarlo. Debajo del catre encontró un cadáver al que subió a la cama colocándolo en su reemplazo. Gracias a la oscuridad, los Remaches no pudieron darse cuenta del engaño, descargando el hacha sobre el que ya estaba muerto. Este ardid permitió al viajero escapar a la ciudad de Otavalo, en donde dio aviso de lo que había vivido. Con dicha información, días más tarde, las autoridades capturaron a los Remaches y los fusilaron en la plaza central de Otavalo, ante la presencia del pueblo, los in­dígenas de los alrededores y de sus dos tiernos hijos",
      imagen: "https://picsum.photos/100/50/?blur=1",
      pagina: "/leyenda4"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
