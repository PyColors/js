import {add, sub} from './modules'

console.log(add(1, 2))
console.log(sub(1, 2))

const func = () => console.log('coco')
setTimeout(func, 3000)

const promise = (index) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(index * 4)
        }, 2000)
    })

const multi = async () => {
    const value = await promise(20)
    console.log(value)
}

multi()
