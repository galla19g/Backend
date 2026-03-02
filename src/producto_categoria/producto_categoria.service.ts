import { Injectable } from '@nestjs/common';
import { CreateProductoCategoriaDto } from './dto/create-producto_categoria.dto';
import { UpdateProductoCategoriaDto } from './dto/update-producto_categoria.dto';

@Injectable()
export class ProductoCategoriaService {
  create(createProductoCategoriaDto: CreateProductoCategoriaDto) {
    return 'This action adds a new productoCategoria';
  }

  findAll() {
    return `This action returns all productoCategoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productoCategoria`;
  }

  update(id: number, updateProductoCategoriaDto: UpdateProductoCategoriaDto) {
    return `This action updates a #${id} productoCategoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} productoCategoria`;
  }
}
