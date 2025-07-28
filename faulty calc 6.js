let random = Math.random()
console.log(random)

let a = prompt("Enter the first numebr: ")
let b = prompt("Enter the second numebr: ")
let c = prompt("Enter the operation numebr: ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (random>0.1) {
    console.log(`The result is ${a} ${c} ${b} `)
    console.log(`The result is ${eval(`${a} ${c} ${b} `)}`)
}

else {
    console.log(`The result is ${a} ${obj[c]} ${b}`)
    console.log(`The result is ${eval(`${a} ${obj[c]} ${b}`)}`)
    
}