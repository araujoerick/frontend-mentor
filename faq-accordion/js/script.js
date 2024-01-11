const questions = document.querySelectorAll(".faq-question button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controlsID = question.getAttribute("aria-controls");
  const answer = document.getElementById(controlsID);

  answer.classList.toggle("active");

  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionEvents(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(questionEvents);
