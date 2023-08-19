const c = document.querySelector("#celsius")
const f = document.querySelector("#fahrenheit")
const c2f = document.querySelector("#c2f")
const f2c = document.querySelector("#f2c")

c2f.addEventListener('click', ()=>{
    if(c.value == ""){
        alert("Please enter a value")
        return
    }
    f.value = (c.value * 9/5) + 32
})
f2c.addEventListener('click', ()=>{
    if(f.value == ""){
        alert("Please enter a value")
        return
    }
    c.value = (f.value - 32) * 5/9
})



/*let btn = document.querySelector("#btn")
let out = document.querySelector("#out")


btn.addEventListener('click', function(){
    out.innerHTML = "Button clicked"
})

btn.addEventListener('mouseover',function(){
    console.log('hover')
})

// strings

let str1 = "String one"
let str2 = "string Two"
let str3 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus praesentium commodi libero ab, voluptas ut sed veritatis possimus. Itaque impedit consectetur mollitia qui quaerat ratione quae iste illum velit rerum."

/*
// length
console.log(str1.length)

// slice
console.log(str1.slice(0,6))
console.log(str1.slice(7,10))
console.log(str3.slice(10))

console.log(str2.slice(-3,-1))

// substring 
console.log(str1.substring(0,6))

// substr 
console.log(str1.substr(3,2))

// concatenation
console.log(str1 +' '+ str2)
console.log(str1.concat(' ', str3))


const text = document.querySelector('#text')
const find = document.querySelector("#find")
const replace = document.querySelector("#replace")
const btnFR = document.querySelector("#btnFR")
const outFR = document.querySelector("#outFR")

// btnFR.addEventListener('click', function(){
//     let output = text.value
//     output = output.replace(find.value, replace.value)
//     outFR.innerText = output
// })
btnFR.addEventListener('click', function(){
    
    let findText = find.value
    findText = findText.trim();

    let output = text.value

    output = output.replaceAll(findText, replace.value.trim())

    outFR.innerText = output
    // console.log(output.toLowerCase())
    // console.log(output.toUpperCase())
})
*/