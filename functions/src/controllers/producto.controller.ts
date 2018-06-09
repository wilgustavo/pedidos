import {Request, Response, NextFunction} from 'express';
import { ProductoDB } from '../database/producto.db';
import { Producto } from '../models/producto.model';

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
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  grabarProducto = (req: Request, res: Response) => {
    this.db.guardarProducto(Producto.addId(req.body, req.params.id))
      .then(() => {
        res.status(204).send();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  borrarProducto = (req: Request, res: Response) => {
    this.db.borrarProducto(req.params.id)
      .then(() => {
        res.status(204).send();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
} 