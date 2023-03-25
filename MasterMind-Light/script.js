var colonne = 1;
var ligne = 1;
let proposition=[];
let reponse = [];
let couleur;
let rightPlacedColors = 0;
let badPlacedColors = 0;
let nbCoups = 0;
let nbCoupsMax = 12;
let propositionTemp=[];
let score = 0;
let lastAction=false;
let combinedLastAction=[];
let verifCombinedAction=[];
let compteurVerif = -1;

let Histo=[];


function historique(){
    document.getElementById("historique").innerHTML+="<ul>";
    for (var i=0; i < Histo.length; i++) {
        document.getElementById("historique").innerHTML+="<li>"+Histo[i]+"</li>";
    }
    document.getElementById("historique").innerHTML+="</ul>";
}

historique();

document.addEventListener('DOMContentLoaded', function() {
    entierAleatoire(1,4);
});


function changerCase(){
    verifCombinedAction.push(true);
    compteurVerif =compteurVerif+1;


if(combinedLastAction[compteurVerif] == verifCombinedAction[compteurVerif]){
    console.log(combinedLastAction[compteurVerif]);
    console.log(verifCombinedAction[compteurVerif]);
    console.log("c bon");


    propositionTemp=proposition;
    rightPlacedColors = 0;
    badPlacedColors = 0;
    proposition.push(bgcolor);
    colonne = colonne + 1;
    


    if(nbCoups != nbCoupsMax){

    if (colonne >= 5){
        var isEqual = proposition.toString() === reponse.toString();
        if(isEqual == true){
            console.log("BONNE REPONSE VOUS AVEZ GAGNE");
            alert('Vous avez trouvé la bonne combinaison ! Cliquez sur recommencer pour relancer une partie');          
            
        }
        else{
            console.log("mauvaise réponse... t'es nul");
            for (i = 0; i<reponse.length; i++){
                console.log("i "+i);

                if(proposition.includes(reponse[i])){
                    badPlacedColors = badPlacedColors +1;
                    score=score+1;
                }

                if(proposition[i]==reponse[i]){
                    console.log("LA COULEUR "+i+" EST A LA BONNE PLACE");
                    rightPlacedColors = rightPlacedColors + 1;
                    console.log("Vous avez "+rightPlacedColors+" couleurs à la bonne place");
                    document.getElementById("rightPlacedColors").innerHTML="Vous avez "+rightPlacedColors+" couleurs à la bonne place";
                }
            }
            Histo.push("Couleurs bien placés : "+rightPlacedColors);
            
            if(rightPlacedColors >= 1){
                badPlacedColors = badPlacedColors - rightPlacedColors;
                score = score - rightPlacedColors;
            }

            
            console.log("Couleurs présentes mais mal placées : "+badPlacedColors); 
            document.getElementById("badPlacedColors").innerHTML="Couleurs présentes mais mal placées : "+badPlacedColors;
            Histo.push("Couleurs mal placés : "+badPlacedColors);
            historique();

        }
        


        ligne = ligne+1;
        colonne = 1;
        console.log(proposition);
        proposition=[];
        Histo=[];
        nbCoups = nbCoups + 1;
        verifCombinedAction = [];
        combinedLastAction = [];
        compteurVerif = -1;
    }
    }

    else{
        alert("GAME OVER, VOUS N'AVEZ PLUS DE COUPS DISPONIBLES");
        
    }


}
else{
    alert("euh tu peux choisir une couleur stp ?");
    console.log("tu peux choisir une couleur stp ?");
    verifCombinedAction.pop();
    compteurVerif = compteurVerif-1;
}



   
     
}

let bgcolor;

function changeBackgroundColorBlue() {
    var elements = document.querySelectorAll('.case.colonne'+colonne+'.ligne'+ligne);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'blue';
    }
bgcolor=1;
lastAction = true;
combinedLastAction.push(lastAction);
}

function changeBackgroundColorRed() {
    var elements = document.querySelectorAll('.case.colonne'+colonne+'.ligne'+ligne);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'red';
    }
    bgcolor=2;
    lastAction = true;
    combinedLastAction.push(lastAction);
}

function changeBackgroundColorGreen() {
    var elements = document.querySelectorAll('.case.colonne'+colonne+'.ligne'+ligne);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'green';
    }
    bgcolor=3;
    lastAction = true;
    combinedLastAction.push(lastAction);
}

function changeBackgroundColorYellow() {
    var elements = document.querySelectorAll('.case.colonne'+colonne+'.ligne'+ligne);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'yellow';
    }
    bgcolor=4;
    lastAction = true;
    combinedLastAction.push(lastAction);
}

function entierAleatoire(min, max)
{
        for(var i=1 ; i<5 ;i++){
        var entier = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(entier);
        reponse.push(entier);


        if(entier==1){
            couleur="blue";
            var elements = document.querySelectorAll('.case.reponse'+i);
            for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = couleur;
            }

        }


        if(entier==2){
            couleur="red";
            var elements = document.querySelectorAll('.case.reponse'+i);
            for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = couleur;
            }

        }


        if(entier==3){
            couleur="green";
            var elements = document.querySelectorAll('.case.reponse'+i);
            for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = couleur;
            }

        }


        if(entier==4){
            couleur="yellow";
            var elements = document.querySelectorAll('.case.reponse'+i);
            for (var j = 0; j < elements.length; j++) {
            elements[j].style.backgroundColor = couleur;
            }

        }
    }
    console.log(reponse);



}
