import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacionService } from '../navigation.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  tarea: any = {};

  constructor(private router: Router, private navegacionService: NavegacionService) {}

  ngOnInit() {}

  agregarTarea() {
    // Aquí puedes hacer lo que quieras con la tarea, como enviarla a un servicio, etc.
    console.log(this.tarea);
    // Por ahora, lo agregaremos al arreglo de tareas
    this.navegacionService.agregarTarea(this.tarea);
    // Luego de agregar la tarea, puedes redirigir al usuario a la lista de tareas
    this.router.navigate(['/home']);

    this.tarea.id = this.navegacionService.obtenerTareas().length;
  }

  
}
