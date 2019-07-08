import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ProductDto, Product } from './types';

import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async getProduct(id: number): Promise<Product> {
        return this.productModel.findById(id);
    }

    async getProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async createProduct(product: ProductDto): Promise<Product> {
        return this.productModel.create(product);
    }

    updateProduct(product: ProductDto): Promise<Product> {
        const resultProduct = this.productModel.findById(product.id);
        return resultProduct.findOneAndUpdate({name: product.name}).exec();
    }

    deleteProduct(id: number) {
        // tslint:disable-next-line:no-console
        this.productModel.deleteOne({_id: id}, (error) => console.log(error));
    }
}
