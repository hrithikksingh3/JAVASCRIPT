let a = [1,93,44,3,88]



//Basic for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index]
    console.log(element)
    
}


//forEach loop

a.forEach((value , index , a)=>{
    console.log(value, index , a)
})


//For in loop

let object = {
    a:1,
    b:2,
    c:3
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key,element)
    }
}


// FOr off loop 

for (const element of a) {
    console.log(element)
}