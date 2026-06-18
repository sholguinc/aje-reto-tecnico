import { DateAt } from 'src/database/domain/entities/date-at.entity';

export class Client {
    constructor(
        public readonly id: number,
        public readonly names: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly state: number,
        public readonly register: DateAt,
    ) { }
}