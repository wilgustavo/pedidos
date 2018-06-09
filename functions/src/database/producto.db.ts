import * as admin from 'firebase-admin';
import { ProductoNotFound } from './producto.error';
import { Producto } from '../models/producto.model';
import { validate, ValidationError } from 'class-validator';

export class ProductoDB {

  private productosRef = admin.firestore().collection('productos');

  getProductos(): Promise<Producto[]> {
    return this.productosRef.orderBy('nombre').get()
      .then(snapshot  => snapshot.docs.map(doc => Producto.addId(doc.data(), doc.id)));
  }

  getProducto(id: string): Promise<Producto> {
    return this.productosRef.doc(id).get().then(doc => {
      if (!doc.exists) {
        throw new ProductoNotFound(`No existe producto ${id}`);
      } 
      return Producto.addId(doc.data(), id);
    });
  }

  crearProducto(producto: Producto): Promise<Producto> {
    
    return Producto.validar(producto)
      .then(errors => {
        if (errors.length > 0) {
          throw new Error('Error de validacion');
        }
        return this.productosRef.add(producto);
      })
      .then(doc => Producto.addId(producto, doc.id));
  }

  guardarProducto(producto: Producto): Promise<any> {
    return Producto.validar(producto)
      .then(errors => {
        if (errors.length > 0) {
          throw new Error('Error de validacion');
        }
        return this.productosRef.doc(producto.id).set(Producto.removerId(producto));
      });
  }
}