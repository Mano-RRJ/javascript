pics = document.getElementById("pics");
createpictureholder();
createaapimages();

function createpictureholder() {
    for (var i = 0; i < 9; i++)  {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder)
    }
}

function createaapimages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i+1);
        AapFoto = document.createElement("img");
        AapFoto.src = "img/monkey" + (i+1) + ".jpg";
        AapFoto.id = (i+1);
        AapFoto.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(AapFoto);
    }
}
function maakFavoriet(id) {
    console.log("maak mij favoriet! het gaat om aap..." + id );
    nietfavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < nietfavoriet.length; i++) {
        nietfavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";
}