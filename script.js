let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let movimento = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra (){
    for(i=0; i < cobra.length; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y, box, box);
    }
}

function comecarjogo() {

    criarBG();
    criarCobra();

    let cobrax = cobra[0].x;
    let cobray = cobra[0].y;

    if (movimento == "right") cobrax += box;
    if (movimento == "left") cobrax -= box;
    if (movimento == "up") cobray -= box;
    if (movimento == "down") cobray += box;

    cobra.pop();

    let novaCabeca = {
        x:cobrax,
        y:cobray
    };

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(comecarjogo, 100);
