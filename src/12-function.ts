(()=>{
    type Sizes = 'M'|'L'|'S'|'XS'|'XL'
    function createProductToJson(
        title: string,
        createAt: Date,
        stock: number,
        size: Sizes
    ){
        return{
            title,
            createAt,
            stock,
            size
        }
    }
    const product1 = createProductToJson('P1', new Date(), 12, 'S');
    console.log(product1);

    //arrow function
    const createProductToJsonV2=(
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    )=>{
        return{
            title,
            createAt,
            stock,
            size
        }
    }
    const product2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(product2);
    console.log(product2.size);
})();