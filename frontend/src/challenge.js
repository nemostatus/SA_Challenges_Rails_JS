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
        <li> ${this.complete} person(s) completed this challenge </li> 
        <button class="complete-bttn" data-id=${this.id} data-complete = "${this.complete}" onClick =" fetchQuotes(); updateChallenge()" >  <i class="fa fa-flag-checkered" style="font-size:24px"></i>  Complete!  </button>
        <button class = "attempt-bttn" data-id = ${this.id} data-name = "${this.name}" onClick = "createAttempt();  scrollToTop(); removeBttns(); calendar()"> Attempt</button>
        <button class="attempted" data-id = ${this.id}   onClick="fetchAttempts(); this.onclick=null; scrollToTop() ">All Attempts </button>
       
        </ul>
        
       `;
  }
}
