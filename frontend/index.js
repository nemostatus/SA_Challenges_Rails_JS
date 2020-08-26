document.addEventListener("DOMContentLoaded", () => {
  fetchChallenges();
  createChallenge();
  greeting();
});

const BASE_URL = "http://127.0.0.1:3000";

function fetchChallenges() {
  fetch(`${BASE_URL}/challenges`)
    .then((resp) => resp.json())
    .then((challenges) => {
      
      challenges.sort((a, b) => {
        return a.difficulty - b.difficulty;
      });
      for (const challenge of challenges) {
        let c = new Challenge(challenge)
       c.renderChallenges();
      }
    });
}

function fetchAttempts() {
 
  fetch(`${BASE_URL}/challenges/${event.target.dataset.id}/attempts`)
    .then((resp) => resp.json())
    .then((attempts) => {
     attempts.sort((a, b) => {
          return b.cheer - a.cheer;
        });
      for (const attempt of attempts) {
        let a = new Attempt(attempt);
       a.renderAttempts();
      }
    });
}

function createChallenge() {
  let challengeForm = document.getElementById("challenge-form");
  challengeForm.innerHTML += `
    <form>
    <label for="name"><i class="fas fa-universal-access" style='font-size:28px'></i> Challenge Name: </label>
    <input type = "text" id= "name" required><br>
    <label for="description"> <i class='fas fa-book' style='font-size:24px'></i>  Challenge Description </label>
    <input type = "text"  id= "description" required><br>
    <label for="difficulty"> <i class="fas fa-burn" style='font-size:28px'></i> Difficulty level: </label>
    <input type = "number" min = "0" max ="10" id= "difficulty" required><br>
    <input type = "hidden" id="complete" name= "complete" value = "0" > 
    <input type = "submit" class = "challenge-bttn" value= "Create Challenge" title = "Challenge yourself, challenge others!">
    </form>
    `;
  challengeForm.addEventListener("submit", ChallengeformSubmission);
}

function createAttempt() {
  
  let attemptForm = document.getElementById("attempt-form");
  attemptForm.innerHTML = `
 
    <h2> <u>Attempt Challenge: ${event.target.dataset.name}</u> </h2>
    <i> <p> e.g. deadline: Friday<br>
    notes(your step by step method of approaching the challenge) <br>
   </p></i>

    <form>
    <input type = "hidden" id="attemptname" name = "attemptname" value = "${event.target.dataset.name}" ><br>
    <label for ="deadline"> <i class='far fa-calendar-alt' style='font-size:24px'></i> Deadline: </label>
    <input type ="text"  autocomplete = "off" id="deadline" required><br>
    <label for ="notes"><i class='fas fa-book' style='font-size:24px'></i> Notes: </label>
    <input type ="text" id="notes" required><br>
    <input type = "hidden" id="cheer" value = "0">
    <input type = "hidden" id="challenge_id" value = ${event.target.dataset.id}>
    <input type = "submit" value= "Attempt Challenge" class="new-attempt-bttn" onClick = fetchQuotes()>
    </form>

    `;
  attemptForm.addEventListener("submit", AttemptformSubmission);
}

function ChallengeformSubmission() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let difficulty = document.getElementById("difficulty").value;
  
  let challenge = {
    name: name,
    description: description,
    difficulty: difficulty,
    
  };

  fetch(`${BASE_URL}/challenges`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(challenge),
  })
    .then((resp) => resp.json())
    .then((challenge) => {
      let c = new Challenge(
        challenge
      );
      c.renderChallenges();
    });
    alert("Thank you! you can find your challenge below.")
}

function AttemptformSubmission() {
  event.preventDefault();
  let name = document.getElementById("attemptname").value;
  let deadline = document.getElementById("deadline").value;
  let notes = document.getElementById("notes").value;
  let cheer = document.getElementById("cheer").value;
  let challenge_id = document.getElementById("challenge_id").value;

  let attempt = {
    name: name,
    deadline: deadline,
    notes: notes,
    cheer: cheer,
    challenge_id: challenge_id,
  };

  fetch(`${BASE_URL}/attempts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attempt),
  })
    .then((resp) => resp.json())
    .then((attempt) => {
      let a = new Attempt(attempt
       );
      a.renderAttempts();
    });
}


function updateAttempt() {
  
  let attemptId = parseInt(event.target.dataset.id);
  let cheerValue = parseInt(event.target.dataset.cheer);
  fetch(`${BASE_URL}/attempts/${attemptId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cheer: cheerValue + 1,

    }),

    });
   
}

function scrollToTop() {
  window.scrollTo(0, 0);
}


function fetchQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((quotes) => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      if (random.author === null) {
        random.author = "Anonymous";
      }
      alert(`${random.text} - ${random.author} `);
    });
}

function calendar() {
  $(() => {
    $("#deadline").datepicker();
  });
}

function greeting() {
  let date = new Date();
  let time = date.getHours();
  let item = document.getElementById("navbar").getElementsByTagName("ul");
  let trueGreeting = item[0].getElementsByClassName("nav-item")[0];

  if (time < 6) {
    trueGreeting.innerHTML = `<h2> <i class="fas fa-moon" style='font-size:44px; color: gold'></i> Hello night owl!</h2> `;
  } else if (time < 19) {
    trueGreeting.innerHTML = `<h2> <i class="fas fa-sun" style='font-size:44px; color: gold'></i> Good Day!</h2> `;
  } else {
    trueGreeting.innerHTML = `<h2> <i class="fas fa-moon" style='font-size:44px; color: gold'></i> Good Night!</h2> `;
  }
}

function clearDiv(divId){
  document.getElementById(divId).innerHTML = ""
  }
  
function findAndReplaceCheer(number){
  
  let buttons = document.getElementsByClassName('cheer')
let array = Array.from(buttons)

let buttonIneed = array.filter(button => button.dataset.id === `${number}`)
let trueButton = buttonIneed[0]
trueButton.innerHTML = `<i class='fas fa-star' style='font-size:24px;color: gold'></i> Thank you for your cheer!`  
let ul = trueButton.parentElement
ul.getElementsByTagName('li')[2].innerHTML = `${parseInt(event.target.dataset.cheer) + 1 }  cheer(s)! `


}
