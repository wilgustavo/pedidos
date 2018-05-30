import * as admin from 'firebase-admin';

export class ProductoDB {

  private productosRef = admin.firestore().collection('productos');

  getProductos() {
    return this.productosRef.get()
      .then(snapshot  => snapshot.docs.map(doc => Object.assign({}, doc.data(), {id: doc.id})));
  }

  getProducto(id: string) {
    return this.productosRef.doc(id).get().then(doc => doc.data());
  }

  crearProducto(producto) {
    return this.productosRef.add(producto).then(doc => doc.id);
  }
}