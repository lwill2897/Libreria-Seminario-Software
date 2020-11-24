import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'**', redirectTo:'inicio', pathMatch:'full'},
  {path:'iniciosesion', component: IniciosesionComponent},
  {path:'**', redirectTo:'iniciosesion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
