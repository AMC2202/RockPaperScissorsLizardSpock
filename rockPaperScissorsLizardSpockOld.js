
var game_turn = 0;


function welcome() {
    var userName = document.getElementById("userName").value;
    var opponentName = document.getElementById("opponentName").value;
    var hello = "Ciao " + userName + ". Ti presento " + opponentName + ", il tuo avversario. Buona fortuna!"
    document.getElementById("welcome").innerHTML = hello;
    document.getElementById("turn1").innerHTML = '<input type="text" id="userInput-round1" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round1()" style="font-size: 220%;"></i>'
}

function round1() {
    var choiceR1 = document.getElementById("userInput-round1").value;
    var current_choice = choiceR1;
    play(current_choice);
}

function round2() {
    var choiceR2 = document.getElementById("userInput-round2").value;
    var current_choice = choiceR2;
    play(current_choice);
}

function round3() {
    var choiceR3 = document.getElementById("userInput-round3").value;
    var current_choice = choiceR3;
    play(current_choice);
}

function round4() {
    var choiceR4 = document.getElementById("userInput-round4").value;
    var current_choice = choiceR4;
    play(current_choice);
}

function round5() {
    var choiceR5 = document.getElementById("userInput-round5").value;
    var current_choice = choiceR5;
    play(current_choice);
}


