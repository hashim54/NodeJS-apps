// const doWorkPromise = new Promise((resolve, reject) => {
//      setTimeout( () => {
//         reject('Things are not great')
//         resolve('Things are great')
// }, 2000)
// })
// doWorkPromise.then((result) => {
//     console.log('Success', result)
// }).catch((error) => {
//     console.log('Error', error)
// })

const add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1+num2)
        }, 2000)
    })
} 
//WITHOUT PROMISE CHAINING
// add(2,4).then((sum) => {
//     console.log(sum)
//     add(sum,4).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })
//PROMISE CHAINING WILL PROVIDE A BETTER SOLUTION TO ABOVE

add(4,2).then((sum) => {
    console.log(sum)
    return add(sum,4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})