let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}
let movimento = "right";
let comida = {
    x:Math.floor(Math.random() * 15 + 1) * box,
    y:Math.floor(Math.random() * 15 + 1) * box
}


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

function apareceComida(){
    context.fillStyle = "gray";
    context.fillRect(comida.x, comida.y, box, box);
};


document.addEventListener("keydown", update);

function update(event){
    if(event.keyCode == 37 && movimento != "right") movimento = "left";
    if(event.keyCode == 38 && movimento != "down") movimento = "up";
    if(event.keyCode == 39 && movimento != "left") movimento = "right";
    if(event.keyCode == 40 && movimento != "up") movimento = "down";
}


function comecarjogo() {
    if(cobra[0].x > 15 * box & movimento == "right") cobra[0].x = 0;
    if(cobra[0].x < 0 & movimento == "left") cobra[0].x = 16 * box;
    if(cobra[0].y > 15 * box & movimento == "down") cobra[0].y = 0;
    if(cobra[0].y <0 & movimento == "up") cobra[0].y = 16 * box;

    for(i = 1; i < cobra.length; i++){
        if(cobra[0].x == cobra[i].x & cobra[0].y == cobra[i].y){
            clearInterval(jogo);
            alert("GAME OVER!");
        }
    }

    criarBG();
    criarCobra();
    apareceComida();

    let cobrax = cobra[0].x;
    let cobray = cobra[0].y;

    if (movimento == "right") cobrax += box;
    if (movimento == "left") cobrax -= box;
    if (movimento == "up") cobray -= box;
    if (movimento == "down") cobray += box;

    if(cobrax != comida.x || cobray != comida.y){
        cobra.pop();
    }
    else{
        comida.x = Math.floor(Math.random() * 15 + 1) * box;
        comida.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    

    let novaCabeca = {
        x:cobrax,
        y:cobray
    };

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(comecarjogo, 100);
