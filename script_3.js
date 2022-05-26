let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function Pyramid(n){
    let y = "#";
    let space = " "

    for (i = 1; i <= n; i++) {
        pad = n - i;
    console.log(space.repeat(pad) + y.repeat(i));
    } 
}

Pyramid(floors);