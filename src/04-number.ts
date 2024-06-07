(()=>{
    let productPrice = 100;
    productPrice = 12;
    console.log('product Price', productPrice);
    
    let customerAge: number =28;
    //customerAge = customerAge + '1';
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);

    let productInStock: number;
    console.log('productInStock', productInStock); //Genera error ya que productInStock no tiene valor.
    if(productInStock >10){
        console.log('is greater');//Genera error ya que productInStock no tiene valor.
    }

    let discount = parseInt('1230');
    console.log('discount', discount);
    if (discount <= 2000){
        console.log('Apply');
    }else{
        console.log('Not apply');
    }

    let hex = 0xff;
    console.log('hex', hex);
    let bin = 0b1010101;
    console.log('bin', bin);

    const myNumber: number = 10;

})();