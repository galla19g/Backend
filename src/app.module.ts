import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InventarioModule } from './inventario/inventario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProductosModule, UsuariosModule, InventarioModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
