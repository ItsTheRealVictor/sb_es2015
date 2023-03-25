import fruits from './foods'
import {choice, remove} from './helpers'

let fruit = choice(fruits)

console.log(`I'd like one ${fruit}please`)
console.log(`Here's your ${fruit}`)
console.log('Ayy lemme get another')

let remaining = remove(fruit, fruits)

console.log(`We only have ${fruits.length} fruits left`)