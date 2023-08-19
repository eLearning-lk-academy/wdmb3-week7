function addTwoNumbers(a,b){
    return a+b;
}

function getCircumference(radius){
    // 2*PI*r
    
    return 2*Math.PI*radius;
}

let circumference = getCircumference(5) //31.41592653589793

console.log(circumference)
console.log( getCircumference(3))

const getArea = (radius) =>{
    return Math.PI*radius*radius;
}

console.log(getArea(5))

let lastName = "Doe"
function myFunction(){
    console.log("Hello World")
    let firstName = "John"
    console.log(firstName)
    console.log(lastName)
}
myFunction()
console.log(firstName)
console.log(lastName)