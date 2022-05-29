//  get contact button
let button = document.getElementById("button");
let button2 = document.getElementById("link");

// add eventlistener and display modal on click
button.addEventListener('click', function () {
  document.getElementById('modal').style.display = "block";
});

// add eventlistener and display modal on click
button2.addEventListener('click', function () {
  document.getElementById('modal').style.display = "block";
});





// get the close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// click event and call a  close modal function.
closeBtn.addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
})


// get the modal
var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









// Tywriter text

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};