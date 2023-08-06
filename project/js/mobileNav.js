let button = document.querySelector("#menu-ham");
let imgBtn = document.getElementById("imagem");
let mobileNav = document.querySelector(".mobile-nav"); 
let btnNav = document.querySelectorAll(".btn-nav");
let out = document.querySelector("main");

button.addEventListener("click", () => {
    openNav();
    if(mobileNav.classList.contains("ativo")){
        imgBtn.src = "project/images-html/botao-fechar.png";
    }else{
        imgBtn.src = "project/images-html/cardapio.png";
    }
});

out.addEventListener("click", () => { mobileNav.classList.remove("ativo"); });

for(let i = 0; i < btnNav.length; i++){
    btnNav[i].addEventListener("click", openNav);
}

function openNav() { mobileNav.classList.toggle("ativo"); }