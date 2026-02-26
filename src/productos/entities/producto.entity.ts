import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { CategoriaEntity } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'productos' })
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    nombre: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio: number;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'fecha_actualizacion' })
    fechaActualizacion: Date;

    @Column({ name: 'categoria_id', nullable: true })
    categoriaId: number;

    @ManyToOne(() => CategoriaEntity, (categoria) => categoria.productos,)
    @JoinColumn({ name: 'categoria_id' })
    categoria: CategoriaEntity;

}