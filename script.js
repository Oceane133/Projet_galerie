/* Afficher 1ere image */
let slideIndex = 1;
showSlides(slideIndex);

/* Bouton suivant precedent */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Boucle */
function showSlides(n) {
  let i;
const slides = document.getElementsByClassName("mySlides");
if(n > slides.length) {slideIndex=1}
if(n < 1) {slideIndex=slides.length}
for (i=0; i<slides.length; i++) {
	slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

/* Bouton voir plus */
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Voir plus"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Voir moins"; 
    moreText.style.display = "inline";
  }
}
