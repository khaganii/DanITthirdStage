
document.getElementById("item1").addEventListener('click', myFunc);
document.getElementById("item2").addEventListener('click', myFunc);
document.getElementById("item3").addEventListener('click', myFunc);
document.getElementById("item4").addEventListener('click', myFunc);
document.getElementById("item5").addEventListener('click', myFunc);
document.getElementById("item6").addEventListener('click', myFunc);


function myFunc(){
    let id = this.id;
    for (let i = 1; i <= document.getElementsByName("item").length; i++) {
        document.getElementById("item"+i).className = "menu-items";
    }
    document.getElementById(id).className = "menu-items active";
}