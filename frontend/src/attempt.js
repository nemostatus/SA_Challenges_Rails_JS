class Attempt {
  constructor(id, name, deadline, notes, cheer, challenge_id) {
    this.id = id;
    this.name = name;
    this.deadline = deadline;
    this.notes = notes;
    this.cheer = cheer;
    this.challenge_id = challenge_id;
  }

  renderAttempts() {
    let attemptsDiv = document.getElementById("attempts-container");

    attemptsDiv.innerHTML += `
    
            <ul>
            <u><h3>Attempt of the ${this.name} challenge  </h3></u>
            <li>Deadline: ${this.deadline} </li>
            <li>Notes: ${this.notes} </li>
            <li> ${this.cheer} Cheer(s)! </li>
            <button class="cheer" data-id = ${this.id} data-cheer = ${this.cheer} onClick="updateAttempt();fetchQuotes()">  <i class='fas fa-star' style='font-size:24px;color: gold'></i> Cheer on attempt! </button>
            </ul>
            `;
  }
}
