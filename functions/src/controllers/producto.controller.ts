import {Request, Response, NextFunction} from 'express';
import { ProductoDB } from '../database/producto.db';
import { ProductoNotFound } from '../database/producto.error';

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

  getProducto = (req: Request, res: Response, next: NextFunction) => {
    this.db.getProducto(req.params.id)
      .then(doc => {
        res.json(doc);
      })
      .catch(err => next(err));
  }

  crearProducto = (req: Request, res: Response) => {
    this.db.crearProducto(req.body)
      .then(id => {
        res.json({id});
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
} 