import {add, sub} from './modules'

console.log(add(1, 2))
console.log(sub(1, 2))



const func = () => console.log('coco')
setTimeout(func, 3000)


const tab = [1,2,3,4]

const promise = (index) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(index * 4)
        }, 2000)
    })

const promises = Promise.all(tab.map(el =>
    promise(el)
))

promises
    .then(elements => {
        console.log(elements)
    })
