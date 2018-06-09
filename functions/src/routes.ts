import { Express } from 'express';
import { ProductoController } from './controllers/producto.controller';
import { ProductoDB } from './database/producto.db';

const routes = (app: Express) => {
  const productoDb = new ProductoDB();
  const productoController = new ProductoController(productoDb);
  
  app.get('/productos', productoController.getProductos);
  app.get('/productos/:id', productoController.getProducto);
  app.post('/productos', productoController.crearProducto);
  app.put('/productos/:id', productoController.grabarProducto);
  app.delete('/productos/:id', productoController.borrarProducto);
}

export default routes;