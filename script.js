var rule0 = " Le forbici tagliano la carta.";
var rule1 = " La carta avvolge il sasso.";
var rule10 = " Il sasso schiaccia lizard.";
var rule11 = " Lizard avvelena Spock.";
var rule100 = " Spock rompe le forbici.";
var rule101 = " Le forbici decapitano lizard.";
var rule110 = " Lizard mangia la carta.";
var rule111 = " La carta invalida Spock.";
var rule1000 = " Spock vaporizza il sasso.";
var rule1001 = " Il sasso rompe le forbici.";
var game_turn = 0;
var user_score = 0;
var opponent_score = 0;

function welcome() {
    var userName = document.getElementById("userName").value;
    var userNameCap = userName.charAt(0).toUpperCase() + userName.slice(1);
    var opponentName = document.getElementById("opponentName").value;
    var opponentNameCap = opponentName.charAt(0).toUpperCase() + opponentName.slice(1);
    var hello = "Ciao " + userNameCap + ". Ti presento " + opponentNameCap + ", il tuo avversario. Buona fortuna!"
    document.getElementById("welcome").innerHTML = hello;
    document.getElementById("turn1").innerHTML = '<select class="game-option" id="userInput-round1"><option value="sasso">sasso</option><option value="carta">carta</option><option value="forbici">forbici</option><option value="lizard">lizard</option><option value="Spock">Spock</option></select> <button class="fa fa-play-circle" id="btn1" onclick="round1()" style="font-size: 100%;"></button>'
}

function round1() {
    document.getElementById("btn0").disabled = true;
    document.getElementById("btn1").disabled = true;
    var choiceR1 = document.getElementById("userInput-round1").value;
    var current_choice = choiceR1;
    play(current_choice);
}

function round2() {
    document.getElementById("btn2").disabled = true;
    var choiceR2 = document.getElementById("userInput-round2").value;
    var current_choice = choiceR2;
    play(current_choice);
}

function round3() {
    document.getElementById("btn3").disabled = true;
    var choiceR3 = document.getElementById("userInput-round3").value;
    var current_choice = choiceR3;
    play(current_choice);
}

function round4() {
    document.getElementById("btn4").disabled = true;
    var choiceR4 = document.getElementById("userInput-round4").value;
    var current_choice = choiceR4;
    play(current_choice);
}

function round5() {
    document.getElementById("btn5").disabled = true;
    var choiceR5 = document.getElementById("userInput-round5").value;
    var current_choice = choiceR5;
    play(current_choice);
}

