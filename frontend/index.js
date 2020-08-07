document.addEventListener("DOMContentLoaded", () => {
    fetchChallenges();
    createChallenge();
    
   
    
})

const BASE_URL = "http://127.0.0.1:3000"
//read

function fetchChallenges(){
    fetch(`${BASE_URL}/challenges`)
    .then(resp => resp.json())
    .then(challenges => {
        challenges.sort((function(a, b){return a.difficulty - b.difficulty}))
        for(const challenge of challenges){
            let c = new Challenge(challenge.id, challenge.name, challenge.description, challenge.difficulty)
            c.renderChallenges()
            
        }
    })
}

function fetchAttempts(){
    fetch(`${BASE_URL}/challenges/${event.target.dataset.id}/attempts`)
    .then(resp => resp.json())
    .then(attempts => {
        for(const attempt of attempts){
            let a = new Attempt(attempt.id, attempt.name, attempt.deadline, attempt.notes, attempt.complete, attempt.challenge_id)
       a.renderAttempts()

        }
    })
}


//array 


//create
function createChallenge(){
    let challengeForm = document.getElementById("challenge-form")
    challengeForm.innerHTML +=
    `
    <form>
    <label for="name">Challenge Name: </label>
    <input type = "text" id= "name" required><br>
    <label for="description">Challenge Description </label>
    <input type = "text"  id= "description" required><br>
    <label for="difficulty">Difficulty level: </label>
    <input type = "number" min = "0" max ="10" id= "difficulty" required><br>
    <input type = "submit" value= "Create Challenge">
    </form>
    `
  challengeForm.addEventListener("submit", ChallengeformSubmission)
}

function createAttempt(){
    let attemptForm = document.getElementById("attempt-form")
    attemptForm.innerHTML +=
    `
    <h1> <u>Try Challenge: ${event.target.dataset.name}<u> </h1>
    <form>
    
    
    <input type = "hidden" id="attemptname" name = "attemptname" value = "${event.target.dataset.name}" ><br>

    <label for ="deadline"> Deadline: </label>
    <input type ="text" id="deadline" required><br>

    <label for ="notes"> Notes: </label>
    <input type ="text" id="notes" required><br>
    <input type = "hidden" id="complete" value = false >
    <input type = "hidden" id="challenge_id" value = ${event.target.dataset.id}>
    <input type = "submit" value= "Attempt Challenge" onClick = fetchQuotes();>

    </form>

    `
    attemptForm.addEventListener("submit", AttemptformSubmission)
  }


function ChallengeformSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let difficulty = document.getElementById("difficulty").value

    let challenge = {
        name: name ,
        description: description,
        difficulty: difficulty
    }

    fetch(`${BASE_URL}/challenges`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(challenge)
    })
    .then(resp => resp.json())
    .then(challenge => {
        let c = new Challenge(challenge.id, challenge.name, challenge.description, challenge.difficulty)
        c.renderChallenges()
    })
}

function challengeTitle(){
    let name = event.target.dataset.name
    
    let attemptsDiv = document.getElementById("attempts-container")
   attemptsDiv.innerHTML +=
        
`<h3>Challenge: ${name}</h3>}` }



function AttemptformSubmission(){
    event.preventDefault();
    let name = document.getElementById("attemptname").value
    let deadline = document.getElementById("deadline").value
    let notes = document.getElementById("notes").value
    let complete = document.getElementById("complete").value
    let challenge_id = document.getElementById("challenge_id").value
   
    let attempt = {
        name: name ,
        deadline: deadline,
        notes: notes,
        complete: complete,
        challenge_id: challenge_id
    }
  
    fetch(`${BASE_URL}/attempts`,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(attempt)
    })
    .then(resp => resp.json())
    .then(attempt => {
        let a = new Attempt(attempt.id, attempt.name, attempt.deadline, attempt.notes, attempt.complete, attempt.challenge_id)
       a.renderAttempts()

    })
}

function deleteAttempt(){
    let attemptId = parseInt(event.target.dataset.id) 
    fetch(`${BASE_URL}/attempts/${attemptId}`,{
        method:'DELETE'
      })
      setTimeout(function(){this.location.reload()},100);
}

function updateAttempt(){
    let attemptId = parseInt(event.target.dataset.id) 
    let attemptsDiv = document.getElementById("attempts-container")
    let check = document.getElementsByClassName("fa fa-check-circle")
    let h3 = attemptsDiv.getElementsByTagName('h3')
    fetch(`${BASE_URL}/attempts/${attemptId}`,{
        method:'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
    complete: true
    })
 })
 
 
 
 

}


function scrollToTop(){
    window.scrollTo(0,0);
}


    function fetchQuotes(){
        fetch("https://type.fit/api/quotes")
          .then(resp => resp.json())
         .then(quotes => {
            const random = quotes[Math.floor(Math.random() * quotes.length)];
             if(random.author === null){
                 random.author = "Anonymous"
                }
    alert(`${random.text} - ${random.author} `)
            }
         )}
   //puling random from array
    



function updateDiv()
{ 
    $( ".attempted" ).load(location.href + " .attempted" );
}








    
    
               
