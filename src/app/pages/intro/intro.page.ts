import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  // se inyecta la dependencia Router
  router = inject(Router);

  constructor(
    // private router: Router  OTRA VIA para injectar el servicio
  ) { }

  // ciclo de vida de angular
  ionViewWillEnter(){

    // ejecuta codigo cuando el usuario entra a la pagina
    setTimeout(() => {
      this.router.navigateByUrl('/home')
    }, 2800)
  }

  ngOnInit() {
    console.log(`hey`);
  }

}
