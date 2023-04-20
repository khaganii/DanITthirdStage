
let items = document.getElementById("menu-ul").getElementsByClassName("menu-items");
let triangles = document.getElementById("menu-ul").getElementsByClassName("triangle-down");
for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            let currentItem = document.getElementsByClassName("active");
            currentItem[0].className = currentItem[0].className.replace(" active", "");
            this.className += " active";
            let currentTriangle = document.getElementsByClassName("tr-active");
            currentTriangle[0].className = currentTriangle[0].className.replace(" tr-active", "");
            this.children[1].className += " tr-active";
        });
}