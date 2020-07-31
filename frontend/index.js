document.addEventListener("DOMContentLoaded", () => {
    fetchChallenges()
    
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

//delete
