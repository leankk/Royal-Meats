// script slides //
var contador = 1;
var img1="project/images-html/banner1.png";
var img2="project/images-html/banner2.png";
var img3="project/images-html/banner3.png";
var img4="project/images-html/banner4.png";
var tempo=1500;
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
    if(document.getElementById("menubar").className.indexOf("invisivel") == -1)
document.getElementById("menubar").className = 
document.getElementById("menubar").className.replace("visivel", "invisivel");
    else
document.getElementById("menubar").className =
document.getElementById("menubar").className.replace("invisivel", "visivel");
}

 // scripts botões valores//

 function aparece(){

    var w = document.getElementById("aparece1");
    var x = document.getElementById("aparece");
    var y = document.getElementById("aparece2");
    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function aparece1(){

    var w = document.getElementById("aparece");
    var x = document.getElementById("aparece1");
    var y = document.getElementById("aparece2");
    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function aparece2(){

    var w = document.getElementById("aparece");
    var x = document.getElementById("aparece2");
    var y = document.getElementById("aparece1");
    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}
