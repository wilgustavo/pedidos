import * as admin from 'firebase-admin';

export class ProductoDB {

  private productosRef = admin.firestore().collection('productos');

  getProductos() {
    return this.productosRef.get().then(snapshot  => {
      return snapshot.docs.map(doc => Object.assign({}, doc.data(), {id: doc.id}));
    });
  }
}