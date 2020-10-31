//Determine number of players
let player = [1,2];
//prompt user to enter num of players
let players = prompt('How many players? (2 or 3)');
//check for input
    if (players != null) {
        //if 2 players, disable 3rd button
        if (players == 2) {
            document.getElementsByClassName("p3Draw").disabled = true;
        }
        //if 3 players, enable 3rd button and push player 3 into player array
        if (players == 3) {
            document.getElementsByClassName("p3Draw").disabled = false;
            player.push(3);
        }
    }

console.log(player);



//Game Board

//create arraya of different tiles on the board
let red = [];
let purple = [];
let yellow = [];
let blue = [];
let orange = [];
let green = [];

red = document.getElementsByClassName("cls-1");
//console.log(red);
purple = document.getElementsByClassName("cls-2");
//console.log(purple);
yellow = document.getElementsByClassName("cls-3");
//console.log(yellow);
blue = document.getElementsByClassName("cls-4");
//console.log(blue);
orange = document.getElementsByClassName("cls-5");
//console.log(orange);
green = document.getElementsByClassName("cls-6");
//console.log(green);

let specials = [];
specials = document.getElementsByClassName("cls-7");
//console.log(specials);


//Cards

//create deck of cards
let deck = 
["red", "purple", "yellow", "blue", "orange", "green", 
"red", "purple", "yellow", "blue", "orange", "green",
"red", "purple", "yellow", "blue", "orange", "green",
"red", "purple", "yellow", "blue", "orange", "green",
"red", "purple", "yellow", "blue", "orange", "green",
"red", "purple", "yellow", "blue", "orange", "green",
"red2", "purple2", "yellow2", "blue2", "orange2", "green2",
"QueenFrostine", "Plumpy", "Jolly", "PrincessLolly"
];
//console.log(deck);
shuffle(deck);

//create random shuffle of cards in deck
function shuffle(deck) {
    for(let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let num = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = num;
    }
    //console.log(deck)

    return deck;
}

//create arrays to keep track of the location of each player on the board
let e = [0, 0, 0];
let p = [0, 0, 0];
let w = [0, 0, 0];
let b = [0, 0, 0];
let o = [0, 0, 0];
let g = [0, 0, 0];

