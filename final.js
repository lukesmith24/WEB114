
let questions = [
    {
      question: "What was the first commercially released video game?",
      options: ["Pong", "Pac-Man", "Space Invaders", "Donkey Kong"],
      correctAnswer: "Pong"
    },
    {
      question: " What does FPS stand for in gaming?",
      options: ["First Person Sword", "Frames Per Second", "First Person Shooter", "Full Power Sprint"],
      correctAnswer: "First Person Shooter"
    },
    {
      question: "Which console introduced the character Mario to players?",
      options: ["PlayStation", "Xbox", "Sega Genesis", "Nintendo Entertainment System (NES)"],
      correctAnswer: "Nintendo Entertainment System (NES)"
    }
  ];
  
  let currentQuestion = 0;
  let userAnswers = [];
  
  let questionBlock = document.getElementById("questionBlock");
  let nextBtn = document.getElementById("nextBtn");
  let submitBtn = document.getElementById("submitBtn");
  let result = document.getElementById("result");
  let retakeBtn = document.getElementById("retakeBtn");
  
 
  function displayQuestion(index) {
    while (questionBlock.firstChild) {
      questionBlock.removeChild(questionBlock.firstChild);
    }
  
    let q = questions[index];
  
    let questionHeading = document.createElement("h3");
    questionHeading.textContent = (index + 1) + ". " + q.question;
    questionBlock.appendChild(questionHeading);
  
    for (let i = 0; i < q.options.length; i++) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "question" + index;
      input.value = q.options[i];
  
      label.appendChild(input);
  
      let answerText = document.createElement("span");
      answerText.textContent = q.options[i];
      label.appendChild(answerText);
  
      questionBlock.appendChild(label);
      questionBlock.appendChild(document.createElement("br"));
    }
  }
  
  nextBtn.addEventListener("click", function () {
    let choices = document.getElementsByName("question" + currentQuestion);
    let selected = null;
  
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        selected = choices[i].value;
      }
    }
  
    if (selected === null) {
      alert("Please select an answer before moving on.");
      return;
    }
  
    userAnswers.push(selected);
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion(currentQuestion);
    } else {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline";
      let message = document.createElement("p");
        message.textContent = "Click Submit to see your results.";
        questionBlock.appendChild(message);
    }
  });
  

  submitBtn.addEventListener("click", function () {
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
  
    result.textContent = "You got " + score + " out of " + questions.length + " correct.";
    submitBtn.disabled = true;
    retakeBtn.style.display = "inline";
  });

  retakeBtn.addEventListener("click", function() 
  {
    currentQuestion = 0;
    userAnswers = [];
    result.textContent = "";
    submitBtn.disabled = false;
    submitBtn.style.display = "none";
    retakeBtn.style.display = "none";
    nextBtn.style.display = "inline";
    displayQuestion(currentQuestion);
  });

  displayQuestion(currentQuestion);
  