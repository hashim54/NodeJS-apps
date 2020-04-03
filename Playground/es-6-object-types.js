
const name = 'hashim'
const age = '26'
//if same variables outside the object then no need to use key:value syntax, just name the value
const user = {
    name,
    age, 
    location: 'NYC'
}

console.log(user)

const product = {
    label: 'Baburnama',
    price:'3',
    stock:'23'
}

const transaction = (type, {label, price}) => {
    console.log(type)
    console.log(label)
    console.log(price)
}

transaction('order', product)