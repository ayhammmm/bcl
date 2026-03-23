import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/inventory';
import { Loader2 } from 'lucide-react';

interface Product {
    id: string | number;
    name: string;
    model_number: string;
    base_price: number;
}

export function ProductList() {
    const { data: products, isLoading, error } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    if (isLoading) {
        return <div className="flex justify-center p-10"><Loader2 className="animate-spin" /></div>;
    }

    if (error) {
        return <div className="text-red-500 p-10">Error loading products. Is the backend running?</div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Machinery Inventory</h2>
            {products?.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products?.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600">Model: {product.model_number}</p>
                            <p className="text-blue-600 font-bold mt-2">${product.base_price.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
