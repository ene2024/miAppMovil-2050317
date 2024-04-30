import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  tareas: any[] = []; // Arreglo para almacenar las tareas

  constructor(private router: Router) { }

  navegarAFormulario() {
    this.router.navigateByUrl('/formulario');
  }

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  eliminarTarea(tarea: any) {
    const index = this.tareas.indexOf(tarea);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }
}
