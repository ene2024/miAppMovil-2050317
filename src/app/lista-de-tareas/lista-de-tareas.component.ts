import { Component, OnInit } from '@angular/core';
import { NavegacionService } from '../navigation.service';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.scss'],
})
export class ListaDeTareasComponent  implements OnInit {

  constructor(private navegacionService: NavegacionService) { }

    abrirFormulario(){
      this.navegacionService.navegarAFormulario();
    }

  ngOnInit() {}

}
