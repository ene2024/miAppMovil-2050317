import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  verdadero: boolean = true; // Definición de la propiedad verdadero
  title: string = 'Mi nueva pagina!';
  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif'
  constructor() {}
  hazmeClic(): void{
    alert("hiciste clic!");
  }
}


