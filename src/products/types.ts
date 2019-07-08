import { Document } from 'mongoose';

export interface ProductDto {
    id: number;
    name: string;
}

export interface Product extends Document {
    name: string;
}
