import { Component, OnInit } from '@angular/core';
import { NavegacionService } from '../navigation.service';

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.scss'],
})
export class ListaDeTareasComponent  implements OnInit {
  tareas: any[] = []; // Arreglo para almacenar las tareas

  constructor(private navegacionService: NavegacionService) { }

  abrirFormulario(){
    this.navegacionService.navegarAFormulario();
  }

  ngOnInit() {
    // Obtener las tareas del servicio al iniciar el componente
    this.tareas = this.navegacionService.obtenerTareas();
  }
}
