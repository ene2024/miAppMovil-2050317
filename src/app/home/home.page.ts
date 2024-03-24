import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  verdadero: boolean = true; // Definición de la propiedad verdadero
  title: string = 'Mi nueva pagina!';
  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif'
  constructor() { 
    console.log("AppComponent: Constructor");
  }
  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: OnChanges");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent: AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent: AfterContentViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent: OnDestroy");
  }
  hazmeClic(): void{
    alert("hiciste clic!");
  }
}


