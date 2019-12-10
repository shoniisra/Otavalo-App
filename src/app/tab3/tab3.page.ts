import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  // <img class="imagen" src="../../../assets/img/ota1.jpg" />
  // <img class="imagen" src="../../../assets/img/ota2.jpg" />
  // <img class="imagen" src="../../../assets/img/ota3.jpg" />
  // <img class="imagen" src="../../../assets/img/ota5.jpg" />
  // <img class="imagen" src="../../../assets/img/ota4.jpg" />




  tarjetas: any = [
    {imagen: "../../../assets/img/caso1.jpg"  },
{imagen: "../../../assets/img/erg1.jpg"  },
{imagen: "../../../assets/img/ley3.jpg"    },
{imagen: "../../../assets/img/ota3.jpg"   },
{imagen: "../../../assets/img/soc1.jpg"  },
{imagen: "../../../assets/img/soc6.jpg"},
{imagen: "../../../assets/img/caso2.jpg"  },
{imagen: "../../../assets/img/erg2.jpg"  },
{imagen: "../../../assets/img/inti1.png"      },
{imagen: "../../../assets/img/magic1.jpg"  },
{imagen: "../../../assets/img/ota4.jpg"   },
{imagen: "../../../assets/img/soc2.jpg"  },
{imagen: "../../../assets/img/soc7.jpg"},
{imagen: "../../../assets/img/caso3.jpg"  },
{imagen: "../../../assets/img/erg3.jpg"  },
{imagen: "../../../assets/img/inti6.png"      },
{imagen: "../../../assets/img/magic2.jpg"  },
{imagen: "../../../assets/img/ota5.jpg"   },
{imagen: "../../../assets/img/soc3.png"  },
{imagen: "../../../assets/img/soc8.jpg"},
{imagen: "../../../assets/img/caso4.jpg"  },
{imagen: "../../../assets/img/huma.jpg"  },
{imagen: "../../../assets/img/ley1.png"       },
{imagen: "../../../assets/img/ota1.jpg"    },
{imagen: "../../../assets/img/soc10.jpg"  },
{imagen: "../../../assets/img/soc4.jpg"  },
{imagen: "../../../assets/img/soc9.jpg"},
{imagen: "../../../assets/img/huma.png"   },
{imagen: "../../../assets/img/ley2.jpg"       },
{imagen: "../../../assets/img/ota2.jpg"    },
{imagen: "../../../assets/img/soc11.jpg"  },
{imagen: "../../../assets/img/soc5.jpg"  },
{imagen: "../../../assets/img/yam1.png"}

    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora1.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora2.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora3.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora4.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora5.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora6.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE CORAZA Y PENDONEROS",
    //   imagen: "../../../assets/img/cora7.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti1.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti2.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti3.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti4.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti5.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti6.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE INTI RAYMI",
    //   imagen: "../../../assets/img/inti7.png",
    //   pagina: "/social"
    // },


    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar1.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar2.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar3.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar4.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar5.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE PAWKAR",
    //   imagen: "../../../assets/img/pawkar6.png",
    //   pagina: "/social"
    // },

    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam1.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam2.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam3.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam4.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam5.png",
    //   pagina: "/social"
    // },
    // {
    //   titulo: "FIESTAS DE YAMOR",
    //   imagen: "../../../assets/img/yam6.png",
    //   pagina: "/social"
    // },
  ];
  constructor() {}
}
