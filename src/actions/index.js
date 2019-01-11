export const addItemsToArray = (productList, name, price, quantity, id) =>  {

    productList.push({
        productName: name,
        price: price,
        quantity: quantity,
        id: id,
    })
}