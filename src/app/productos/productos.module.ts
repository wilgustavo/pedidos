import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosService } from './productos.service';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ProductoListaComponent, ProductoFormComponent],
  providers: [ProductosService],
  exports: [ProductoListaComponent, ProductoFormComponent]
})
export class ProductosModule { }
