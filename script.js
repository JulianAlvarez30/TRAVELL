function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

document.querySelectorAll('.carousel').forEach(carousel => {
  let scrollAmount = 0;
  let interval = setInterval(autoScroll, 3000);

  function autoScroll() {
    scrollAmount += 300;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', () => interval = setInterval(autoScroll, 3000));
});

function handleSubmit(event) {
  event.preventDefault();
  alert("¡Gracias por tu reserva! Nos pondremos en contacto pronto.");
  return false;
}



