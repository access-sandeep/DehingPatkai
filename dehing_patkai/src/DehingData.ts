import { createContext } from 'react';
interface Product {
    id: number;
    name: string;
    price: number;
    description: string
}
export const DehingData = createContext<{ products: Product[]; setProduct: React.Dispatch<React.SetStateAction<Product[]>>; }>({products:[{id:  Date.now(),  name:'MoboDev', price: 200000, description:'along desc'}], setProduct:{} as any});