//function to draw a card from the deck
function drawCard(move) {
    
    var tile;
    //pull first card from the deck
    let d = deck[0];
    //prints which card is pulled in the console
    console.log(deck[0]);
    var i;

    //which player has which spot in the arrays created before the function
    if (move.getAttribute("class") == "p1Circle") {
        i = 0;
    }
    if (move.getAttribute("class") == "p2Circle") {
        i = 1;
    }
    if (move.getAttribute("class") == "p3Circle") {
        i = 2;
    }

    //what happens if a red card is drawn
    if(d == "red") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#ee1f53";
        document.getElementById("s2").style.backgroundColor = "#fff"; 
        tile = red[e[i]];
        //if player reaches the end of the game board
        if(e[i] >= 9) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        }else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            e[i] = 1+Number(e[i]);
            p[i] = Number(e[i])-1; w[i] = Number(e[i])-1; b[i] = Number(e[i])-1; o[i] = Number(e[i])-1; g[i] = Number(e[i])-1;
        }
    }
    //what happens if a double red is drawn
    else if(d == "red2") {
         //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#ee1f53";
        document.getElementById("s2").style.backgroundColor = "#ee1f53";
        e[i] = 1+Number(e[i]);
        tile = red[e[i]];
        //if player reaches the end of the game board
        if(e[i] >= 9) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            e[i] = 1+Number(e[i]);
            p[i] = Number(e[i])-1; w[i] = Number(e[i])-1; b[i] = Number(e[i])-1; o[i] = Number(e[i])-1; g[i] = Number(e[i])-1;
        }
    }
    //what happens if a purple card is drawn
    else if(d == "purple") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#91278f";
        document.getElementById("s2").style.backgroundColor = "#fff";
        tile = purple[p[i]];
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //if player reaches the end of the game board
        if(p[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //adjust numbers in the array
            p[i] = 1+Number(p[i]);
            e[i] = p[i]; w[i] = Number(p[i])-1; b[i] = Number(p[i])-1; o[i] = Number(p[i])-1; g[i] = Number(p[i])-1;
        }
    }
    //what happens if a double purple card is drawn
    else if(d == "purple2") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#91278f";
        document.getElementById("s2").style.backgroundColor = "#91278f";
        p[i] = 1+Number(p[i]);
        tile = purple[p[i]];
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //if player reaches the end of the game board
        if(p[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //adjust numbers in the array
            p[i] = 1+Number(p[i]);
            e[i] = p[i]; w[i] = Number(p[i])-1; b[i] = Number(p[i])-1; o[i] = Number(p[i])-1; g[i] = Number(p[i])-1;
        }
    }
    //what happens if a yellow card is drawn
    else if(d == "yellow") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#feee4a";
        document.getElementById("s2").style.backgroundColor = "#fff";
        tile = yellow[w[i]];
        //if player reaches the end of the game board
        if(w[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            w[i] = 1+Number(w[i]);
            p[i] = w[i]; e[i] = w[i]; b[i] = Number(w[i])-1; o[i] = Number(w[i])-1; g[i] = Number(w[i])-1;
        }
    }
    //what happens if a double yellow card is drawn
    else if(d == "yellow2") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#feee4a";
        document.getElementById("s2").style.backgroundColor = "#feee4a";
        w[i] = 1+Number(w[i]);
        tile = yellow[w[i]];
        //if player reaches the end of the game board
        if(w[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            w[i] = 1+Number(w[i]);
            p[i] = w[i]; e[i] = w[i]; b[i] = Number(w[i])-1; o[i] = Number(w[i])-1; g[i] = Number(w[i])-1;
        }
    }
    //what happens if a blue card is drawn
    else if(d == "blue") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#4478bc";
        document.getElementById("s2").style.backgroundColor = "#fff";
        tile = blue[b[i]];
        //if player reaches the end of the game board
        if(b[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            b[i] = 1+Number(b[i]);
            p[i] = b[i]; e[i] = b[i]; w[i] = b[i]; o[i] = Number(b[i])-1; g[i] = Number(b[i])-1;
        }
    }
    //what happens if a double blue card is drawn
    else if(d == "blue2") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#4478bc";
        document.getElementById("s2").style.backgroundColor = "#4478bc";
        b[i] = 1+Number(b[i]);
        tile = blue[b[i]];
        //if player reaches the end of the game board
        if(b[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            b[i] = 1+Number(b[i]);
            p[i] = b[i]; e[i] = b[i]; w[i] = b[i]; o[i] = Number(b[i])-1; g[i] = Number(b[i])-1;
        }
    }
    //what happens if a orange card is drawn
    else if(d == "orange") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#f7941d";
        document.getElementById("s2").style.backgroundColor = "#fff";
        tile = orange[o[i]];
        //if player reaches the end of the game board
        if(o[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            o[i] = 1+Number(o[i]);
            p[i] = o[i]; e[i] = o[i]; w[i] = o[i]; b[i] = o[i]; g[i] = Number(o[i])-1;
        }
    }
    //what happens if a double orange card is drawn
    else if(d == "orange2") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#f7941d";
        document.getElementById("s2").style.backgroundColor = "#f7941d";
        o[i] = 1+Number(o[i]);
        tile = orange[o[i]];
        //if player reaches the end of the game board
        if(o[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            o[i] = 1+Number(o[i]);
            p[i] = o[i]; e[i] = o[i]; w[i] = o[i]; b[i] = o[i]; g[i] = Number(o[i])-1;
        }
    }
    //what happens if a green card is drawn
    else if(d == "green") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#10a44a";
        document.getElementById("s2").style.backgroundColor = "#fff";
        tile = green[g[i]];
        //if player reaches the end of the game board
        if(g[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            g[i] = 1+Number(g[i]);
            p[i] = g[i]; e[i] = g[i]; w[i] = g[i]; b[i] = g[i]; o[i] = g[i];
        }
    }
    //what happens if a double green card is drawn
    else if(d == "green2") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#10a44a";
        document.getElementById("s2").style.backgroundColor = "#10a44a";
        g[i] = 1+Number(g[i]);
        tile = green[g[i]];
        //if player reaches the end of the game board
        if(g[i] >= 8) {
            alert("Player " + (i + 1) + " Wins");
            document.getElementsByClassName("p1Draw").disabled = true;
            document.getElementsByClassName("p2Draw").disabled = true;
        } else {
            //move player piece to the correct square on the board
            move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
            move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
            //adjust numbers in the array
            g[i] = 1+Number(g[i]);
            e[i] = g[i]; p[i] = g[i]; w[i] = g[i]; b[i] = g[i]; o[i] = g[i];
        }
    }
    //what happens if a Queen Frostine card is drawn
    else if(d == "QueenFrostine") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#fff";
        document.getElementById("s2").style.backgroundColor = "#f598ab";
        tile = document.getElementById("Queen");
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //adjust numbers in the array
        e[i] = 7; p[i] = 7; w[i] = 6; b[i] = 6; o[i] = 6; g[i] = 6;
    }
    //what happens if a Plumpy card is drawn
    else if(d == "Plumpy") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#fff";
        document.getElementById("s2").style.backgroundColor = "#f598ab";
        tile = document.getElementById("Plumpy");
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //adjust numbers in the array
        e[i] = 2; p[i] = 2; w[i] = 2; b[i] = 1; o[i] = 1; g[i] = 1;
    }
    //what happens if a Jolly card is drawn
    else if(d == "Jolly") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#fff";
        document.getElementById("s2").style.backgroundColor = "#f598ab";
        tile = document.getElementById("Jolly");
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //adjust numbers in the array
        e[i] = 4; p[i] = 3; w[i] = 3; b[i] = 3; o[i] = 3; g[i] = 3;
    }
    //what happens if a Princess Lolly card is drawn
    else if(d == "PrincessLolly") {
        //show the card that is drawn
        document.getElementById("s1").style.backgroundColor = "#fff";
        document.getElementById("s2").style.backgroundColor = "#f598ab";
        tile = document.getElementById("Lolly");
        //move player piece to the correct square on the board
        move.setAttribute("cx", 35+Number(tile.getAttribute("x")));
        move.setAttribute("cy", 35+Number(tile.getAttribute("y")));
        //adjust numbers in the array
        e[i] = 5; p[i] = 5; w[i] = 5; b[i] = 4; o[i] = 4; g[i] = 4;
    }

    console.log(e,p,w,b,o,g);
    //remove top card from the deck
    deck.shift();
    return deck;
}

