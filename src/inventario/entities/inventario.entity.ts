import { Column, Entity } from "typeorm";

@Entity({name: 'inventario'})
export class InventarioEntity {
    @Column({type: 'varchar', length: 255})
    nombre: string;
}
