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

  // obtengo las temporadas o SAGAS
  getSeasons() {

    return this.http.get(environment.baseURL + environment.seasons);
  }
}
