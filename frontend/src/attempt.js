class Attempt {
  constructor(attempt) {
    this.id = attempt.id;
    this.name = attempt.name;
    this.deadline = attempt.deadline;
    this.notes = attempt.notes;
    this.cheer = attempt.cheer;
    this.challenge_id = attempt.challenge_id;
  }

  renderAttempts() {
    
    let attemptsDiv = document.getElementById("attempts-container");
   
    attemptsDiv.innerHTML += `
    
            <ul>
            <u><h3>Attempt of the ${this.name} challenge  </h3></u>
            <p><i> Cheer this attempt if you found the notes helpful to completing the challenge</i> </p>
            <li>Deadline: ${this.deadline} </li>
            <li>Notes: ${this.notes} </li>
            <li> ${this.cheer} Cheer(s)! </li>
            <button class="cheer" data-id = ${this.id} data-cheer = ${this.cheer} title = "Show your support for this attempt!"  onClick=" updateAttempt();fetchQuotes(); findAndReplaceCheer(parseInt(${this.id}))">  <i class='fas fa-star' style='font-size:24px;color: white'></i> Cheer on attempt! </button>
            </ul>
            `;
           
        }
}
