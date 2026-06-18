import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { DateAt } from '../../domain/entities/date-at.entity';

export class DateAtTypeOrmEntity implements DateAt {
    @CreateDateColumn({
        name: 'fecha_creacion',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: 'fecha_actualizacion',
        type: 'timestamp',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt!: Date;
}