//called when button is clicked
function playerMove(clicked_id) {
    //if there are 2 players in the game
    if(player.length == 2) {
        //if player 1 draws card, sets up player 1 game piece to move and changes text above card display
        if(clicked_id == "p1turn") {
            move = document.getElementsByClassName("p1Circle")[0];
            document.getElementById("playerDisplay").innerHTML = "Player 1: ";
            //console.log(clicked_id);
        }
        //if player 2 draws card, sets up player 2 game piece to move and changes text above card display
        else if(clicked_id == "p2turn") {
            move = document.getElementsByClassName("p2Circle")[0];
            document.getElementById("playerDisplay").innerHTML = "Player 2: ";
        }
        //alerts players that this is a 2 person game
        else if(clicked_id == "p3turn") {
            alert("There is no third player");
            return 0;
        }
        drawCard(move);
    }
     //if there are 2 players in the game
    if(player.length == 3) {
        //if player 1 draws card, sets up player 1 game piece to move and changes text above card display
        if(clicked_id == "p1turn") {
            move = document.getElementsByClassName("p1Circle")[0];
            document.getElementById("playerDisplay").innerHTML = "Player 1: ";
        }
        //if player 2 draws card, sets up player 2 game piece to move and changes text above card display
        else if(clicked_id == "p2turn") {
            move = document.getElementsByClassName("p2Circle")[0];
            document.getElementById("playerDisplay").innerHTML = "Player 2: ";
        }
        //if player 3 draws card, sets up player 3 game piece to move and changes text above card display
        else if(clicked_id == "p3turn") {
            move = document.getElementsByClassName("p3Circle")[0];
            document.getElementById("playerDisplay").innerHTML = "Player 3: ";
        }
        drawCard(move);
    }
}