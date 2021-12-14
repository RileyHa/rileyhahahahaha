let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".gnb li a"); //Links inside the Nav bar
  //Adding scroll & mouse event into window element, let function cursor begin
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //Match the left and top values of the custom cursor with the real cursor's X,Y values
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px"; //Must consider the Y value when scrolled down
}

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
      mouseCursor.classList.add("cursor-grow");
      mouseCursor.style.zIndex = "-1";
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
      mouseCursor.classList.remove("cursor-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}