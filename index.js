let btnIncrement = document.getElementById("btnIncrement");
let btndecrement = document.getElementById("btndecrement");
let numberValue = document.querySelector("number");
let reult = document.getElementById("res");
function incerement(){
    numberValue++;
    console.log(numberValue);
    reult.innerHTML = `${numberValue}`

}
incerement();

function decrement(){
    numberValue--;
    console.log(numberValue);
    if(numberValue < 0){
        return alert("server wont allow numbers below 0");
    }
    reult.innerHTML = `${numberValue}`

}
decrement();

btnIncrement.addEventListener("click", incerement)
btndecrement.addEventListener("click", decrement)


