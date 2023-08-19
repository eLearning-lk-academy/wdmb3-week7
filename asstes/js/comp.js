const marks = document.getElementById('marks')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', function () {
    console.log(marks.value)
   
    // if( marks.value > 50){
    //     result.innerHTML = "Pass"
    // }else{
    //     result.innerHTML = "Fail"
    // }

    if( marks.value >= 75){
        result.innerHTML = "A"
    }else if( marks.value >= 50){
        result.innerHTML = "B"
    }else if( marks.value >= 35){
        result.innerHTML = "C"
    }else{
        result.innerHTML = "Fail"
    }
})

const day = document.getElementById('day')
const qbtn = document.getElementById('qbtn')
const qresult = document.getElementById('qresult')

qbtn.addEventListener('click', function () {
    switch (day.value) {
        case 'Monday':
            qresult.innerHTML = "Get ready to work"
            break;
        case 'Tuesday':
            qresult.innerHTML = "Get ready to work"
            break;
        case 'Saturday':
            qresult.innerHTML = "Enjoy your weekend"
            break;
        default:
            qresult.innerHTML = "Enjoy your day"
            break;
    }
})

let a = false
let b = true

if(a){
    console.log("a is true")
}
if(a && b){
    console.log("a and b is true")
}

if (a || b) {
    console.log("a or b is true")
}