// testar o limite de velocidade de uma viia qualquer
var vel;

// Input
vel = window.prompt("Digite um valor para o teste de velocidade: ")

// Condição
if(vel > 60){
    window.alert("Você ultrapassou a velocidade permitida:" + vel + "km/h");
} else {
    window.alert("Você está na velocidade permitida.")
}