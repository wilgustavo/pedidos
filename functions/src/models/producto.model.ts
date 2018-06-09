import { IsString, MaxLength, IsNumber, IsNotEmpty, validate, ValidationError } from 'class-validator';

export class Producto {

  id: string; 

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  estado: string;

  @IsNumber()
  precio: number;

  @IsString()
  @MaxLength(100)
  imagen: string;

  constructor(obj?: Partial<Producto>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  validar(): Promise<ValidationError[]> {
    return validate(this);
  }
  
  static validar(obj: Partial<Producto>): Promise<ValidationError[]> {
    const producto = new Producto(obj);
    return validate(producto);
  }

  static addId(obj, id: string): Producto {
    return Object.assign({}, obj, {id});
  }

  static removerId(producto: Producto): any {
    const {id, ...obj} = producto;
    return obj;
  }
}