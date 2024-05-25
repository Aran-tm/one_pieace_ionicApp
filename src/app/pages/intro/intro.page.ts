import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  // inyecto el modulo de Router
  router = inject(Router);

  ngOnInit() {
    console.log(`Hey`);
  }

  ionViewWillEnter(){
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 2800);
  }

}
