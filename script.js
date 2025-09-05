const quizData = [
  { question: "Usar camisinha ajuda a prevenir ISTs?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "Pílula do dia seguinte pode ser usada como anticoncepcional regular?", options: ["Sim", "Não"], answer: "Não" },
  { question: "Consentimento significa que as duas pessoas querem e concordam?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "O método da tabelinha é 100% seguro para prevenir gravidez?", options: ["Sim", "Não"], answer: "Não" },
  { question: "Camisinha feminina é uma opção de prevenção de ISTs?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "DST e IST são a mesma coisa?", options: ["Sim", "Não"], answer: "Não" },
  { question: "É possível engravidar mesmo usando preservativo de forma incorreta?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "É importante fazer exames periódicos mesmo sem sintomas de ISTs?", options: ["Sim", "Não"], answer: "Sim" },
  { question: "Pornografia é um bom guia para aprender sobre sexo seguro?", options: ["Sim", "Não"], answer: "Não" },
  { question: "Comunicação aberta com o parceiro(a) ajuda em relacionamentos saudáveis?", options: ["Sim", "Não"], answer: "Sim" }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");
const feedbackDiv = document.getElementById("feedback");
const progressDiv = document.getElementById("progress");

function loadQuiz() {
  quizContainer.innerHTML = "";
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>
      ${q.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`).join("")}`;
    quizContainer.appendChild(div);
  });
  updateProgress();
}

function updateProgress() {
  const answered = document.querySelectorAll('input[type="radio"]:checked').length;
  progressDiv.textContent = `Perguntas respondidas: ${answered} / ${quizData.length}`;
}

quizContainer.addEventListener("change", () => updateProgress());

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      if (selected.value === q.answer) {
        score++;
        selected.parentElement.style.color = "green";
      } else {
        selected.parentElement.style.color = "red";
      }
    }
  });
  feedbackDiv.textContent = "";
  resultDiv.innerHTML = `🎉 Você acertou ${score} de ${quizData.length} perguntas!`;
});

loadQuiz();
