import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteamConsultarComponent } from './steam-consultar/steam-consultar.component';

const routes: Routes = [
  {path: '', redirectTo: 'consultar', pathMatch: 'full'},
  {
    path: 'consultar',
    component: SteamConsultarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteamRoutingModule { }
