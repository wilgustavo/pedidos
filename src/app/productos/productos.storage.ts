import { Producto } from "functions/src/models/producto.model";

export class ProductosStorage {

  private productos: Producto[];

  constructor() {
    this.setEjemplos();
  }

  getProductos() {
    return this.productos;
  };

  borrarProducto(id: string) {
    this.productos = this.productos.filter( p => p.id != id );
  }

  private setEjemplos() {
    this.productos = [];
    this.productos.push(new Producto({
      id: 'aaaa111', 
      estado: 'activo',
      imagen: 'imagen1.png',
      nombre: 'Jamón y queso',
      precio: 25.00
    }));
    this.productos.push(new Producto({
      id: 'aabb100', 
      estado: 'activo',
      imagen: 'imagen2.png',
      nombre: 'Pollo con salsa blanca',
      precio: 25.00
    }));
    this.productos.push(new Producto({
      id: 'bbcc220', 
      estado: 'activo',
      imagen: 'imagen3.png',
      nombre: 'Humita',
      precio: 27.00
    }));
    this.productos.push(new Producto({
      id: 'ccdd440', 
      estado: 'activo',
      imagen: 'imagen3.png',
      nombre: 'Carne',
      precio: 27.00
    }));
  }
   
}