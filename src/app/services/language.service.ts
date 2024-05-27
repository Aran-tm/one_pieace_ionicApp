import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


// indica que LanguageService es un servicio
// que debe ser disponible globalmente en toda la aplicación
@Injectable({
  providedIn: 'root'    // disponible globalmente en toda la aplicacion
})
export class LanguageService {

  // servicio para la traduccion de paginas
  translate2 = inject(TranslateService);

  constructor(

    // alternativa a la injeccion del servicio de traduccion
    private translate: TranslateService
  ) { }

  // establecer un idioma inicial por defecto
  setInitialLanguage() {

    // obtengo el idioma del navegador en forma de cadena
    let language = this.translate.getBrowserLang() as string;

    // guardo en el local storage del navegador, el idioma del navegador
    let savlanguage = localStorage.getItem('language');

    // establezco por default el idioma
    this.translate.setDefaultLang(language);

    if (savlanguage)
      this.setLanguage(savlanguage);
    else
      this.setLanguage(language);
  }

  // permite cambiar el idioma de la aplicacion 
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
