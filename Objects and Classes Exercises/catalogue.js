function solve(input) {
    const productsObj = input.reduce((obj, product) => {
      const [name, price] = product.split(' : ');
      const key = name[0].toUpperCase();
  
      if (!obj[key]) {
        obj[key] = [];
      }
  
      obj[key].push(`${name}: ${price}`);
  
      return obj;
    }, {});
  
    const sortedProductsObj = Object.keys(productsObj).sort();
  
    for (const key of sortedProductsObj) {
      console.log(key);
  
      for (const product of productsObj[key].sort()) {
        console.log(product.replace(/^/g, '  '));
      }
    }
  }
  
  

solve([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])