console.log("I am loops tutorial")

let a =1;

for (let i = 0; i < 10; i++) {
 console.log(a);
 a++;
    
}

// The for in loop used in objects to print keys , we can print element too.

let obj = {
    name: "Hrithik",
    profession : "Software Engineer"
}

for (const key in obj) {
    const element = obj[key]
        console.log(key , element); 
    }


    // The for of loop used in array and string
    for (const c of "HRITHIK") {
        console.log(c)
    }


    //while loop

    // let i = 1;
    // while(i <= 10) {
    //    console.log(i)
    //    i++;
    // }

    // Do while loop

    let i = 1;
    do {
        console.log(i)
        i++;
    } while (i<=10);





//FOR LOOP

// console.time("Time taken")
// for (let i = 1; i <=10; i++) {
//     console.log(i)
    
// }
// console.timeEnd("Time taken")


//WHILE LOOP

// console.time("Time taken")
// var i=1;
//  while(i<=10){
//     console.log(i)
//     i++;
//  }
// console.timeEnd("Time taken")


//DO WHILE LOOP

// console.time("Time taken")
// var i =1
// do {
//     console.log(i)
//     i++;
// } while (i<=10);
// console.timeEnd("Time taken")