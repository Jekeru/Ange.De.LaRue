//preloader
$(window).on('load', function () {
  /*------------------
  	Preloder
  --------------------*/
  /* $(".circle").delay(400).fadeOut("slow"); */
  $("#preloder").delay(600).fadeOut("slow");
});

/* $(document).ready(function () {
  $('#circle').circleProgress({
    value: 1,
    size: 80,
    fill: {
      gradient: ["darkblue", "darkviolet"]
    }
  });
}); */

//swipe
window.mySwipe = new Swipe(document.getElementById('slider'), {
  startSlide: 0,
  speed: 400,
  //auto: 7000,
  draggable: true,
  continuous: true,
  disableScroll: false,
  stopPropagation: false,
  ignore: ".scroller",
  callback: function (index, elem, dir) {},
  transitionEnd: function (index, elem) {}
});

//nicescroll
$(document).ready(function () {
  $(".about").niceScroll({
    mousescrollstep: 50,
    smoothscroll: true,
    enablescrollonselection: true
  }); // let's do the magic! 😀
});

//overlay
var openclose = 0;
$(".bouton").click(function () {
  if (openclose === 0) {
    $(".about").fadeIn();
    $(".container img").addClass("active");
    //$(".wrapper").addClass("active");

    openclose = 1;
  } else {
    $(".about").fadeOut();
    $(".container img").removeClass("active");
    //$(".wrapper").removeClass("active");
    openclose = 0;
  }
});

//tilt+matchmedia
if (window.matchMedia("(min-width:800px)").matches) {
  // Chargement de jQuery dans un nouvel élément <script> ajouté à la section <head>
  $(document).ready(function () {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      reverse: false, // reverse the tilt direction
      max: 15, // max tilt rotation (degrees)
      startX: 0, // the starting tilt on the X axis, in degrees.
      startY: 0, // the starting tilt on the Y axis, in degrees.
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 1500, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      glare: false, // if it should have a "glare" effect
      "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
      "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      "mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events
      "full-page-listening": false, // If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
      gyroscope: true, // Boolean to enable/disable device orientation detection,
      gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
      gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
      gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
      gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
      gyroscopeSamples: 10 // How many gyroscope moves to decide the starting position.
    });
  });

} else {
  // On ne fait rien de particulier...

}