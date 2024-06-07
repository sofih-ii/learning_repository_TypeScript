(async () => {
  const myCart = [];
  let products = [];
  const limit = 2;

  async function getProducts() {
      const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
          method: 'GET'
      });
      const data = await rta.json();
      products = products.concat(data); // Corregido: Asignar el resultado de concat a products
  }

  function getTotal() {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
          total += products[i].price; // Corregido: 'prize' a 'price'
      }
      return total;
  }

  function addProduct(index) {
      const total = getTotal(); // Calcular el total una vez
      if (total + products[index].price <= limit) { // Verificar si agregar el producto supera el límite
          myCart.push(products[index]);
      }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
      name: 'Nicolas',
      lastName: 'Molina'
  }
  // const rta = person +  limit;
  // console.log(rta);
})();
