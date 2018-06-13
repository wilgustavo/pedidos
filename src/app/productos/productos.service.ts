import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'functions/src/models/producto.model';

@Injectable()
export class ProductosService {

  private url = 'https://us-central1-nest-58493.cloudfunctions.net/app/productos';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.url);
  }

  crearProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto, this.httpOptions);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.put(this.getProductoURL(producto.id), producto, this.httpOptions);
  }

  borrarProducto(id: string): Observable<any> {
    return this.http.delete(this.getProductoURL(id), this.httpOptions);
  }

  private getProductoURL(id: string): string {
    return this.url + `/${id}`;
  }
}
