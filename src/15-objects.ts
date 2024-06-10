(()=>{
    type Sizes = 'M'|'L'|'S'|'XS'|'XL'
    type Product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    };

    const product: Product[] = [];

    product.push({
        title: 'product1',
        createAt: new Date(1999, 5, 8),
        stock: 12,
        size: 'S'
    })
    console.log(product);
})();