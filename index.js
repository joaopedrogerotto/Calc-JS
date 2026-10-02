const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value;
        input.value += value;
    })
});

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus();
});

document.getElementById('equal').addEventListener('click', calculate);

input.addEventListener('keydown', function(event){
    event.preventDefault();
    if(allowedKeys.includes(event.key)){
        input.value += event.key;
        return;
    }

    if(event.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }

    if(event.key === 'Enter'){
        calculate()
    }
});

function calculate(){
    const result = eval(input.value);
    resultInput.value = result
}
