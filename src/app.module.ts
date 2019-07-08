import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

const connectionString = process.env.DB_CONNECTION_STRING;

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(connectionString)],
})
export class AppModule {}
