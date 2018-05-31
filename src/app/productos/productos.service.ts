import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {

  private url = 'https://us-central1-nest-58493.cloudfunctions.net/app/productos';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.url);
  }
}
