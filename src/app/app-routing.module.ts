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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
