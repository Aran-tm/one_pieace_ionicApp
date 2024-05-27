import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // variable inyectada para el cambio de idioma
  languageSVC = inject(LanguageService);
  selectedLanguage = '';

  constructor() { }

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('language') as string;
  }

  // Cambiar el idioma
  setLanguage() {
    this.languageSVC.setLanguage(this.selectedLanguage);
  }
}
