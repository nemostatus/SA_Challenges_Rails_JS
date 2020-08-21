class Challenge {
  constructor(challenge) {
    this.id = challenge.id;
    this.name = challenge.name;
    this.description = challenge.description;
    this.difficulty = challenge.difficulty;
    this.complete = challenge.complete;
  }

  renderChallenges() {
    let challengesDiv = document.getElementById("challenges-container");
    challengesDiv.innerHTML += `
        
        <ul>
        <u><h3> Challenge: ${this.name} </h3></u>
        <li> Description: ${this.description} </li>
        <li> Difficulty: ${this.difficulty} </li>
        <button class = "attempt-bttn" data-id = ${this.id} data-name = "${this.name}" onClick =  createAttempt();  scrollToTop();  calendar()"> Attempt</button>
        <button class="attempted" data-id = ${this.id}   onClick="clearDiv('attempts-container'); fetchAttempts();  scrollToTop() ">All Attempts </button>
       
        </ul>
        
       `;
  }
}
