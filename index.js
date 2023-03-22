// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
    return cats
}
function appendCat(name){
    return [...cats,name]
}
function prependCat(name){
    return [name,...cats]
}
function removeLastCat(){
    return cats.slice(0,2)
}
function removeFirstCat(){
    return cats.slice(1)
}