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
const progressDiv = document.getElementById("progress");

function loadQuiz() {
  quizContainer.innerHTML = "";
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>
      ${q.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`).join("")}`;
    quizContainer.appendChild(div);
  });
  updateProgress();
}

function updateProgress() {
  const totalQuestions = quizData.length;
  const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
  progressDiv.textContent = `Progresso: ${answeredQuestions} / ${totalQuestions}`;
}

quizContainer.addEventListener("change", updateProgress);

submitBtn.addEventListener("click", () => {
  let score = 0;

  quizData.forEach((q, index) => {
    const selectedRadio = document.querySelector(`input[name="q${index}"]:checked`);
    const labels = document.querySelectorAll(`input[name="q${index}"]`);

    labels.forEach(labelInput => {
        labelInput.parentElement.classList.remove('correct', 'incorrect');
    });

    if (selectedRadio) {
      if (selectedRadio.value === q.answer) {
        score++;
        selectedRadio.parentElement.classList.add("correct");
      } else {
        selectedRadio.parentElement.classList.add("incorrect");
        // Mostra qual seria a resposta correta
        labels.forEach(labelInput => {
            if (labelInput.value === q.answer) {
                labelInput.parentElement.classList.add("correct");
            }
        });
      }
    }
  });

  resultDiv.innerHTML = `🎉 Você acertou ${score} de ${quizData.length} perguntas!`;
  if (score === quizData.length) {
    resultDiv.innerHTML += "<br>Parabéns, você sabe muito sobre o assunto!";
  } else {
    resultDiv.innerHTML += "<br>Continue aprendendo e se cuidando!";
  }
});

// Carrega o quiz ao iniciar a página
loadQuiz();