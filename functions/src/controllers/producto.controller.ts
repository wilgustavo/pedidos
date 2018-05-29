import {Request, Response} from 'express';
import { ProductoDB } from '../database/producto.db';

export class ProductoController {

  constructor(private db: ProductoDB) { }
  
  getMensaje = (req: Request, res: Response) => {
    this.db.getProductos().then(lista => {
      res.json(lista);
    });
  }
} 