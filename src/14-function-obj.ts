(()=>{
    type Sizes = 'M'|'L'|'S'|'XS'|'XL'
    const login = (data:{email:string, 
        password:number})=>{
        console.log(data.email, data.password);
    }
    //login('sofiasaramoratrujillo@gmail.com', '1234567');

    login({
        email: 'sofiasaramoratrujillo@gmail.com',
        password: 1234567
    });

    const product: any[] = [];
    const addProduct = (data:{title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    })=>{
        product.push(data);
    }

    addProduct({
        title: 'product',
        createAt: new Date(1234, 65, 78),
        stock: 12,
    });
    addProduct({
        title: 'product',
        createAt: new Date(1234, 65, 78),
        stock: 12,
        size: 'S'
    });
    console.log(product);
})();