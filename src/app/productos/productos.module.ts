import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.service';
import { ProductoListaComponent } from '../producto-lista/producto-lista.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ProductoListaComponent],
  providers: [ProductosService],
  exports: [ProductoListaComponent]
})
export class ProductosModule { }
