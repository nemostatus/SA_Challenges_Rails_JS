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
            <u><h3>Attempting : ${this.name}   </h3></u>
            <li>Deadline: ${this.deadline} </li>
            <li>Notes: ${this.notes} </li>
          
            </ul>
           
           
      
            
            `;
   
  }
}
