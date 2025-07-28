//Factorial using Reduce
let arr = [1,2,3,4,5,6]

const red = (a,b)=>{
      return (a*b)
}

console.log(arr.reduce(red))


//Factorial using For loop

function facfor(number){
    let fac = 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index
        
    }
    return fac
}

console.log(facfor(arr.length))