function play(current_choice) {
    game_turn += 1;
    var userName = document.getElementById("userName").value;
    var opponentName = document.getElementById("opponentName").value;
    var available_choice = ["sasso", "carta", "forbici", "lizard", "Spock"];
    var opponent_choice = available_choice[Math.floor(Math.random() * available_choice.length)];
    var random_element = "L'avversario ha scelto " + opponent_choice + ". ";
    var user_score = 0;
    var opponent_score = 0;
    var result = "";
    var scores = "";
    var drawingACat = "";
    var error = "Il tuo avversario si è occultato per sfuggire ai nostri radar. Mentre potenziamo i nostri server, vuoi prenderti un caffè e tornare più tardi?";
        
    if (opponent_choice == "sasso") {

        switch(current_choice) {
            case "sasso":
                opponent_score = opponent_score + 0;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Due sassi non fanno un vincitore. Il punteggio resta invariato. " + scores;
                //return opponent_score, user_score;
                break;
            case "carta":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "La carta avvolge il sasso. " + scores;
                //return opponent_score, user_score;
                break;
            case "forbici":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Il sasso rompe le forbici. " + scores;
                //return opponent_score, user_score;
                break;
            case "lizard":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Il sasso uccide lizard. " + scores;
                //return opponent_score, user_score;
                break;
            case "Spock":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Spock vaporizza il sasso. ";
                //return opponent_score, user_score;
                break;
            default:
                alert("L'espansione attuale si limita a lizard e Spock. In attesa della prossima espansione di Sam Kass e Karen Bryla, il punteggio resta invariato");
                break;
        }
        

        /*document.getElementById("endTurn1").innerHTML = result;
        document.getElementById("scores").innerHTML = scores;*/
        
        console.log(game_turn);
        console.log(opponent_score);
        console.log(user_score);
        /*console.log(typeof game_turn);
        while (game_turn < 5) {
            game_turn = game_turn + 1;*/
            /*console.log("this is n." + game_turn + "turn");
            console.log(typeof game_turn);*/
            /*document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;*/
         
            switch (game_turn) {
                case 1:
   
                    document.getElementById("endTurn1").innerHTML = result;
                    document.getElementById("scoresTurn1").innerHTML = scores;
                    document.getElementById("turn2").innerHTML = '<input type="text" id="userInput-round2" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round2()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round2").value;
                    console.log("round2" + choice);*/
                    break;
                case 2:
           
                    document.getElementById("endTurn2").innerHTML = result;
                    document.getElementById("scoresTurn2").innerHTML = scores;
                    document.getElementById("turn3").innerHTML = '<input type="text" id="userInput-round3" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round3()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round3").value;
                    console.log("round3" + choice);*/
                    break;
                case 3:
                    document.getElementById("endTurn3").innerHTML = result;
                    document.getElementById("scoresTurn3").innerHTML = scores;
                    document.getElementById("turn4").innerHTML = '<input type="text" id="userInput-round4" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round4()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round4").value;
                    console.log("round4" + choice);*/
                    break;
                case 4:
                    document.getElementById("endTurn4").innerHTML = result;
                    document.getElementById("scoresTurn4").innerHTML = scores;
                    document.getElementById("turn5").innerHTML = '<input type="text" id="userInput-round5" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round5()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round5").value;
                    console.log("round5" + choice);*/
                    break;
                case 5:
                    document.getElementById("endTurn5").innerHTML = result;
                    document.getElementById("scoresTurn5").innerHTML = scores;
                    console.log("punteggio utente" + user_score);
                    console.log("punteggio avversario" + opponent_score);
                    /*final_user_scores = us_turn1 + us_turn2;
                    final_opponent_scores = os_turn1 + os_turn2;
                    console.log(final_opponent_scores);
                    console.log(final_user_scores);
                    var final_scores = "Punteggio finale. Avversario: " + final_opponent_scores + ". Utente: " + final_user_scores;
                    document.getElementById("endGame").innerHTML = final_scores;*/
                    break;
                default:
                    alert("Un disgregatore ha colpito il tabellone dei punti. Mentre solleviamo gli scudi, ti andrebbe di aggiornare la pagina e riprovare?")
            }
                             

    } else if (opponent_choice == "carta") {

        switch(current_choice) {
            case "sasso":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "La carta avvolge il sasso. " + scores;
                //return opponent_score, user_score;
                break;
            case "carta":
                opponent_score = opponent_score + 0;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Due fogli di carta non fanno un vincitore. Il punteggio resta invariato. " + scores;
                //return opponent_score, user_score;
                break;
            case "forbici":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Le forbici tagliano la carta. " + scores;
                //return opponent_score, user_score;
                break;
            case "lizard":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Lizard mangia la carta. " + scores;
                //return opponent_score, user_score;
                break;
            case "Spock":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "La carta invalida Spock. ";
                //return opponent_score, user_score;
                break;
            default:
                alert("L'espansione attuale si limita a lizard e Spock. In attesa della prossima espansione di Sam Kass e Karen Bryla, il punteggio resta invariato");
                break;
        }
        /*document.getElementById("endTurn1").innerHTML = result;
        document.getElementById("scores").innerHTML = scores;*/
        console.log(game_turn);
        console.log(opponent_score);
        console.log(game_turn);
        console.log(typeof game_turn);

            /*console.log("this is n." + game_turn + "turn");
            console.log(typeof game_turn);*/
            /*document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;*/
     
            switch (game_turn) {
                case 1:
                    
                    document.getElementById("endTurn1").innerHTML = result;
                    document.getElementById("scoresTurn1").innerHTML = scores;
                    document.getElementById("turn2").innerHTML = '<input type="text" id="userInput-round2" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round2()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round2").value;
                    console.log("round2" + choice);*/
                    break;
                case 2:
               
                    document.getElementById("endTurn2").innerHTML = result;
                    document.getElementById("scoresTurn2").innerHTML = scores;
                    document.getElementById("turn3").innerHTML = '<input type="text" id="userInput-round3" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round3()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round3").value;
                    console.log("round3" + choice);*/
                    break;
                case 3:
                    document.getElementById("endTurn3").innerHTML = result;
                    document.getElementById("scoresTurn3").innerHTML = scores;
                    document.getElementById("turn4").innerHTML = '<input type="text" id="userInput-round4" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round4()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round4").value;
                    console.log("round4" + choice);*/
                    break;
                case 4:
                    document.getElementById("endTurn4").innerHTML = result;
                    document.getElementById("scoresTurn4").innerHTML = scores;
                    document.getElementById("turn5").innerHTML = '<input type="text" id="userInput-round5" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round5()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round5").value;
                    console.log("round5" + choice);*/
                    break;
                case 5:
                    document.getElementById("endTurn5").innerHTML = result;
                    document.getElementById("scoresTurn5").innerHTML = scores;
                    console.log("punteggio utente" + user_score);
                    console.log("punteggio avversario" + opponent_score);
                    /*final_user_scores = us_turn1 + us_turn2;
                    final_opponent_scores = os_turn1 + os_turn2;
                    console.log(final_opponent_scores);
                    console.log(final_user_scores);
                    var final_scores = "Punteggio finale. Avversario: " + final_opponent_scores + ". Utente: " + final_user_scores;
                    document.getElementById("endGame").innerHTML = final_scores;*/
                    break;
                default:
                    alert("Un disgregatore ha colpito il tabellone dei punti. Mentre solleviamo gli scudi, ti andrebbe di aggiornare la pagina e riprovare?")
            }
        

    } else if (opponent_choice == "forbici") {

        switch(current_choice) {
            case "sasso":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Il sasso rompe le forbici. " + scores;
                //return opponent_score, user_score;
                break;
            case "carta":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Le forbici tagliano la carta. " + scores;
                //return opponent_score, user_score;
                break;
            case "forbici":
                opponent_score = opponent_score + 0;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Due forbici non fanno un vincitore. Il punteggio resta invariato. " + scores;
                //return opponent_score, user_score;
                break;
            case "lizard":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Le forbici decapitano lizard. " + scores;
                //return opponent_score, user_score;
                break;
            case "Spock":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Spock rompe le forbici. ";
                
                //return opponent_score, user_score;break;
            default:
                alert("L'espansione attuale si limita a lizard e Spock. In attesa della prossima espansione di Sam Kass e Karen Bryla, il punteggio resta invariato");
                break;
        }
        /*document.getElementById("endTurn1").innerHTML = result;
        document.getElementById("scores").innerHTML = scores;*/
        console.log(game_turn);
        console.log(opponent_score);
        console.log(game_turn);
        console.log(typeof game_turn);

            /*console.log("this is n." + game_turn + "turn");
            console.log(typeof game_turn);*/
            /*document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;*/
      
            switch (game_turn) {
                case 1:
                   
                    document.getElementById("endTurn1").innerHTML = result;
                    document.getElementById("scoresTurn1").innerHTML = scores;
                    document.getElementById("turn2").innerHTML = '<input type="text" id="userInput-round2" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round2()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round2").value;
                    console.log("round2" + choice);*/
                    break;
                case 2:
             
                    document.getElementById("endTurn2").innerHTML = result;
                    document.getElementById("scoresTurn2").innerHTML = scores;
                    document.getElementById("turn3").innerHTML = '<input type="text" id="userInput-round3" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round3()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round3").value;
                    console.log("round3" + choice);*/
                    break;
                case 3:
                    document.getElementById("endTurn3").innerHTML = result;
                    document.getElementById("scoresTurn3").innerHTML = scores;
                    document.getElementById("turn4").innerHTML = '<input type="text" id="userInput-round4" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round4()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round4").value;
                    console.log("round4" + choice);*/
                    break;
                case 4:
                    document.getElementById("endTurn4").innerHTML = result;
                    document.getElementById("scoresTurn4").innerHTML = scores;
                    document.getElementById("turn5").innerHTML = '<input type="text" id="userInput-round5" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round5()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round5").value;
                    console.log("round5" + choice);*/
                    break;
                case 5:
                    document.getElementById("endTurn5").innerHTML = result;
                    document.getElementById("scoresTurn5").innerHTML = scores;
                    console.log("punteggio utente" + user_score);
                    console.log("punteggio avversario" + opponent_score);
                    /*final_user_scores = us_turn1 + us_turn2;
                    final_opponent_scores = os_turn1 + os_turn2;
                    console.log(final_opponent_scores);
                    console.log(final_user_scores);
                    var final_scores = "Punteggio finale. Avversario: " + final_opponent_scores + ". Utente: " + final_user_scores;
                    document.getElementById("endGame").innerHTML = final_scores;*/
                    break;
                default:
                    alert("Un disgregatore ha colpito il tabellone dei punti. Mentre solleviamo gli scudi, ti andrebbe di aggiornare la pagina e riprovare?")
            }
        

    } else if (opponent_choice == "lizard") {

        switch(current_choice) {
            case "sasso":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Il sasso uccide lizard. " + scores;
                //return opponent_score, user_score;
                break;
            case "carta":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Lizard mangia la carta. " + scores;
                //return opponent_score, user_score;
                break;
            case "forbici":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Le forbici decapitano lizard. " + scores;
                //return opponent_score, user_score;
                break;
            case "lizard":
                opponent_score = opponent_score + 0;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Due lucertole prendono il sole, ma non fanno un vincitore. Il punteggio resta invariato. " + scores;
                //return opponent_score, user_score;
                break;
            case "Spock":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Lizard avvelena Spock. " + scores;
                //return opponent_score, user_score;
                break;
            default:
                alert("L'espansione attuale si limita a lizard e Spock. In attesa della prossima espansione di Sam Kass e Karen Bryla, il punteggio resta invariato");
                break;
        }
        /*document.getElementById("endTurn1").innerHTML = result;
        document.getElementById("scores").innerHTML = scores;*/
        console.log(game_turn);
        console.log(opponent_score);
        console.log(game_turn);
        console.log(typeof game_turn);

            /*console.log("this is n." + game_turn + "turn");
            console.log(typeof game_turn);*/
            /*document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;*/
        
            
            switch (game_turn) {
                case 1:
              
                    document.getElementById("endTurn1").innerHTML = result;
                    document.getElementById("scoresTurn1").innerHTML = scores;
                    document.getElementById("turn2").innerHTML = '<input type="text" id="userInput-round2" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round2()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round2").value;
                    console.log("round2" + choice);*/
                    break;
                case 2:
                  
                    document.getElementById("endTurn2").innerHTML = result;
                    document.getElementById("scoresTurn2").innerHTML = scores;
                    document.getElementById("turn3").innerHTML = '<input type="text" id="userInput-round3" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round3()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round3").value;
                    console.log("round3" + choice);*/
                    break;
                case 3:
                    document.getElementById("endTurn3").innerHTML = result;
                    document.getElementById("scoresTurn3").innerHTML = scores;
                    document.getElementById("turn4").innerHTML = '<input type="text" id="userInput-round4" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round4()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round4").value;
                    console.log("round4" + choice);*/
                    break;
                case 4:
                    document.getElementById("endTurn4").innerHTML = result;
                    document.getElementById("scoresTurn4").innerHTML = scores;
                    document.getElementById("turn5").innerHTML = '<input type="text" id="userInput-round5" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round5()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round5").value;
                    console.log("round5" + choice);*/
                    break;
                case 5:
                    document.getElementById("endTurn5").innerHTML = result;
                    document.getElementById("scoresTurn5").innerHTML = scores;
                    console.log("punteggio utente" + user_score);
                    console.log("punteggio avversario" + opponent_score);
                    /*final_user_scores = us_turn1 + us_turn2;
                    final_opponent_scores = os_turn1 + os_turn2;
                    console.log(final_opponent_scores);
                    console.log(final_user_scores);
                    var final_scores = "Punteggio finale. Avversario: " + final_opponent_scores + ". Utente: " + final_user_scores;
                    document.getElementById("endGame").innerHTML = final_scores;*/
                    break;
                default:
                    alert("Un disgregatore ha colpito il tabellone dei punti. Mentre solleviamo gli scudi, ti andrebbe di aggiornare la pagina e riprovare?")
            }
        

    } else if (opponent_choice == "Spock") {

        switch(current_choice) {
            case "sasso":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Spock vaporizza il sasso. " + scores;
                //return opponent_score, user_score;
                break;
            case "carta":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "La carta invalida Spock. " + scores;
                //return opponent_score, user_score;
                break;
            case "forbici":
                opponent_score = opponent_score + 1;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Spock rompe le forbici. " + scores;
                //return opponent_score, user_score;
                break;
            case "lizard":
                opponent_score = opponent_score + 0;
                user_score = user_score + 1;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Lizard avvelena Spock. " + scores;
                //return opponent_score, user_score;
                break;
            case "Spock":
                opponent_score = opponent_score + 0;
                user_score = user_score + 0;
                scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
                result = random_element + "Non possiamo scegliere entrambi Spock! Il punteggio resta invariato. " + scores;
                //return opponent_score, user_score;
                break;
            default:
                alert("L'espansione attuale si limita a lizard e Spock. In attesa della prossima espansione di Sam Kass e Karen Bryla, il punteggio resta invariato");
                break;
        }
        /*document.getElementById("endTurn1").innerHTML = result;
        document.getElementById("scores").innerHTML = scores;*/
        console.log(game_turn);
        console.log(opponent_score);
        console.log(game_turn);
        console.log(typeof game_turn);
   
            /*console.log("this is n." + game_turn + "turn");
            console.log(typeof game_turn);*/
            /*document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;*/
          
            switch (game_turn) {
                case 1:
                    
                    document.getElementById("endTurn1").innerHTML = result;
                    document.getElementById("scoresTurn1").innerHTML = scores;
                    document.getElementById("turn2").innerHTML = '<input type="text" id="userInput-round2" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round2()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round2").value;
                    console.log("round2" + choice);*/
                    break;
                case 2:
                    
                    document.getElementById("endTurn2").innerHTML = result;
                    document.getElementById("scoresTurn2").innerHTML = scores;
                    document.getElementById("turn3").innerHTML = '<input type="text" id="userInput-round3" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round3()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round3").value;
                    console.log("round3" + choice);*/
                    break;
                case 3:
                    document.getElementById("endTurn3").innerHTML = result;
                    document.getElementById("scoresTurn3").innerHTML = scores;
                    document.getElementById("turn4").innerHTML = '<input type="text" id="userInput-round4" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round4()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round4").value;
                    console.log("round4" + choice);*/
                    break;
                case 4:
                    document.getElementById("endTurn4").innerHTML = result;
                    document.getElementById("scoresTurn4").innerHTML = scores;
                    document.getElementById("turn5").innerHTML = '<input type="text" id="userInput-round5" placeholder="es. sasso"><i class="fa fa-play-circle" onclick="round5()" style="font-size: 220%;"></i>'
                    /*choice = document.getElementById("userInput-round5").value;
                    console.log("round5" + choice);*/
                    break;
                case 5:
                    document.getElementById("endTurn5").innerHTML = result;
                    document.getElementById("scoresTurn5").innerHTML = scores;
                    console.log("punteggio utente" + user_score);
                    console.log("punteggio avversario" + opponent_score);

                    break;
                default:
                    alert("Un disgregatore ha colpito il tabellone dei punti. Mentre solleviamo gli scudi, ti andrebbe di aggiornare la pagina e riprovare?")
            }
        

    } else {
        document.getElementById("error").innerHTML = error;
    }
    /*if(game_turn === 5) {
        console.log(game_turn);
        document.write("Punteggio finale. User: " + us_turn1 + us_turn2);
        document.write("Punteggio finale. Opponent: " + os_turn1 + os_turn2);
        final_user_scores = us_turn1 + us_turn2;
        final_opponent_scores = os_turn1 + os_turn2;
        console.log(final_opponent_scores);
        console.log(final_user_scores);
        var final_scores = "Punteggio finale. Avversario: " + final_opponent_scores + ". Utente: " + final_user_scores;
        document.getElementById("endGame").innerHTML = final_scores;
    }*/
}