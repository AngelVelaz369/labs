document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const alertContainer = document.getElementById("alertContainer");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      
      event.preventDefault();

      alertContainer.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>¡Mensaje enviado!</strong> Gracias por contactarnos. Te responderemos pronto.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;

      contactForm.reset();
    });
  }
});