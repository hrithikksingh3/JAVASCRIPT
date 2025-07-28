let arr = [1,2,3,4,5]


arr[0] = 23232 //mutable
console.log(arr , typeof(arr))
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])



console.log(arr.toString)
console.log(arr.join(" and "))

console.log(arr.pop()) // return last element of array and remove it as well.
console.log(arr)
arr.push(299) //add last element
arr.push("hrithik")
console.log(arr)

arr.shift() //pop from begginig
console.log(arr)

arr.unshift(233) //add to begging
console.log(arr)

arr.sort() //sort the unsorted array (modify original array)
console.log(arr)

delete arr[1]
console.log(arr)


let a1 = [1,2,3,4,5]
let a2 = [5,6,7]
let a3 = [8,9,0]

console.log(a1.concat(a2,a3))

// a1.splice(1,3) //slice ki trh h but add b kr skte h.

a1.splice(1,2 , 222, 333)
console.log(a1)

a2.slice(1) //slice out but not working.
console.log(a2)

arr.reverse()
console.log(arr)
