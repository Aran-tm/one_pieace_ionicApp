import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // se importa a traves de una inyeccion el servicio de traduccion
  translate = inject(TranslateService);

  setInitialLanguage() {

    let language = this.translate.getBrowserLang() as string;
    let savedLng = localStorage.getItem('language');

    this.translate.setDefaultLang(language);

    if (savedLng) this.setLanguage(savedLng);
    else this.setLanguage(language);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
