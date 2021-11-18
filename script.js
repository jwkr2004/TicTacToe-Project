alert("X will go first")

// 0 means that X goes first and 1 means that O goes first.
var move = 0;
var counter = 0;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p9;

function wincheck(a){
    var p = a + "p";
    var b = document.getElementById(p).innerHTML;
    switch(a){
        case "p1":
            p1 = b;
            break;
        case "p2":
            p2 = b;
            break;
        case "p3":
            p3 = b;
            break;
        case "p4":
            p4 = b;
            break;
        case "p5":
            p5 = b;
            break;
        case "p6":
            p6 = b;
            break;
        case "p7":
            p7 = b;
            break;
        case "p8":
            p8 = b;
            break;
        case "p9":
            p9 = b;
            break;
        default:
            break;
    }
    if(p1 == b && p2 == b && p3 == b || p4 == b && p5 == b && p6 == b || p7 == b && p8 == b && p9 == b || p1 == b && p4 == b && p7 == b || p2 == b && p5 == b && p8 == b || p3 == b && p6 == b && p9 == b || p1 == b && p5 == b && p9 == b || p3 == b && p5 == b && p7 == b){
        alert(b + " Has Won");
        location.reload();
    }
    else if(counter == 9){
        alert("The Game Is A Draw.");
        location.reload();
    }



}

//The turn function will run upon one of the nine squares being clicked.
function turn(a){
    var p = a + "p";
    //checks to see if it is X's turn and will change to O's turn upon completion of the turn.
    if(move == 0 && document.getElementById(a).innerText == ""){
        document.getElementById(p).innerText = "X";
        setcolor(a);
        move = 1;
        counter++;
    }
    //checks to see if it is O's turn and will change to X's turn upon completion of the turn.
    else if(move == 1 && document.getElementById(a).innerText == ""){
        document.getElementById(p).innerText = "O"
        setcolor(a);
        move = 0;
        counter++;
    }
    wincheck(a);

}

function hover(a){
    var p = a + "p"
    if(move == 0 && document.getElementById(p).innerText == ""){
        document.getElementById(a).style.backgroundColor="rgb(150, 200, 150)";
    }
    else if(move == 1 && document.getElementById(p).innerHTML == ""){
        document.getElementById(a).style.backgroundColor="rgb(200, 150, 150)";
    }
}

function hoverstop(a){
    var p = a + "p";
    if(document.getElementById(p).innerHTML == ""){
        document.getElementById(a).style.backgroundColor="lightskyblue";
    } 
}

function setcolor(a){
    if(move == 0){
        document.getElementById(a).style.backgroundColor="rgb(5, 161, 44)";
    }
    else if(move == 1){
        document.getElementById(a).style.backgroundColor="rgb(204, 2, 2)";   
    }

}