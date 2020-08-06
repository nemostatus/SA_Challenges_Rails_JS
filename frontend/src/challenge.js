class Challenge{
    constructor(id,name,description,difficulty){
        this.id = id
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
    }
    //render challenges
    renderChallenges(){
        let challengesDiv = document.getElementById("challenges-container")
        challengesDiv.innerHTML +=
        `
        
        <ul>
        <u><h3> Challenge: ${this.name} </h3></u>
        <li> Description: ${this.description} </li>
        <li> Difficulty: ${this.difficulty} </li>
        <button class = "attempt-bttn" data-id = ${this.id} onClick = "createAttempt()"> Attempt</button>
        <button class="attempted" data-id = ${this.id} onClick="fetchAttempts(); this.onclick=null; scrollToTop() ">All Attempts </button>
       
        </ul>
        
       `}



    

       



        }


    
