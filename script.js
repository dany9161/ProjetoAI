const MinWidth = 650;//MinWidth to change responsiveness
const imgsBanner = ["imgs/Banner1.png","imgs/Banner2.png","imgs/Banner3.png"];
var imgIndex = 1;

function setMenu(){
    if(window.innerWidth < MinWidth){//Responsive menu
        navChangeClass("element.classList.toggle(\"responsive\")");
        document.getElementsByClassName("container")[0].style.display = "block";
    }
}

function setTratButtons(){
    let but = document.getElementsByClassName("tratS")[0];
    but.addEventListener("click",showTratS);
    but = document.getElementsByClassName("tratH")[0];
    but.addEventListener("click",showTratH);
}

function setUp() {
    //console.log(window.innerWidth);
    setMenu();
    setTratButtons();
   
    //setTimeout(changeSlides,1000);
}

function resize(){
    //console.log(window.innerWidth);
    if(window.innerWidth < MinWidth){//Responsive menu
        navChangeClass("element.classList.add(\"responsive\")");
        document.getElementsByClassName("container")[0].style.display = "block";
    }else{
        navChangeClass("element.classList.remove(\"responsive\")");
        
        var but = document.getElementsByClassName("container")[0];
        but.style.display = "none";
        but.classList.remove("change");
        escondeMenu();
    }
}

function navChangeClass(todo){
    Array.from(document.getElementsByClassName("navItem")).forEach(element => 
        eval(todo)
    );
}

//quando a pagina passa a ter largura para mostrar o menu, esta função esconde o menu
function escondeMenu(){
    var items = document.getElementsByClassName("navItem");
    Array.from(items).forEach(function(item){
        item.classList.remove("block");
    });
}

//Mostra / esconde o menu (quando está responsivo)
function toggleMenu(container){
    //console.log("toggleMenu");
    var items = document.getElementsByClassName("navItem");
    //console.log(items.length);
    Array.from(items).forEach(function(item){
        item.classList.toggle("block");
    });
    container.classList.toggle("change");
}

function showTratS(){
    var tabS = document.getElementsByClassName("tratS")[1];
    var tabH = document.getElementsByClassName("tratH")[1];
    tabS.style.display = "inline-block";
    tabH.style.display = "none";

    document.getElementsByClassName("tabS")[0].classList.add("active");
    document.getElementsByClassName("tabH")[0].classList.remove("active");
}

function showTratH(){
    console.log("showTratH");
    var tabS = document.getElementsByClassName("tratS")[1];
    var tabH = document.getElementsByClassName("tratH")[1];
    tabH.style.display = "inline-block";
    tabS.style.display = "none";
    document.getElementsByClassName("tabS")[0].classList.remove("active");
    document.getElementsByClassName("tabH")[0].classList.add("active");
}

function changeSlides(){
    console.log("changeSlides");
    let canvas = document.getElementsByClassName("slideShowContent")[0];
    canvas.src=imgsBanner[imgIndex++];
    if(imgIndex == imgsBanner.length){
        imgIndex = 0;
    }

    setTimeout(changeSlides,1000);
}