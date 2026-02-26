import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoEntity } from "src/productos/entities/producto.entity";

@Entity({ name: 'categorias' })
export class CategoriaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    nombre: string;

    @OneToMany(() => ProductoEntity, (producto) => producto.categoria)
    productos: ProductoEntity[];

    
}
