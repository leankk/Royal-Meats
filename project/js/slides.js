// script slides //
let contador = 1;
let img1="project/images-html/banner1.png";
let img2="project/images-html/banner2.png";
let img3="project/images-html/banner3.png";
let img4="project/images-html/banner4.png";
let tempo=2500;
let exibir=setInterval("exibindo()",tempo);

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