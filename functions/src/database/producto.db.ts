import * as admin from 'firebase-admin';
import { ProductoNotFound } from './producto.error';

export class ProductoDB {

  private productosRef = admin.firestore().collection('productos');

  getProductos() {
    return this.productosRef.orderBy('nombre').get()
      .then(snapshot  => snapshot.docs.map(doc => Object.assign({}, doc.data(), {id: doc.id})));
  }

  getProducto(id: string) {
    return this.productosRef.doc(id).get().then(doc => {
      if (!doc.exists) {
        throw new ProductoNotFound(`No existe producto ${id}`);
      } 
      return doc.data();
    });
  }

  crearProducto(producto) {
    return this.productosRef.add(producto).then(doc => doc.id);
  }
}