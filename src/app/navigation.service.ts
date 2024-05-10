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

  navegarADetalleTarea(id: number) {
    this.router.navigateByUrl(`/detalle-tarea/${id}`);
  }

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  obtenerTareas() {
    return this.tareas;
  }

  obtenerTareaPorIndex(index: number) {
    return this.tareas[index];
  }

  eliminarTarea(tarea: any) {
    const index = this.tareas.indexOf(tarea);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }
}
