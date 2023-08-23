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
    let w = document.getElementById("aparece1");
    let x = document.getElementById("aparece");
    let y = document.getElementById("aparece2");

    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function aparece1(){
    let w = document.getElementById("aparece");
    let x = document.getElementById("aparece1");
    let y = document.getElementById("aparece2");

    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function aparece2(){
    let w = document.getElementById("aparece");
    let x = document.getElementById("aparece2");
    let y = document.getElementById("aparece1");

    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

// script do botão veja mais no cardapio
function btncardapio(){
    let x = document.getElementById("cardapi");
    let w = document.getElementById("btncardapio");

    if (x.style.display === "none") {
        x.style.display = "block";
        w.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

// script da validacão do cadastro//
function valida() {
    let rnome = document.getElementById("nome");
    let nome = rnome.value;
    let rtel = document.getElementById("tel");
    let tel = rtel.value;
    let remail = document.getElementById("email");
    let email = remail.value;
    let rsenha = document.getElementById("senha");
    let senha = rsenha.value;
    let rcep = document.getElementById("cep");
    let cep = rcep.value;

    if (nome == "") {
        alert('Preencha o campo requerido');
        rnome.focus();
        return false;
    }
    else if (email == "") {
        alert('Preencha o campo requerido');
        remail.focus();
        return false;
    }
    else if (senha == "" || senha.length < 8) {
        alert('Preencha o campo requerido, com no mínimo 8 caracteres');
        rsenha.focus();
        return false;
    }
    else if (isNaN(tel) || (tel == "") || tel.length < 8) {
        alert('Preencha o campo requerido com números');
        rtel.focus();
        return false;
    }
    else if (isNaN (cep) || (cep == "") || cep.length < 8) {
        alert('Preencha o campo requerido com números');
        rcep.focus();
        return false;
    }
    else {
        alert('Cadastro feito com sucesso!');
        rnome.value = "";
        remail.value = "";
        rsenha.value = "";
        rtel.value = "";
        rcep.value = "";
        location.href = "combos.html";
        return true;
    }
}