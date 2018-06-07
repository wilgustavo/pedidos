import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorMatcher } from '../../utiles/error-matcher';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {

  descripcion: string;
  productoForm: FormGroup;
  matcher = new ErrorMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private datos: any) {

      this.descripcion = datos.descripcion;
      this.crearFormulario();
      this.productoForm.setValue({
        nombre: datos.producto.nombre || '',
        imagen: datos.producto.imagen || '',
        precio: datos.producto.precio || 0 ,
        estado: datos.producto.estado || ''
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
    this.dialogRef.close('ok');
  }
}
