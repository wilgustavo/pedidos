import { Component, OnInit } from '@angular/core';
import { ProductosStorage } from '../productos.storage';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos: any[];
  seleccionados: number;

  constructor(
    private productoStorage: ProductosStorage) { }

  ngOnInit() {
    this.getProductos();
    this.seleccionados = 0;
  }

  getProductos(): void {
    this.productos = this.productoStorage.getProductos();
  }

  check() {
    this.seleccionados = this.productos.filter(item => item.checked).length;
  }

}
