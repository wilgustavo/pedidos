import { Component, OnInit } from '@angular/core';
import { ProductosStorage } from '../productos.storage';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos;
  haySeleccionado;

  constructor(
    private productoStorage: ProductosStorage) { }

  ngOnInit() {
    this.getProductos();
    this.haySeleccionado = false;
  }

  getProductos(): void {
    this.productos = this.productoStorage.getProductos();
  }

  check() {
    this.haySeleccionado = this.productos.some(item => item.checked);
  }

}
