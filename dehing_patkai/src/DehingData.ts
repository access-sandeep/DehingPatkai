import { createContext } from 'react';
interface Product {
    name: string;
    price: number;
    description: string
}
export const DehingData = createContext<{ products: Product; setProduct: React.Dispatch<React.SetStateAction<Product>>; }>({products:{name:'MoboDev', price: 200000, description:'along desc'}, setProduct:{} as any});