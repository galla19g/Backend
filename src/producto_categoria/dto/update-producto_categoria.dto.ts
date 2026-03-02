import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoCategoriaDto } from './create-producto_categoria.dto';

export class UpdateProductoCategoriaDto extends PartialType(CreateProductoCategoriaDto) {}
