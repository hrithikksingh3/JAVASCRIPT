let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

for (let I = 0; I <= 10; I++) {
    
    let ran1 = Math.ceil(Math.random()*3)
    let ran2 = Math.ceil(Math.random()*3)
    let ran3 = Math.ceil(Math.random()*3)
    
    console.log(`${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`)
    
}
