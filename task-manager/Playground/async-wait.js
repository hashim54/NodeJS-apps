//ASYNC FUNCTIONS ALWAYS RETURN

const add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1+num2)
        }, 2000)
    })
} 

const dowork = async () => {

    const sum1= await add(3,4)
    const sum2= await add(sum1,4)
    const sum3= await add(sum2,4)
    return sum3
} 

dowork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

