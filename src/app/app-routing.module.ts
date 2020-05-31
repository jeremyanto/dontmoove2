import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Commandes2PageComponent } from './commandes2-page/commandes2-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { Presentation1PageComponent } from './presentation1-page/presentation1-page.component';
import { Presentation2PageComponent } from './presentation2-page/presentation2-page.component';
import { Presentation3PageComponent } from './presentation3-page/presentation3-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { CommandesPageComponent } from './commandes-page/commandes-page.component';


const routes: Routes = [
  {path: 'commandes2', component: Commandes2PageComponent},
  {path: 'inscription', component: InscriptionPageComponent},
  {path: 'accueil', component: AccueilPageComponent},
  {path: 'presentation1', component: Presentation1PageComponent},
  {path: 'presentation2', component: Presentation2PageComponent},
  {path: 'presentation3', component: Presentation3PageComponent},
  {path: 'categories', component: CategoriesPageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'commandes', component: CommandesPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
