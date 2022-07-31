function storeProvision(stock, delivery){
    let products = {}
    for(let i = 0; i < stock.length; i+=2){
        let currentProduct = stock[i]
        products[currentProduct] = Number(stock[i + 1])
    }
    for(let i = 0; i < delivery.length; i+=2){
        let currentProduct = delivery[i]
        if(!products.hasOwnProperty(currentProduct)){
            products[currentProduct] = 0;
        }
        products[currentProduct] += Number(delivery[i + 1])
    }
    for (const currentProduct in products) {
        console.log(`${currentProduct} -> ${products[currentProduct]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )