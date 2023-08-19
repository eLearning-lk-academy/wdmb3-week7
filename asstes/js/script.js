let btn = document.querySelector("#btn")
let out = document.querySelector("#out")


btn.addEventListener('click', function(){
    out.innerHTML = "Button clicked"
})

btn.addEventListener('mouseover',function(){
    console.log('hover')
})