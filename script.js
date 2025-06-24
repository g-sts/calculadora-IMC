let nome = document.querySelector('#inome')
let altura = document.querySelector('#ialtura')
let peso = document.querySelector('#ipeso')
let display = document.querySelector('#display')
let button = document.querySelector('#btn')

let imc 



button.addEventListener('click', calcularImc)

function calcularImc(){

    if(nome.value === '' || altura.value === '' || peso.value === ''){
         alert("Preencha todos os campos com valores validos");
    } else{
        imc = peso.value / ((altura.value/100) * (altura.value/100))

        let res = ''

        if(imc < 18.5){
            res = 'abaixo do peso!'
        }
        else if(imc >= 18.5 && imc <= 24.9){
            res = 'com o peso ideal.'
        }
        else if(imc >= 25 && imc <= 29.9){
            res = 'um pouco acima do peso ideal!'
        }
        else if(imc > 30){
            res = 'na faixa da obesidade!'
        }

        display.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você está ${res}`
    }

    nome.value = ''
    altura.value = ''
    peso.value = ''
}
    




