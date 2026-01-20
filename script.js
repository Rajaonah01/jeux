const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    formMessage.textContent = "Merci ! Votre message a été envoyé.";
    formMessage.style.color = "green";
    form.reset();
});
