import {add, sub} from './modules'

console.log(add(1, 2))
console.log(sub(1, 2))



const func = () => console.log('coco')
setTimeout(func, 3000)



const promise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('coco')
            reject(40)
        }, 2000)
    })

promise()
    .then(elem => {
        console.log('toto', elem)
    })
    .catch(err => {
        throw new Error(err)
    })
