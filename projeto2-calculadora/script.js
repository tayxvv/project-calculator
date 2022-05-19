let numero;
let conta;
function insert(num){
    function isNumeric(){
        n = Number(num)
        if(num != '.')
            if(num=='.'){
                console.log(num, "is a number")
                let n1 = num
                document.getElementById('resultado').innerHTML = n1
                conta = document.getElementById('resultado').innerHTML
            }
        if(isNaN(n)==false){
            console.log(num, "is a number")
            numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num
            conta = document.getElementById('resultado').innerHTML

        }
        if(isNaN(n)==true){
            console.log(num, "not a number")
            clean(numero)
            conta = document.getElementById('resultado').innerHTML
        }
    }
    isNumeric(num)
    console.log(conta)
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);

}

function calculate(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
}
}