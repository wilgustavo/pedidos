import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productoService: ProductosService) {
    this.crearFormulario();
   }

  ngOnInit() {
  }

  crearFormulario() {
    this.productoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: [0.0, Validators.required],
      estado: ['', Validators.required],
      imagen: ''
    });
  }

  guardarProducto() {
    this.productoService
      .crearProducto(this.productoForm.value)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
