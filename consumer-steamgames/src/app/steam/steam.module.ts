import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SteamRoutingModule } from './steam-routing.module';
import { SteamService } from './services/steam.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SteamRoutingModule,
    HttpClientModule
  ],
  providers: [SteamService]
})
export class SteamModule { }
