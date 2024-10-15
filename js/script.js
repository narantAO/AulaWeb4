function copiar(){
    var x = document.getElementById('p1').innerHTML;
    document.getElementById('p2').innerHTML = x;
}

function ligar(){
    document.getElementById('lamp').src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

function desligar(){
    document.getElementById('lamp').src = "https://www.w3schools.com/js/pic_bulboff.gif"
}