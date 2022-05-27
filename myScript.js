


//  get contact button
let  button = document.getElementById("button");
let  button2 = document.getElementById("link");

// add eventlistener and display modal on click
button.addEventListener('click', function () {
  document.getElementById('modal').style.display= "block";
});

// add eventlistener and display modal on click
button2.addEventListener('click', function () {
  document.getElementById('modal').style.display= "block";
});





// get the close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// click event and call a  close modal function.
closeBtn.addEventListener("click", function () {
  document.getElementById("modal").style.display= "none";
})


// get the modal
var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
