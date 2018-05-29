import {Request, Response} from 'express';
import { ProductoDB } from '../database/producto.db';

export class ProductoController {

  constructor(private db: ProductoDB) { }
  
  getProductos = (req: Request, res: Response) => {
    this.db.getProductos()
      .then(lista => {
        res.json(lista);
      })
      .catch(err => { 
        res.status(500).send(err); 
      });
  }

  getProducto = (req: Request, res: Response) => {
    this.db.getProducto(req.params.id)
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        res.status(500).send(err); 
      });
  }
} 