import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorMatcher } from '../../utiles/error-matcher';
import { Producto } from 'functions/src/models/producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {

  productoId: string;
  productoForm: FormGroup;
  matcher = new ErrorMatcher();

  constructor(
    private productoService: ProductosService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private datos: any) {

      this.crearFormulario();
      this.productoId = datos.producto.id || '';
      this.productoForm.setValue({
        nombre: datos.producto.nombre || '',
        imagen: datos.producto.imagen || '',
        precio: datos.producto.precio || 0 ,
        estado: datos.producto.estado || 'activo'
      });
    }

  ngOnInit() {
  }

  crearFormulario() {
    this.productoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: [0.0, Validators.required],
      estado: ['activo'],
      imagen: ''
    });
  }

  guardar() {
    if (this.productoId) {
      this.grabarProducto();
    } else {
      this.crearProducto();
    }
  }

  crearProducto() {
    this.productoService
      .crearProducto(this.productoForm.value)
      .subscribe(() => {
        this.dialogRef.close(this.productoForm.value);
      });
  }

  grabarProducto() {
    const producto = Producto.addId(this.productoForm.value, this.productoId);
    this.productoService
      .guardarProducto(producto)
      .subscribe(() => {
        this.dialogRef.close(producto);
      });
  }

  borrarProducto() {
    if (this.productoId) {
      this.productoService
        .borrarProducto(this.productoId)
        .subscribe(() => {
          this.dialogRef.close({id: this.productoId});
        });
    } else {
      this.cancelar();
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
