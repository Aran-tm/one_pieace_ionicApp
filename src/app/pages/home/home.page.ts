import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { OnePieceService } from '../../services/one-piece.service';

// modelo o interface ISeason
import { ISeason } from 'src/app/models/season.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // variables para almacenar información en mi aplicación
  temporadas: ISeason[] = [];

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
          console.log(res);

          // guardo las temporadas obtenidas en un array
          this.temporadas = res;
          console.log(this.temporadas);
        }
          //error: err => console.error('Error:', err), // Manejador de errores
          //complete: () => console.log('Observable completo') // Manejador de finalización
      })
  }
}
