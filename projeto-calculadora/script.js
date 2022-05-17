function insert(num){
    let numero = document.getElementById('resultado').innerHTML; //sempre que clicarmos num botão esta função será chamada para adicionar o elemento no resultado
    document.getElementById('resultado').innerHTML = numero + num;//sempre que for clicado mais de um botão, o elemento será adicionado ao resultado final
}

function clean(){
    document.getElementById('resultado').innerHTML = "";//caso esta função seja chamada, irá "limpar" o resultado, deixando o campo em branco
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.slice(0, -1);//o slice irá fazer uma cópia do elemento original, porém com alterações, o início será o 0, e o outro índice, qual alteração desejamos fazer, no caso retirar o último elemento

}

function calculate(){
    let resultado = document.getElementById('resultado').innerHTML;//quando acionada pela tecla (=) traz este resultado final para esta função
    if(resultado){ //caso tenha algo a ser calculado, a conta será feita a seguir
        document.getElementById('resultado').innerHTML = eval(resultado);//função eval pega uma string e avalia se pode ser uma potencial expressão, caso verdadeiro, executa-a como expressão aritmética
        }
}