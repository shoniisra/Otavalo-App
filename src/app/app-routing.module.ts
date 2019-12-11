import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./pages/social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'ergologico',
    loadChildren: () => import('./pages/ergologico/ergologico.module').then( m => m.ErgologicoPageModule)
  },
  {
    path: 'narrativo',
    loadChildren: () => import('./pages/narrativo/narrativo.module').then( m => m.NarrativoPageModule)
  },
  {
    path: 'poetico',
    loadChildren: () => import('./pages/poetico/poetico.module').then( m => m.PoeticoPageModule)
  },
  {
    path: 'magico',
    loadChildren: () => import('./pages/magico/magico.module').then( m => m.MagicoPageModule)
  },
  {
    path: 'leyenda1',
    loadChildren: () => import('./pages/leyenda1/leyenda1.module').then( m => m.Leyenda1PageModule)
  },
  {
    path: 'leyenda2',
    loadChildren: () => import('./pages/leyenda2/leyenda2.module').then( m => m.Leyenda2PageModule)
  },
  {
    path: 'leyenda3',
    loadChildren: () => import('./pages/leyenda3/leyenda3.module').then( m => m.Leyenda3PageModule)
  },
  {
    path: 'leyenda4',
    loadChildren: () => import('./pages/leyenda4/leyenda4.module').then( m => m.Leyenda4PageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
