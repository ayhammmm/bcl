import client from './client';

export interface Product {
    id: number;
    name: string;
    model_number: string;
    base_price: number;
    category_id: number;
}

export const getProducts = async () => {
    const response = await client.get<Product[]>('/inventory/products/');
    return response.data;
};
