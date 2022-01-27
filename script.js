const MinWidth = 650;//MinWidth to change responsiveness
const imgsBanner = ["imgs/Banner1.png","imgs/Banner2.png","imgs/Banner3.png"];
var imgIndex = 1;
/*
0-> H/S Depilação a laser
1-> H/S Tratamento do corpo
2-> H/S Tratamento de Rosto
3-> H/S Massagem
*/
const tratText = [["A depilação a laser é muito fixe. Mas nada bate a pinça.O meu contabilista vale cada escudo que cobra por causa do tempo que me poupa. Este ano, por exemplo, provavelmente poupou-me cinco a dez anos de prisão."],
                    ["Remova os pêlos de uma forma mais eficiente e mais duradoura que em casa! As nossas técnicas de depilação a cera quente são treinadas para lhe dar o máximo conforto e segurança durante este processo.Cuidados pós depilação com cera quente.No momento após depilação a cera quente deve ser sempre utilizado um óleo pós depilatório para remoção da cera, sendo esta parte integrante do nosso protocolo de depilação. Nos dias seguintes deve ser usado um gel pós depilatório de preferência rico em Aloé Vera. Após a depilação com cera quente não é aconselhado exposição solar prolongada, uma vez que pode originar manchas na pele."],
                    ["Bem tratar o rosto... Dar umas valentes bufetadas"],
                    ["Amolecer os musculos"]];

function setMenu(){
    if(window.innerWidth < MinWidth){//Responsive menu
        navChangeClass("element.classList.toggle(\"responsive\")");
        document.getElementsByClassName("container")[0].style.display = "block";
    }
}

function setTratButtons(){
    let but = document.getElementsByClassName("tratHeaderS")[0];
    but.addEventListener("click",showTratS);
    but = document.getElementsByClassName("tratHeaderH")[0];
    but.addEventListener("click",showTratH);  
}

function setUp() {
    //console.log(window.innerWidth);
    setMenu();
    setTratButtons();
    //setTimeout(changeSlides,1000);
}

function resizeMenu(){
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

function resizeBanner(){
    if(window.innerWidth >= 1250){
        let container = document.getElementsByClassName("slide-container")[0];
        container.style.width = "900px";
        container = document.getElementById("slideShow");
        container.getElementsByTagName("img")[0].classList.add("centerBanner");
    }else if(window.innerWidth < 1249 || window.innerHeight > 1140){
        let container = document.getElementsByClassName("slide-container")[0];
        container.style.width = "80%";
        container = document.getElementById("slideShow");
        container.getElementsByTagName("img")[0].classList.remove("centerBanner");
    }
}

function resize(){
    resizeMenu();
    resizeBanner();
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
    var tabS = document.getElementsByClassName("tratS")[0];
    var tabH = document.getElementsByClassName("tratH")[0];
    tabS.style.display = "inline-block";
    tabH.style.display = "none";

    document.getElementsByClassName("tabS")[0].classList.add("active");
    document.getElementsByClassName("tabH")[0].classList.remove("active");
}

function showTratH(){
    var tabS = document.getElementsByClassName("tratS")[0];
    var tabH = document.getElementsByClassName("tratH")[0];
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

function saberMais(tit,file,img){
    deleteStore();
    
    let str = "tratInfo\\" + file;
    string = "imgs\\" + img;
    localStorage.setItem("tratTitle", tit);
    localStorage.setItem("tratFileText", tratText[file]);
    localStorage.setItem("tratImg", string);
}

function deleteStore(){
    localStorage.removeItem("tratTitle");
    localStorage.removeItem("tratFileText");
    localStorage.removeItem("tratImg");
}

//--------------------------------Tratamentos
function setUpTrat(){

    let title = localStorage.getItem("tratTitle");
    let fileText = localStorage.getItem("tratFileText");
    let imgSrc = localStorage.getItem("tratImg");

    document.title = title + "-Belezza";

    document.getElementsByClassName("title")[0].innerHTML = title;
    document.getElementsByClassName("tratImagem")[0].src=imgSrc;
    document.getElementsByClassName("desc")[0].innerHTML = fileText;

   
}