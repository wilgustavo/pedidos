import { Producto } from "functions/src/models/producto.model";
import { ProductosService } from "./productos.service";
import { ListaProducto } from "functions/src/models/lista-producto.model";

import {tap} from 'rxjs/operators'
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductosStorage {

  private lista: ListaProducto = new ListaProducto();
  private cambios = new Subject<any>();

  constructor(private productoService: ProductosService) {}

  getProductos() {
    return this.lista.getLista();
  };

  borrarProducto(id: string) {
    return this.productoService
      .borrarProducto(id)
      .pipe(tap(() => {
        this.lista.borrar(id);
        this.cambios.next();
      }));
  }

  agregarProducto(producto: Producto) {
    return this.productoService
      .crearProducto(producto)
      .pipe(tap(() => {
        this.lista.agregar(producto);
        this.cambios.next();
      }));
  }

  guardarProducto(producto: Producto) {
    return this.productoService
      .guardarProducto(producto)
      .pipe(tap(() => {
        this.lista.guardar(producto);
        this.cambios.next();
      }));
  }

  actualizar() {
    this.productoService.getProductos().subscribe((lista) => {
      this.lista.set(lista as Producto[]);
      this.cambios.next(null);
    });
  }

  onChange() {
    return this.cambios;
  }
   
}