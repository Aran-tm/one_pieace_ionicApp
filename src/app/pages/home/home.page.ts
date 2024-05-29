import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { OnePieceService } from '../../services/one-piece.service';
import { IAnimes } from 'src/app/models/animes.model';

// modelo o interface ISeason

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // variables para almacenar información en mi aplicación
  temporadas: IAnimes[] = [];
  selectedSeason = '';

  // variable inyectada para el cambio de idioma
  languageSVC = inject(LanguageService);
  onePieceSVC = inject(OnePieceService);
  selectedLanguage = '';

  constructor() { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('language') as string;

    // obtengo todos los capitulos de la serie One Piece
    // esto es posible gracias al servicio que importo
    this.getSeasons();
  }

  // Cambiar el idioma
  setLanguage() {
    this.languageSVC.setLanguage(this.selectedLanguage);
  }

  // obtener las temporadas
  getSeasons() {
    this.onePieceSVC.getSeasons()
      .subscribe({

        // manejar la respuesta exitosa (success)
        next: (res: any) => {

          // guardo las temporadas obtenidas en un array
          this.temporadas = res;
          console.log(this.temporadas);

          this.selectedSeason = this.temporadas[0].title + ` (${this.temporadas[0].saga_episode.replace('à', '-')})`;
        }
          //error: err => console.error('Error:', err), // Manejador de errores
          //complete: () => console.log('Observable completo') // Manejador de finalización
      })
  }
}
