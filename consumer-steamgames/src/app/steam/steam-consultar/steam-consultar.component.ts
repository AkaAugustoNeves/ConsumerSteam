import { Component, OnInit  } from '@angular/core';
import { SteamService } from '../services/steam.service';
import { CommonModule } from '@angular/common';
import { Jogo } from '../interfaces/jogo';

@Component({
  selector: 'app-steam-consultar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steam-consultar.component.html',
  styleUrl: './steam-consultar.component.css'
})
export class SteamConsultarComponent implements OnInit {
  MSG_ERRO: string = "Erro ao buscar Jogos!";
  jogos: Jogo[] = [];
  error: string | null = null;

  constructor(private steamService: SteamService){}

  ngOnInit(): void {
    this.steamService.getJogos().subscribe((response: Jogo[]) => {
        this.popularJogos(response)
      },(error: Jogo) => {
        this.renderError()
      }
    );
  }

  popularJogos(jogos: Jogo[]){
    this.jogos = jogos;
    this.error = null;
  }

  renderError(){
    this.jogos = [];
    this.error = this.MSG_ERRO;
  }

}
