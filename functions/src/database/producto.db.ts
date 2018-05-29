import * as admin from 'firebase-admin';

export class ProductoDB {

  private ref = admin.database().ref('/productos');

  getProductos() {
    return this.ref.once('value').then(snap => {
      return snap.val();
    });
  }
}