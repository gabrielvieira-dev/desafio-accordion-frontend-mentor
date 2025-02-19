//perguntas frequentes
const question = document.querySelectorAll('.question')

function questionOpen(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const response = document.getElementById(controls);
    const img = question.querySelector('img');
  
    response.classList.toggle('active');
    const active = response.classList.contains("active");
    question.setAttribute("aria-expanded", active);
    question.classList.toggle('active', active);

    if (active) {
        img.src = '../assets/images/icon-minus.svg';
    } else {
        img.src = '../assets/images/icon-plus.svg';
    }
}

function toggleReply(question) {
    question.addEventListener('click', questionOpen)
}

question.forEach(toggleReply)

