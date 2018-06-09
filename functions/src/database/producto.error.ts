import { ValidationError } from "class-validator";

export class ProductoNotFound extends Error {
  constructor(mensaje: string) {
    super(mensaje);
  }
}

export class ProductoValidacionError extends Error {
  constructor(public errors: ValidationError[]) {
    super('Error de validacion');
  }
}