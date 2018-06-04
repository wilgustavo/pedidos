import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductoDialogComponent } from '../producto-dialog/producto-dialog.component';

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

  editarProducto(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      descripcion: 'Prueba'
    };
    const dialogRef = this.dialog.open(ProductoDialogComponent , dialogConfig);
    dialogRef.afterClosed().subscribe(val => console.log('Retorno', val));
  }

}
