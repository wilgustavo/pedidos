
export class ProductoNotFound extends Error {
  constructor(mensaje: string) {
    super(mensaje);
  }
}