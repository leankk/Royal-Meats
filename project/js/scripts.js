// script slides //
var contador = 1;
var img1="/project/images-html/banner1.png";
var img2="/project/images-html/banner2.png";
var img3="/project/images-html/banner3.png";
var img4="/project/images-html/banner4.png";
var tempo=3000;
var exibir=setInterval("exibindo()",tempo);

function exibindo()
{
    document.images["slide"].src=eval("img"+contador);
    document.getElementById("v"+contador).checked=true;

    if (contador<4)
        contador++;
    else
        contador=1;
}

function muda(x)
{
    clearInterval(exibir);
    contador=x;
    exibir=setInterval(exibindo(),tempo);
}

// scripts navbar //

function AbreFecha(){
    if(document.getElementById("menubar").className.indexOf("visivel") == -1)
document.getElementById("menubar").className = 
document.getElementById("menubar").className.replace("invisivel", "visivel");
    else
document.getElementById("menubar").className =
document.getElementById("menubar").className.replace("visivel", "invisivel");
}