import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  // inyecto el http client
  http = inject(HttpClient);

  constructor() { }

  // obtengo los Animes
  getSeasons() {

    // esta es la base URL de donde obtengo los datos
    return this.http.get(environment.animes + environment.sagas);
  }
}
