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

function send() 
{
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

/* Criar uma variável question_turn para quem faz a pergunta */
question_turn="player1"
/* Criar uma variável answer_turn para quem faz a pergunta */
answer_turn="player2"
function check() /* Nomear a função check */
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer==actual_answer)	/* Se a resposta obtida for == a resposta real então ... */
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1; /* Incrementar 1 ponto para o jogador 1 */
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else /* Explicação: Se não */
		{
			player2_score = player2_score +1; /* Incrementar 1 ponto para o jogador 2 */
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	/* Explicação: Condição para troca de turno */
	if( question_turn== "player1") /* Se o turno da pergunta foi do jogador 1 então ... */
	{
		question_turn = "player2" /* o turno da pergunta agora é do Jogador2 */
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else  /* Explicação: Se não */
	{
		question_turn = "player1" /* o turno da pergunta agora é do Jogador 1 */
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn== "player1") /* Se o turno da resposta foi do jogador 1 então ... */
	{
		answer_turn = "player2" /* o turno da resposta agora é do Jogador 2 */
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1" /* o turno da resposta agora é do Jogador 1 */
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = ""; /* Atualize com o id= output */
	/* Quando o botão Checar for pressionado, a seção em que a palavra
pergunta está, a input box e o botão Checar, que estão presentes,
serão removidos. Para isso, atualizaremos o elemento HTML
id=”output” com um valor vazio, isso resultará na remoção da
palavra pergunta, da input box e do botão Check.
 */
}