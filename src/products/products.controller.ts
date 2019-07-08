import { Controller, Get, Delete, Body, Post, Put, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './types';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param() params) {
        // tslint:disable-next-line:no-console
        console.log('get a single product', params.id);
        return this.productService.getProduct(params.id);
    }

    @Delete()
    deleteProduct(@Body() product: ProductDto) {
        // tslint:disable-next-line:no-console
        console.log('delete product', product.id);
        this.productService.deleteProduct(product.id);
    }

    @Post()
    addProduct(@Body() product: ProductDto) {
        // tslint:disable-next-line:no-console
        console.log('create product', product);
        this.productService.createProduct(product);
    }

    @Put()
    updateProduct(@Body() product: ProductDto) {
        // tslint:disable-next-line:no-console
        console.log('update product', product);
        this.productService.updateProduct(product);
    }

}
