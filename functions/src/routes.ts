import { Express } from 'express';
import { ProductoController } from './controllers/producto.controller';
import { ProductoDB } from './database/producto.db';

const routes = (app: Express) => {
  const productoDb = new ProductoDB();
  const productoController = new ProductoController(productoDb);
  
  app.get('/productos', productoController.getProductos);
  app.get('/productos/:id', productoController.getProducto);
  app.post('/productos', productoController.crearProducto);
}

export default routes;