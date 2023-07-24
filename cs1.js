const quizContainer = document.getElementById('quiz');
const introductionContainer = document.getElementById('introduction');
const startQuizButton = document.getElementById('startQuiz');
const questionContainer = document.getElementById('questionContainer');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 6000000; // 100 minutes (100 minutes * 60 seconds * 1000 milliseconds)

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  document.getElementById('timer').innerText = `Time Left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeLeft -= 1000;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  }
}

function displayQuiz() {
  const question = quizData[currentQuestionIndex];
  const optionsHTML = question.options.map((option, index) => {
    return `<label>
              <input type="radio" name="question${currentQuestionIndex}" value="${index}">
              ${option}
            </label><br>`;
  }).join('');
  questionContainer.innerHTML = `<div class="question">${question.question}</div>
                                  <div class="options">${optionsHTML}</div>`;
  previousButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
  nextButton.innerText = currentQuestionIndex === quizData.length - 1 ? 'Submit' : 'Next';
}

function startQuiz() {
  introductionContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  startTimer();
  displayQuiz();
}

function goToNextQuestion() {
  const selectedOption = document.querySelector(`input[name=question${currentQuestionIndex}]:checked`);
  if (selectedOption) {
    const userAnswer = Number(selectedOption.value);
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
      clearInterval(timerInterval);
      showResult();
    } else {
      displayQuiz();
    }
  }
}

function goToPreviousQuestion() {
  currentQuestionIndex--;
  displayQuiz();
}

function showResult() {
  const totalQuestions = quizData.length;
  const percentageScore = (score / totalQuestions) * 100;
  const resultText = `You scored ${score} out of ${totalQuestions} (${percentageScore.toFixed(2)}%).`;
  const resultDiv = document.createElement('div');
  resultDiv.innerHTML = `<h2>Quiz Result</h2><p>${resultText}</p>`;
  const reviewButton = document.createElement('button');
  reviewButton.innerText = 'Review Answers';
  reviewButton.addEventListener('click', reviewAnswers);
  resultDiv.appendChild(reviewButton);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultContainer.appendChild(resultDiv);
}

function reviewAnswers() {
  resultContainer.innerHTML = '';
  quizData.forEach((question, index) => {
    const userAnswer = Number(document.querySelector(`input[name=question${index}]:checked`));
    const correctAnswer = question.answer;
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `<p>${question.question}</p>`;
    const optionsHTML = question.options.map((option, i) => {
      const optionLabel = document.createElement('label');
      optionLabel.innerHTML = `<input type="radio" name="reviewQuestion${index}" value="${i}" ${userAnswer === i ? 'checked' : 'disabled'}>
                                ${option}`;
      if (i === correctAnswer) {
        optionLabel.style.color = 'green';
      } else if (i === userAnswer) {
        optionLabel.style.color = 'red';
      }
      return optionLabel.outerHTML + '<br>';
    }).join('');
    questionDiv.innerHTML += optionsHTML;
    resultContainer.appendChild(questionDiv);
  });
}

startQuizButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', goToNextQuestion);
previousButton.addEventListener('click', goToPreviousQuestion);
