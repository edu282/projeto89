player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player2_name ;

function send() /* Defina a função send */
{
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2); /* Explicação: parseInt é usado para converter uma strig (palavra ou frase) em Integer (número) */
console.log(actual_answer); /* Chamar a variável no console */


question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row =  question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}