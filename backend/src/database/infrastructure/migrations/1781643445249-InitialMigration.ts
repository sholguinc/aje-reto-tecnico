import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1781643445249 implements MigrationInterface {
    name = 'InitialMigration1781643445249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "cliente" (
                "id" integer NOT NULL,
                "nombres" character varying(255) NOT NULL,
                "email" character varying(255) NOT NULL,
                "telefono" character varying(50) NOT NULL,
                "estado" integer NOT NULL DEFAULT '1',
                "fecha_creacion" TIMESTAMP NOT NULL DEFAULT now(),
                "fecha_actualizacion" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_503f81286c5e49acd6a832abf43" UNIQUE ("email"),
                CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "cliente"
        `);
    }

}
