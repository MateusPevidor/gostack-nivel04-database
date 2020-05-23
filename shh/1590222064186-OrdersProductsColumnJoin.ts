import { MigrationInterface, QueryRunner } from 'typeorm';

export default class OrdersProductsColumnJoin1590222064186
  implements MigrationInterface {
  name = 'OrdersProductsColumnJoin1590222064186';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_823bad3524a5d095453c43286bb"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_4eff63e89274f79195e25c5c115"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "orderId"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "productId"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "UQ_4c9fb58de893725258746385e16"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "product_id"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "product_id" uuid NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "order_id"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "order_id" uuid NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_beb618ce6dae64b9d817394ebdb"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP CONSTRAINT "FK_266b0df20b9e4423bc9da1bbdc1"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "order_id"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "order_id" character varying NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" DROP COLUMN "product_id"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "product_id" character varying NOT NULL`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name")`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "productId" uuid`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD "orderId" uuid`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_4eff63e89274f79195e25c5c115" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "orders_products" ADD CONSTRAINT "FK_823bad3524a5d095453c43286bb" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }
}
