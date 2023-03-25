import fruits from './foods'

const choice = (items) => {
    const randIndex = Math.floor(Math.random() * items.length)

    return items[randIndex]
}

const remove = (item, items) => {
    for (let i=0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove}