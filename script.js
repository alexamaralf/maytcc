/* Espaçamento lateral para cards em telas pequenas */
@media (max-width: 600px) {
  .card {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
/* Quiz e FAQ lado a lado */
.quiz-faq-grid {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}
@media (min-width: 900px) {
  .quiz-faq-grid {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
}
/* --- Reset Básico e Configurações Globais --- */
body {
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f9;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* Grid layout igual ao do HTML */
.grid {
  display: grid;
  gap: 1.25rem;
}
@media (min-width:900px) {
  .grid {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
}

/* --- Cabeçalho --- */
header {
  background: linear-gradient(90deg, #4a90e2, #50e3c2);
  color: white;
  text-align: center;
  padding: 3rem 1rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

header h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 3px 18px rgba(74,144,226,0.25), 0 1px 0 #357abd;
  letter-spacing: 1px;
  line-height: 1.1;
  text-transform: uppercase;
}

header p {
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

/* --- Estrutura do Conteúdo Principal --- */
main {
  padding: 2rem 0;
}

.card {
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
  border: 1px solid #e5e7eb;
}

.card h2 {
  margin-top: 0;
  color: #4a90e2;
  font-size: clamp(1.2rem,2.5vw,1.6rem);
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: .5rem;
  margin-bottom: 1rem;
}

/* --- ESTILOS DA NOVA SEÇÃO EDUCATIVA --- */
.education-first {
    padding-top: 2.5rem;
}

.intro-card {
    text-align: center;
    background: white;
    border-radius: 12px;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.intro-card h2 {
    color: #333;
    border: none;
    font-size: 2rem;
}

.methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.method-item {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e9ecef;
    border-left: 4px solid #50e3c2;
}

.method-item h4 {
    margin: 0 0 0.5rem 0;
    color: #4a90e2;
}

.healthy-signs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.healthy-signs h4 {
    margin-top: 0;
}

.healthy-signs ul {
    list-style: none;
    padding: 0;
}

.healthy-signs li {
    margin-bottom: 0.5rem;
}

/* Sinais positivos */
.healthy-signs div:first-child h4 {
    color: #28a745;
}

/* Sinais de alerta */
.healthy-signs div:last-child h4 {
    color: #dc3545;
}

/* --- Estilos do Quiz --- */
.quiz-after {
    padding-top: 1rem; /* Menos padding pois vem depois do conteúdo */
}
.quiz-after #quiz h2 {
    font-size: 1.8rem;
}
.question {
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: var(--card);
}

.question:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.question legend {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--primary);
  padding: 0.5rem 0;
}

.question .option {
  position: relative;
  display: block;
  margin-bottom: 0.8rem;
}

.question label {
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  border: 2px solid var(--border);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--card);
  position: relative;
  overflow: hidden;
}

.question label:hover {
  background: linear-gradient(45deg, rgba(74,144,226,0.05) 0%, rgba(80,227,194,0.05) 100%);
  border-color: var(--primary);
  transform: translateX(4px);
}

.question input[type="radio"] {
  margin-right: 1rem;
  transform: scale(1.2);
  transition: transform 0.2s ease;
}

.question label:active input[type="radio"] {
  transform: scale(0.9);
}

.correct {
  animation: correctAnswer 0.4s ease forwards;
  border-color: var(--ok) !important;
  background: linear-gradient(45deg, rgba(40,167,69,0.1), rgba(40,167,69,0.05)) !important;
}

.incorrect {
  animation: incorrectAnswer 0.4s ease forwards;
  border-color: var(--bad) !important;
  background: linear-gradient(45deg, rgba(220,53,69,0.1), rgba(220,53,69,0.05)) !important;
}

.feedback {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  background: var(--bg);
  transform: translateY(10px);
  opacity: 0;
  animation: slideFeedback 0.3s ease forwards;
}

@keyframes correctAnswer {
  from {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  to {
    transform: translateX(0);
    background: linear-gradient(45deg, rgba(40,167,69,0.1), rgba(40,167,69,0.05));
  }
}

@keyframes incorrectAnswer {
  from {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  to {
    transform: translateX(0);
    background: linear-gradient(45deg, rgba(220,53,69,0.1), rgba(220,53,69,0.05));
  }
}

@keyframes slideFeedback {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* --- Botão --- */
.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn:active::after {
  width: 200px;
  height: 200px;
  opacity: 0;
}

#submitBtn {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(74,144,226,0.2);
}

#submitBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74,144,226,0.3);
}

#retryBtn {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

#retryBtn:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
}

/* --- Resultados e Progresso --- */
#result {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

#progress {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #777;
  text-align: right;
}

/* --- Seções Adicionais --- */
ul {
  padding-left: 1.5rem;
}

ul li {
  margin-bottom: 0.8rem;
}

.myth-fact {
  border-left: 4px solid #50e3c2;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

details {
  margin-bottom: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
}

summary {
  font-weight: 600;
  cursor: pointer;
  color: #333;
}

.card-help {
  background-color: #fff9e6;
  border-left: 5px solid #ffc107;
}
.card-help h2 {
    color: #e6a800;
}
.help-contacts p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
}

/* --- Rodapé --- */
footer {
  text-align: center;
  padding: 2rem 1rem;
  color: #888;
  font-size: 0.9rem;
}
