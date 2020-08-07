class Attempt{
    constructor(id,name,deadline,notes,complete, challenge_id){
        this.id = id;
        this.name = name;
        this.deadline = deadline;
        this.notes = notes; 
        this.complete = complete;
        this.challenge_id = challenge_id
    }
  
    renderAttempts(){
        let attemptsDiv = document.getElementById("attempts-container")
        
        attemptsDiv.innerHTML +=
            `
            <h3></h3>
            <ul>
            <u><h3>Attempt: ${this.name}  </h3></u>
            <li>Deadline: ${this.deadline} </li>
            <li>Notes: ${this.notes} </li>
          
            </ul>
            <button class="complete-bttn" data-id=${this.id} onClick ="updateAttempt(), fetchQuotes();"  > Complete! </button>
            <button class="delete-bttn" data-id=${this.id} onClick= "deleteAttempt()" > Delete Attempt </button>
      
            
            `
            if(this.complete === true){ attemptsDiv.innerHTML += 
            `<i class="fa fa-check-circle" aria-hidden="true"></i> COMPLETE!`}
    }
    

    }
