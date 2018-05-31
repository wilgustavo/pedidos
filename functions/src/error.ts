import {Request, Response, NextFunction, Express} from 'express';
import { ProductoNotFound } from './database/producto.error';


const errorHandler = (app: Express) => {
  app.use((err, req: Request, res: Response, next: NextFunction ) => {
    if (err instanceof ProductoNotFound) {
      res.status(404).send({ error: err.message });
    } else {
      next(err);
    }
  }); 

  app.use((err, req: Request, res: Response, next: NextFunction ) => {
    res.status(500).send({ error: err.message });
  }); 
 
}

export default errorHandler;