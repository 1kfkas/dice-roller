let testesJogados = 0;
let iniciativasJogadas = 0;
const stateText = document.getElementById("state");
const deviceType = "desktop";

function rollDice() {
    return getRandomNumber(1, 6);
}

function atualizarTestes(){
    testesJogados++;
    document.getElementById("jogados").innerText = "Testes Feitos : "+String(testesJogados);
}

function atualizarIniciativas(){
    iniciativasJogadas++;
    document.getElementById("iniciativas").innerText = "Iniciativas Feitas : "+String(iniciativasJogadas);
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("normal-button").addEventListener("click", function() {
    var num1 = rollDice();
    var num2 = rollDice();

    atualizarTestes();
    stateText.innerText = "";

    if(num1 == num2){
        if(num1 == 6){
            stateText.innerText = "CRÍTICO!";
            stateText.style.color = "#34eb49";
        } else if(num1 == 1){
            stateText.innerText = "DESASTRE!";
            stateText.style.color = "#eb3a34";
        }
    }

    document.getElementById("testes").innerText=String(num1)+", "+String(num2);
});

document.getElementById("vantagem-button").addEventListener("click", function() {
    stateText.innerText="";
    var num1 = rollDice();
    var num2 = rollDice();
    var num3 = rollDice();
    var critical = 0;
    var disaster = 0;

    if(num1 == 6){critical++;} else if(num1 == 1){disaster++;}
    if(num2 == 6){critical++;} else if(num2 == 1){disaster++;}
    if(num3 == 6){critical++;} else if(num3 == 1){disaster++;}

    if(critical >= 2){
        stateText.innerText = "CRÍTICO!";
        stateText.style.color = "#34eb49";
    } else if(disaster >= 3){
        stateText.innerText = "DESASTRE!";
        stateText.style.color = "#eb3a34";
    }
    
    atualizarTestes();

    document.getElementById("testes").innerText=String(num1)+", "+String(num2)+", "+String(num3);
});

document.getElementById("desvantagem-button").addEventListener("click", function() {
    stateText.innerText="";
    var num1 = rollDice();

    atualizarTestes();

    document.getElementById("testes").innerText=String(num1);
});

document.getElementById("iniciativa-button").addEventListener("click", function() {
    var num1 = rollDice();
    var num2 = rollDice();

    atualizarIniciativas();

    document.getElementById("soma").innerText=String(num1)+"+"+String(num2);
    document.getElementById("resultado").innerText=num1+num2;
});
