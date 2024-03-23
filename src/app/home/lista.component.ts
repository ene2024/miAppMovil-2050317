import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.component.html',
  styleUrls: ['lista.component.scss']
})
export class ListaComponent implements OnInit {
  verdadero: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}

