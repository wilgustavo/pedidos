import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductoDialogComponent } from '../producto-dialog/producto-dialog.component';
import { Producto } from 'functions/src/models/producto.model';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos;

  constructor(
    private productoService: ProductosService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos);
  }

  editarProducto(producto: Producto): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { producto };
    const dialogRef = this.dialog.open(ProductoDialogComponent , dialogConfig);
    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.getProductos();
      }
    });
  }

  crearProducto() {
    const producto = new Producto();
    this.editarProducto(producto);
  }

}
