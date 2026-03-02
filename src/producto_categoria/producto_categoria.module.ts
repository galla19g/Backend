import { Module } from '@nestjs/common';
import { ProductoCategoriaService } from './producto_categoria.service';
import { ProductoCategoriaController } from './producto_categoria.controller';

@Module({
  controllers: [ProductoCategoriaController],
  providers: [ProductoCategoriaService],
})
export class ProductoCategoriaModule {}
