import { Test, TestingModule } from '@nestjs/testing';
import { ProductoCategoriaController } from './producto_categoria.controller';
import { ProductoCategoriaService } from './producto_categoria.service';

describe('ProductoCategoriaController', () => {
  let controller: ProductoCategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoCategoriaController],
      providers: [ProductoCategoriaService],
    }).compile();

    controller = module.get<ProductoCategoriaController>(ProductoCategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
