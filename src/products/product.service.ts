import {Product} from './product.model'
export const product: Product[] = [];
export const calcStock = (): number =>{
    let total = 0;
    product.forEach((item)=>{
        total+= item.stock;
    });
    return total;
}