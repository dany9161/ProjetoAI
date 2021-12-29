const MinWidth = 650;//MinWidth to change responsiveness

function setUp() {
    //console.log(window.innerWidth);
    if(window.innerWidth < MinWidth){//Responsive menu
        navChangeClass("element.classList.toggle(\"responsive\")");
        document.getElementsByClassName("container")[0].style.display = "block";
    }
}

function resize(){
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

function escondeMenu(){
    var items = document.getElementsByClassName("navItem");
    Array.from(items).forEach(function(item){
        item.classList.remove("block");
    });
}

function toggleMenu(container){
    //console.log("toggleMenu");
    var items = document.getElementsByClassName("navItem");
    //console.log(items.length);
    Array.from(items).forEach(function(item){
        item.classList.toggle("block");
    });
    container.classList.toggle("change");
}