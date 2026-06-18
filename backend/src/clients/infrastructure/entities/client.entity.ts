import { PrimaryColumn, Column, Entity } from 'typeorm';

import { Client } from '../../domain/entities/client.entity';
import { DateAtTypeOrmEntity as DateAt } from 'src/database/infrastructure/entities/date-at.entity';

@Entity({ name: 'cliente' })
export class ClientTypeOrmEntity implements Client {
    @PrimaryColumn()
    id!: number;

    @Column({ name: 'nombres', type: 'varchar', length: 255 })
    names!: string;

    @Column({ name: 'email', type: 'varchar', unique: true, length: 255 })
    email!: string;

    @Column({ name: 'telefono', type: 'varchar', length: 50 })
    phone!: string;

    @Column({ name: 'estado', type: 'integer', default: 1 })
    state!: number;

    @Column(() => DateAt, { prefix: false })
    register!: DateAt;
}
