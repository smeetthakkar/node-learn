/*Object Property Shorthand

const name = 'Smeet'
const userAge = 28


const user = {
    //Shorthand
    name,
    // name: name,
    age: userAge,
    location: 'Mumbai'
}

console.log(user)
*/

//Object Destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined

}

const {label:productLabel, stock, rating = 5} = product
// console.log(label)
console.log(productLabel)
console.log(stock)
console.log(rating)


const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)