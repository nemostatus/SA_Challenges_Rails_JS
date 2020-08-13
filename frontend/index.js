document.addEventListener("DOMContentLoaded", () => {
  fetchChallenges();
  createChallenge();
});

const BASE_URL = "http://127.0.0.1:3000";

function fetchChallenges() {
  fetch(`${BASE_URL}/challenges`)
    .then((resp) => resp.json())
    .then((challenges) => {
      challenges.sort(function (a, b) {
        return a.difficulty - b.difficulty;
      });
      for (const challenge of challenges) {
        let c = new Challenge(
          challenge.id,
          challenge.name,
          challenge.description,
          challenge.difficulty,
          challenge.complete
        );
        c.renderChallenges();
      }
    });
}

function fetchAttempts() {
  fetch(`${BASE_URL}/challenges/${event.target.dataset.id}/attempts`)
    .then((resp) => resp.json())
    .then((attempts) => {
      for (const attempt of attempts) {
        let a = new Attempt(
          attempt.id,
          attempt.name,
          attempt.deadline,
          attempt.notes,
          attempt.complete,
          attempt.challenge_id
        );
        a.renderAttempts();
      }
    });
}

function createChallenge() {
  let challengeForm = document.getElementById("challenge-form");
  challengeForm.innerHTML += `
    <form>
    <label for="name">Challenge Name: </label>
    <input type = "text" id= "name" required><br>
    <label for="description">Challenge Description </label>
    <input type = "text"  id= "description" required><br>
    <label for="difficulty">Difficulty level: </label>
    <input type = "number" min = "0" max ="10" id= "difficulty" required><br>
    <input type = "hidden" id="complete" name= "complete" value = "1" > 
    <input type = "submit" value= "Create Challenge">
    </form>
    `;
  challengeForm.addEventListener("submit", ChallengeformSubmission);
}



function createAttempt() {
  let attemptForm = document.getElementById("attempt-form");
  attemptForm.innerHTML += `
    <h1> <u>Try Challenge: ${event.target.dataset.name}</u> </h1>
    <p> e.g. deadline: friday<br>
    notes: Find good sources for stand up, and practice in front of my family and friends first
</p>
    <form>
    
    
    <input type = "hidden" id="attemptname" name = "attemptname" value = "${event.target.dataset.name}" ><br>

    <label for ="deadline"> Deadline: </label>
    <input type ="text" id="deadline" required><br>

    <label for ="notes"> Notes: </label>
    <input type ="text" id="notes" required><br>
  
    <input type = "hidden" id="challenge_id" value = ${event.target.dataset.id}>
    <input type = "submit" value= "Attempt Challenge" onClick = fetchQuotes()>
    </form>

    `;
  attemptForm.addEventListener("submit", AttemptformSubmission);
}

function ChallengeformSubmission() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let difficulty = document.getElementById("difficulty").value;
  let complete = document.getElementById("complete").value;
  let challenge = {
    name: name,
    description: description,
    difficulty: difficulty,
    complete: complete
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
        challenge.id,
        challenge.name,
        challenge.description,
        challenge.difficulty, 
        challenge.complete
      );
      c.renderChallenges();
    });
}

function AttemptformSubmission() {
  event.preventDefault();
  let name = document.getElementById("attemptname").value;
  let deadline = document.getElementById("deadline").value;
  let notes = document.getElementById("notes").value;
 
  let challenge_id = document.getElementById("challenge_id").value;

  let attempt = {
    name: name,
    deadline: deadline,
    notes: notes,
   
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
      let a = new Attempt(
        attempt.id,
        attempt.name,
        attempt.deadline,
        attempt.notes,
      
        attempt.challenge_id
      );
      a.renderAttempts();
    });
}

function updateChallenge() {

  let challengeId = parseInt(event.target.dataset.id);
  let completeValue = parseInt(event.target.dataset.complete)
  fetch(`${BASE_URL}/challenges/${challengeId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      complete: completeValue + 1,
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

function removeBttns(){
    let bttns = document.getElementsByClassName("attempt-bttn")
    for(const bttn of bttns){
        setTimeout(function () {
            bttn.remove()
          }, 100);
    }
} //this is to fix the double form bug , i would like to add more to the form function that deletes the previous form with 
// timed so it's deleted then new one created