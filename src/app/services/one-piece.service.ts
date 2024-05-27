import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  // inyecto el http client
  http = inject(HttpClient);

  constructor() { }

  // obtengo las temporadas o SAGAS
  getSeasons() {

    return this.http.get('https://api.api-onepiece.com/v2/sagas/en');
  }
}
