// Fetch All Products
fetch('https://fakestoreapi.com/products')
.then((response)=>response.json())
.then((data)=> console.log(data))
.catch((err)=>console.log(err));

// Add product
const product = {
                    title: 'New product',
                    price: 18.5,
                    description: 'lorem ipsum',
                    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
                    category: 'men\'s clothing'
}
fetch('https://fakestoreapi.com/products',{
            method:"POST",
            product:JSON.stringify(product)
        })
        .then(response=>response.json())
        .then(json=>console.log(json))


// Edit product #7
const editedProduct = {
    title: 'updated product',
    price: 19.5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde quae, assumenda temporibus quia excepturi ipsam non odio nihil odit, autem ea optio incidunt adipisci quasi cum consectetur, inventore numquam?',
    image: 'https://i.https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg.cc',
    category: 'men\'s clothing'
}
fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
            editedProduct
            )
        })
            .then((response)=>response.json())
            .then((json)=>console.log(json))
// Delete product #6
fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
        .then(response=>response.json())
        .then(json=>console.log(json))