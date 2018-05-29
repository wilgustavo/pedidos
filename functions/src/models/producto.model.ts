import { IsString, MaxLength, IsNumber, IsNotEmpty } from 'class-validator';

export class Producto {

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
}