import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  crearProducto(obj: any): Observable<any> {
    console.log('voy a guardar', obj );
    return this.http.post(this.url, obj, this.httpOptions);
  }
}
