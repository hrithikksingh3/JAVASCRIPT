function hello(name) {
    console.log("Hello, " + name + " You are nice");
    console.log("Hello, " + name + " You are good");
    console.log("Hello, " + name + " Your tshit is nice");
    console.log("Hello, " + name + " Your course is good too");
}

hello("hrithik")
hello("coders")

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

result1 = sum(2, 3)
result2 = sum(6, 8)
result3 = sum(3, 7, 1)
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);


//Arrow function uses lexical this ( this refer to parent obj)
const func1 = (x) => {
    console.log("Hello, I am an arrow function", x);
}

func1(34)
func1(97)
func1(56)

function one(x){
    console.log("Hello, I am a normal function", x);
}

one(23)&4``