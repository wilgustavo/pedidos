import { Request, Response, NextFunction, Express } from 'express';
import { ProductoNotFound, ProductoValidacionError } from './database/producto.error';


const errorHandler = (app: Express) => {
  app.use((err, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ProductoNotFound) {
      res.status(404).send({ error: err.message });
    } else {
      next(err);
    }
  });

  app.use((err, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ProductoValidacionError) {
      res.status(400)
        .send(err.errors.map(item => ({
          property: item.property,
          constraints: item.constraints
        })));
    } else {
      next(err);
    }
  });

  app.use((err, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ error: err.message });
  });

}

export default errorHandler;