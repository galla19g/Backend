import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'inventario' })
export class InventarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    nombre: string;
}
