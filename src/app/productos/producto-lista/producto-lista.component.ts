import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos;

  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos);
  }

}
