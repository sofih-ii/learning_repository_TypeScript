(()=>{
    let productTitle = 'My amazing product';
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);

    const productDescription = 'The description';
    console.log('productDescription', productDescription);

    const summary = `
    title: ${productTitle},
    description: ${productDescription}
    `;
    console.log(summary)

    const myString: String = 'Hello'//Bad Practice
})();