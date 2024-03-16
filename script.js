let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

let typed = new typed(".auto-input", {
  strings: ["Back-end Developer", "Front-end Developer", "and so on"],
  typedpeed: 100,
  backdpeed: 100,
  backDelay: 2000,
  loop: true,
});
