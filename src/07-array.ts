(()=>{
    let prices = [1, 2, 3, 45, 6, 653, 'hello', true];
    prices.push(4545);
    prices = [21, 432]

    let products = ['Kiki', true];
    products.push('hi');

    let mixed: (string|boolean|number|Object)[] = ['hi', true];
    mixed.push(123);

    let numbers = [1,23,4];
    numbers.map(item => item *2);
    
})();