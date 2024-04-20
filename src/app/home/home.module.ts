import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ListaComponent } from './lista.component';
import { HomePageRoutingModule } from './home-routing.module';
import { ListaDeTareasComponent } from '../lista-de-tareas/lista-de-tareas.component';
import { FormularioComponent } from '../formulario/formulario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListaComponent, ListaDeTareasComponent, FormularioComponent], // Agrega ListaComponent aquí
  exports: [HomePage]
})
export class HomePageModule {}
