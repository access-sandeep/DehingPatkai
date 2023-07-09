import { createContext } from 'react';
export const DehingData = createContext<{ products: string; setProduct: React.Dispatch<React.SetStateAction<string>>; }>({products:'', setProduct:{} as any});