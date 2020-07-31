document.addEventListener("DOMContentLoaded", () => {
    fetchChallenges();
    createChallenge()
    
})

const BASE_URL = "http://127.0.0.1:3000"
//read

function fetchChallenges(){
    fetch(`${BASE_URL}/challenges`)
    .then(resp => resp.json())
    .then(challenges => {
        for(const challenge of challenges){
            let c = new Challenge(challenge.id, challenge.name, challenge.description, challenge.difficulty)
            c.renderChallenges()
        }
    })
}

//create
function createChallenge(){
    let challengeForm = document.getElementById("challenge-form")
    challengeForm.innerHTML +=
    `
    <form>
    <label for="name">Challenge Name: </label>
    <input type = "text" id= "name"><br>
    <label for="description">Challenge Description </label>
    <input type = "text"  id= "description"><br>
    <label for="difficulty">Difficulty level: </label>
    <input type = "number" min = "0" max ="10" id= "difficulty"><br>
    <input type = "submit" value= "Create Challenge">
    </form>
    `

}

//delete
