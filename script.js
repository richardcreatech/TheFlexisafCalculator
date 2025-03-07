const numberBox = document.getElementById('numberBox');
const number = document.getElementsByClassName('number');
const calculation = document.getElementsByClassName('calculation');
const equate = document.querySelector('.equate');
const ac = document.querySelector('.ac');

function typeInAvalue () {
    for(let i = 0; i < number.length; i++){
        number[i].onclick = () => {
            numberBox.value += number[i].value;
        }
    }
}

typeInAvalue();

const operator = function() {
    for(let i = 0; i < calculation.length; i++){
        calculation[i].onclick = () => {
            numberBox.value += calculation[i].value;
        }
    }
}

operator();

let calculate = 0;
function activate(){
    const myEvaluation = eval(numberBox.value);
    calculate = myEvaluation;
    numberBox.value = "";
    return calculate;
}

equate.onclick = () =>{
    numberBox.value = activate();
    
};

ac.onclick = () => {
    calculate = 0;
    numberBox.value = '';
}