function play(current_choice) {
    game_turn += 1;
    var userName = document.getElementById("userName").value.toUpperCase();
    var opponentName = document.getElementById("opponentName").value.toUpperCase();
    var available_choice = ["sasso", "carta", "forbici", "lizard", "Spock"];
    var opponent_choice = available_choice[Math.floor(Math.random() * available_choice.length)];
    var random_element = "L'avversario ha scelto " + opponent_choice + ".";
    var result = "";
    var scores = "";
    var cat = "";
    var error0 = "uscita primo blocco di if - punteggio invariato - da personalizzare";
    var error1 = "uscita secondo blocco di if - punteggio all'utente - da personalizzare";
    var error10 = "uscita terzo blocco di if - punteggio all'avversario - da personalizzare";
    var error11 = "uscita switch gestione turni e costruzione dom"
    var tie = "Che peccato, un pareggio. Vuoi provare di nuovo per vincere e ritirare il premio? Aggiorna e gioca!";
    var defeat = "Che peccato, il tuo avversario è stato più fortunato e ritirerà il premio al posto tuo. Vuoi provare a guadagnartelo? Aggiorna e gioca di nuovo!";
    var win = "Complimenti. Hai vinto!";

    if (current_choice === "sasso" && opponent_choice === "sasso") {
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + " Due sassi non fanno un vincitore. Il punteggio resta invariato. ";
    } else if (current_choice === "carta" && opponent_choice === "carta") {
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + " Due fogli di carta non fanno un vincitore. Il punteggio resta invariato. ";
    } else if (current_choice === "forbici" && opponent_choice === "forbici") {
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + " Due forbici non fanno un vincitore. Il punteggio resta invariato. ";
    } else if (current_choice === "lizard" && opponent_choice === "lizard") {
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + " Due lucertole non fanno un vincitore. Il punteggio resta invariato. ";
    } else if (current_choice === "Spock" && opponent_choice === "Spock") {
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + " Non possiamo scegliere entrambi Spock! Il punteggio resta invariato. ";
    } else {
        console.log(error0);
    }

    if (current_choice === "forbici" && opponent_choice === "carta") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule0;
        //return user_score;
    } else if (current_choice === "carta" && opponent_choice === "sasso") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1;
        //return user_score;
    } else if (current_choice === "sasso" && opponent_choice === "lizard") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule10;
        //return user_score;
    } else if (current_choice === "lizard" && opponent_choice === "Spock") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule11;
        //return user_score;
    } else if (current_choice === "Spock" && opponent_choice === "forbici") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule100;
        //return user_score;
    } else if (current_choice === "forbici" && opponent_choice === "lizard") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule101;
        //return user_score;
    } else if (current_choice === "lizard" && opponent_choice === "carta") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule110;
        //return user_score;
    } else if (current_choice === "carta" && opponent_choice === "Spock") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule111;
        //return user_score;
    } else if (current_choice === "Spock" && opponent_choice === "sasso") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1000;
        //return user_score;
    } else if (current_choice === "sasso" && opponent_choice === "forbici") {
        user_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1001;
        //return user_score;
    } else {
        console.log(error1);
    }

    if (opponent_choice === "forbici" && current_choice === "carta") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule0;
        //return opponent_score;
    } else if (opponent_choice === "carta" && current_choice === "sasso") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1;
        //return opponent_score;
    } else if (opponent_choice === "sasso" && current_choice === "lizard") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule10;
        //return opponent_score;
    } else if (opponent_choice === "lizard" && current_choice === "Spock") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule11;
        //return opponent_score;
    } else if (opponent_choice === "Spock" && current_choice === "forbici") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule100;
        //return opponent_score;
    } else if (opponent_choice === "forbici" && current_choice === "lizard") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule101;
        //return opponent_score;
    } else if (opponent_choice === "lizard" && current_choice === "carta") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule110;
        //return opponent_score;
    } else if (opponent_choice === "carta" && current_choice === "Spock") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule111;
        //return opponent_score;
    } else if (opponent_choice === "Spock" && current_choice === "sasso") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1000;
        //return opponent_score;
    } else if (opponent_choice === "sasso" && current_choice === "forbici") {
        opponent_score += 1;
        scores = "Punteggio. " + userName + ": " + user_score + ". " + opponentName + ": " + opponent_score + ".";
        result = random_element + rule1001;
        //return opponent_score;
    } else {
        console.log(error10);
    }

    console.log("utente:" + user_score + "avversario" + opponent_score);
    console.log(game_turn);
    switch (game_turn) {

        case 1:
            console.log("utente:" + user_score + "avversario" + opponent_score);
            document.getElementById("endTurn1").innerHTML = result;
            document.getElementById("scoresTurn1").innerHTML = scores;
            document.getElementById("turn2").innerHTML = '<select class="game-option" id="userInput-round2"><option value="sasso">sasso</option><option value="carta">carta</option><option value="forbici">forbici</option><option value="lizard">lizard</option><option value="Spock">Spock</option></select> <button class="fa fa-play-circle" id="btn2" onclick="round2()" style="font-size: 100%;"></button>'
            break;
        case 2:
            console.log("utente:" + user_score + "avversario" + opponent_score);
            document.getElementById("endTurn2").innerHTML = result;
            document.getElementById("scoresTurn2").innerHTML = scores;
            document.getElementById("turn3").innerHTML = '<select class="game-option" id="userInput-round3"><option value="sasso">sasso</option><option value="carta">carta</option><option value="forbici">forbici</option><option value="lizard">lizard</option><option value="Spock">Spock</option></select> <button class="fa fa-play-circle" id="btn3" onclick="round3()" style="font-size: 100%;"></button>'
            break;
        case 3:
            console.log("utente:" + user_score + "avversario" + opponent_score);
            document.getElementById("endTurn3").innerHTML = result;
            document.getElementById("scoresTurn3").innerHTML = scores;
            document.getElementById("turn4").innerHTML = '<select class="game-option" id="userInput-round4"><option value="sasso">sasso</option><option value="carta">carta</option><option value="forbici">forbici</option><option value="lizard">lizard</option><option value="Spock">Spock</option></select> <button class="fa fa-play-circle" id="btn4" onclick="round4()" style="font-size: 100%;"></button>'
            break;
        case 4:
            console.log("utente:" + user_score + "avversario" + opponent_score);
            document.getElementById("endTurn4").innerHTML = result;
            document.getElementById("scoresTurn4").innerHTML = scores;
            document.getElementById("turn5").innerHTML = '<select class="game-option" id="userInput-round5"><option value="sasso">sasso</option><option value="carta">carta</option><option value="forbici">forbici</option><option value="lizard">lizard</option><option value="Spock">Spock</option></select> <button class="fa fa-play-circle" id="btn5" onclick="round5()" style="font-size: 100%;"></button>'
            break;
        case 5:
            console.log("utente:" + user_score + "avversario" + opponent_score);
            document.getElementById("endTurn5").innerHTML = result;
            document.getElementById("scoresTurn5").innerHTML = scores;
            if (user_score === opponent_score) {
                document.getElementById("endGame").innerHTML = tie;
            } else if (user_score < opponent_score) {
                document.getElementById("endGame").innerHTML = defeat;
            } else if (user_score > opponent_score) {
                document.getElementById("endGame").innerHTML = win;
                document.getElementById("collectPrize").innerHTML = '<button id="prize">Ritira il tuo adorabile premio</button>';
                collect_the_prize();
            }
            break;
        default:
            console.log(error11);
            break;
    }

    function collect_the_prize() {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("prize");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

}