const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0, b < 0) {
                reject('Enter a non-negative number')
            }
            resolve(a + b)    
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(2,3)
    const sum2 = await add (sum, 100)
    const sum3 = await add (sum2, 45)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e)
})