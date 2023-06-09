console.log("hello world");
console.log("lool");

function sum(a,b)   {
    console.log(a+b)
}

let sum2 = function(a, b)   {
    return a+b
}

setTimeout(function()   {console.log("2 seconds has passed")}, 2000)

let button = document.getElementById("btn")

button.addEventListener("click", () => sum(6,9))

