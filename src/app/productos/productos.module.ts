import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { ProductosService } from './productos.service';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoDialogComponent } from './producto-dialog/producto-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule
  ],
  declarations: [ProductoListaComponent,
                 ProductoFormComponent,
                 ProductoDialogComponent],
  providers: [ProductosService],
  exports: [ProductoListaComponent, ProductoFormComponent]
})
export class ProductosModule { }
