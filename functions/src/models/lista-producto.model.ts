import { Producto } from "./producto.model";


export class ListaProducto {

  private lista: Producto[];

  constructor() {
    this.lista = [];
  }

  public getLista() {
    return this.lista;
  }

  public agregar(p: Producto) {
    this.lista.push(p);
  }

  public borrar(id: string) {
    this.lista = this.lista.filter( item => item.id != id );
  }

  public guardar(p: Producto) {
    this.lista = this.lista.map(item => p.id === item.id ? p: item);
  }

  public buscar(id: string) {
    return this.lista.find(item => item.id === id);
  }

  public set(productos: Producto[]) {
    this.lista = productos;
  }

}