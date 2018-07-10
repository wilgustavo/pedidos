import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorMatcher } from '../../utiles/error-matcher';
import { Producto } from 'functions/src/models/producto.model';
import { ProductosStorage } from '../productos.storage';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {
  titulo: string;
  productoId: string;
  productoForm: FormGroup;
  matcher = new ErrorMatcher();

  constructor(
    private productoStorage: ProductosStorage,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private datos: any
  ) {
    this.crearFormulario();
    this.productoId = datos.producto.id || '';
    this.titulo = datos.producto.id ? 'Editar producto' : 'Nuevo producto';
    this.productoForm.setValue(new Producto(datos.producto));
  }

  ngOnInit() {}

  crearFormulario() {
    this.productoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: [0.0, Validators.required],
      estado: ['activo'],
      imagen: '',
      id: ''
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
    this.productoStorage
      .agregarProducto(new Producto(this.productoForm.value))
      .subscribe(() => {
        this.productoForm.reset();
        this.productoForm.setValue(new Producto());
      });
  }

  grabarProducto() {
    this.productoStorage
      .guardarProducto(new Producto(this.productoForm.value))
      .subscribe(() => {
        this.dialogRef.close(this.productoForm.value);
      });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
