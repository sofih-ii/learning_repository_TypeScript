import {calcStock, product} from './product.service';
product.push({
    name: 'product1',
    createAt: new Date(1999, 5, 8),
    stock: 12,
    size: 'S'
})
console.log(product);

const total = calcStock();
console.log(total);