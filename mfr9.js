let arr = [1,3,5,6,4,9,7]
var newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}

console.log(newArr)



//MAP
var newArr = arr.map((e,index , array)=>{
    return e**2
})

console.log(newArr)


//Filter 
const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanseven))


//Reduced 

const red = (a,b)=>{
    return a+b
}

console.log(newArr.reduce(red))



//Array from
let x = Array.from("Hrithik")

console.log(x)