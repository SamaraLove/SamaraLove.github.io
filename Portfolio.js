//from https://tobiasahlin.com/moving-letters/
// Wrap every letter in a span
var textWrapper = document.querySelector('.title-move');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.title-move .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  }).add({
    targets: '.title-move',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });