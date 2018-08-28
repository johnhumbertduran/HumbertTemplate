// @ts-nocheck
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('modIm');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (i = 0; i < img.length; i++) {

    img[i].onclick = function () {

        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }

}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}