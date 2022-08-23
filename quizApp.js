(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> Question ${questionNumber+1}: ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "JavaScript is _______ language.",
        answers: {
          a: "Programming",
          b: "Application",
          c: "None of These",
          d: "Scripting"
        },
        multi: false,
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a valid type of function javascript supports?",
        answers: {
          a: "named function",
          b: "anonymous function",
          c: "both of the above",
          d: "none off the above"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: {
          a: "getIndex()",
          b: "location()",
          c: "indexOf()",
          d: "getLocation()"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of the following is valid data type of JavaScript",
        answers: {
          a: "number",
          b: "void",
          c: "boolean",
          d: "nothing"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        multi: false,
        correctAnswer: "d"
      },
      {
        question: "JavaScript is _______ language.",
        answers: {
          a: "Programming",
          b: "Application",
          c: "None of These",
          d: "Scripting"
        },
        multi: false,
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a valid type of function javascript supports?",
        answers: {
          a: "named function",
          b: "anonymous function",
          c: "both of the above",
          d: "none off the above"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: {
          a: "getIndex()",
          b: "location()",
          c: "indexOf()",
          d: "getLocation()"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of the following is valid data type of JavaScript",
        answers: {
          a: "number",
          b: "void",
          c: "boolean",
          d: "nothing"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        multi: false,
        correctAnswer: "d"
      },
      
      {
        question: "JavaScript is _______ language.",
        answers: {
          a: "Programming",
          b: "Application",
          c: "None of These",
          d: "Scripting"
        },
        multi: false,
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a valid type of function javascript supports?",
        answers: {
          a: "named function",
          b: "anonymous function",
          c: "both of the above",
          d: "none off the above"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        answers: {
          a: "getIndex()",
          b: "location()",
          c: "indexOf()",
          d: "getLocation()"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of the following is valid data type of JavaScript",
        answers: {
          a: "number",
          b: "void",
          c: "boolean",
          d: "nothing"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        multi: false,
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        multi: false,
        correctAnswer: "c"
      }
    ];
    console.log(myQuestions.keys)
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();