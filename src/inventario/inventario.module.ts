import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { InventarioEntity } from './entities/inventario.entity';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [TypeOrmModule.forFeature([InventarioEntity]), ProductosModule],
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule { }
