class Challenge {
  constructor(challenge) {
    this.id = challenge.id;
    this.name = challenge.name;
    this.description = challenge.description;
    this.difficulty = challenge.difficulty;
   
  }

  renderChallenge() {
    let challengesDiv = document.getElementById("challenges-container");
    challengesDiv.innerHTML += `
        
        <ul>
        <u><h3> Challenge: ${this.name} </h3></u>
        <li> Description: ${this.description} </li>
        <li> Difficulty: ${this.difficulty} </li>
        <button class = "attempt-bttn" data-id = ${this.id} data-name = "${this.name}" title = "Attempt this challenge!" onClick =  "calendar();  createAttempt();  scrollToTop()"> Attempt</button>
        <button class="attempted" data-id = ${this.id} title = "See all the attempts of this challenge!"    onClick="clearDiv('attempts-container'); fetchAttempts();  scrollToTop() ">All Attempts </button>
       
        </ul>
        
       `;
  }
}
