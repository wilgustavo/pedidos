import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosStorage } from '../productos.storage';
import { Producto } from 'functions/src/models/producto.model';
import { Subscription, forkJoin } from 'rxjs';
import { flatMap } from 'rxjs/operators';

class SeleccionProducto {
  constructor(
    public producto: Producto, 
    public seleccionado: boolean
  ) {}
}

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit, OnDestroy {

  productos: SeleccionProducto[];
  seleccionados: number;
  onChange: Subscription;
  actualizando: boolean;

  constructor(
    private productoStorage: ProductosStorage) { }

  ngOnInit() {
    this.actualizando = true;
    this.getProductos();
    this.seleccionados = 0;
    this.productoStorage.actualizar();
    this.onChange = this.productoStorage.onChange().subscribe(() => {
      this.getProductos();
      this.actualizando = false;
    });
  }

  ngOnDestroy(): void {
    this.onChange.unsubscribe();
  }

  actualizar() {
    this.actualizando = true;
    this.productoStorage.actualizar();
  }

  getProductos() {
    this.productos = this.productoStorage.getProductos().map(item => new SeleccionProducto(item, false));
    this.seleccionados = 0;
  }

  check() {
    this.seleccionados = this.getSeleccionados().length;
  }

  cancelarSeleccionados() {
    this.productos = this.productos.map(item => {
      item.seleccionado = false;
      return item;
    });
    this.seleccionados = 0;
  }

  getSeleccionados() {
    return this.productos.filter(item => item.seleccionado);
  }

  borrarSeleccionados() {
    this.actualizando = true;
    const ids = this.getSeleccionados().map(item => item.producto.id);
    ids.forEach(id => this.productoStorage.borrarProducto(id).subscribe());
  }

}
