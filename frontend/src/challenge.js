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
        <h3> Challenge: ${this.name} </h3>
        <li> Description: ${this.description} </li>
        <li> Difficulty: ${this.difficulty} </li>
        </ul>
        `


    }
}