function updateActiveLink() {
  var links = document.querySelectorAll(".navbar a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var current = document.querySelector(".navbar a.active");
      current.classList.remove("active");
      this.classList.add("active");
    });
  }
}

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

updateActiveLink();

/*=========== SELEÇÃO DE PALAVRAS SOBRE ERP ===============*/

var palavras = [
  "Integração",
  "Automatização",
  "Otimização",
  "Segurança",
  "muito mais!",
];
var index = 0;
var palavraElement = document.getElementById("palavra");
var letraIndex = 0;
var intervalId;

function exibirLetra() {
  palavraElement.textContent += palavras[index].charAt(letraIndex);
  letraIndex++;

  if (letraIndex >= palavras[index].length) {
    clearInterval(intervalId);
    setTimeout(reiniciarLoop, 1000);
  }
}

function reiniciarLoop() {
  letraIndex = 0;
  palavraElement.textContent = "";
  index = (index + 1) % palavras.length;
  intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos
}

// Galera aqui se inicia o loop infinito
intervalId = setInterval(exibirLetra, 100); // Exibe uma nova letra a cada 200 milissegundos

/*=========== DARK LIGHT MODE ===============*/

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*==================================================================*/

function toggleText(element) {
  var nextElement = element.nextElementSibling;
  if (nextElement && nextElement.tagName.toLowerCase() === "p") {
    nextElement.style.display =
      nextElement.style.display === "none" ? "block" : "none";
  }
}

/*==================================================================*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*================= SCROLL REVEAL ==========================================================*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".cols0", { origin: top });
ScrollReveal().reveal(".imgbox, .video-container", { origin: "bottom" });
ScrollReveal().reveal(".heading", { origin: "left" });
ScrollReveal().reveal(".testimonial-wrapper", { origin: "right" });

/*=============================================================================*/

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*=============================================================================*/
//abrir e fechar o menu burger
document.getElementById("menu-btn").addEventListener("click", function () {
  document
    .getElementsByClassName("responsive-menu")[0]
    .classList.toggle("show-menu");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    document
      .getElementsByClassName("responsive-menu")[0]
      .classList.remove("show-menu");
  }
});
