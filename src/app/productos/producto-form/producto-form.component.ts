import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
