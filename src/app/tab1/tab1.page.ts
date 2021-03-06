import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tarjetas:any =[
    {
      "titulo":"Folcklore Social",
      "subtitulo":"Costumbres y Tradiciones",
      "imagen":"https://picsum.photos/id/1005/100/50/?blur=1",
      "pagina":"/social",
  
    },
    {
      "titulo":"Folcklore Ergológico",
      "subtitulo":"Aspectos Materiales",
      "imagen":"https://picsum.photos/id/1011/100/50/?blur=1",
      "pagina":"/ergologico",
  
    },
    {
      "titulo":"Folcklore Narrativo",
      "subtitulo":"Mitos, Leyendas, y Cuentos",
      "imagen":"https://picsum.photos/id/1024/100/50/?blur=1",
      "pagina":"/narrativo",
  
    },
    {
      "titulo":"Folcklore Poético",
      "subtitulo":"Vocablos Hecho Arte",
      "imagen":"https://picsum.photos/id/1025/100/50/?blur=1",
      "pagina":"/poetico",
  
    },
    {
      "titulo":"Folcklore Mágico",
      "subtitulo":"Fe, Magia y Superstición",
      "imagen":"https://picsum.photos/id/1045/100/50/?blur=2",
      "pagina":"/magico",
  
    }


    // {
    //   "titulo":"Folcklore Social",
    //   "subtitulo":"Costumbres y Tradiciones",
    //   "imagen":"../../../assets/img/a.jpg",
    //   "pagina":"/social",
  
    // },
    // {
    //   "titulo":"Folcklore Ergológico",
    //   "subtitulo":"Aspectos Materiales",
    //   "imagen":"../../../assets/img/b.jpg",
    //   "pagina":"/ergologico",
  
    // },
    // {
    //   "titulo":"Folcklore Narrativo",
    //   "subtitulo":"Mitos, Leyendas, y Cuentos",
    //   "imagen":"../../../assets/img/c.jpg",
    //   "pagina":"/narrativo",
  
    // },
    // {
    //   "titulo":"Folcklore Poético",
    //   "subtitulo":"Vocablos Hecho Arte",
    //   "imagen":"../../../assets/img/d.jpg",
    //   "pagina":"/poetico",
  
    // },
    // {
    //   "titulo":"Folcklore Mágico",
    //   "subtitulo":"Fe, Magia y Superstición",
    //   "imagen":"../../../assets/img/3.png",
    //   "pagina":"/magico",
  
    // }
  ]
  constructor() {}

}
