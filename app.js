console.log("i am your log")
showNotes(); // ye notes ab jayen nahi hon gein refresh hone k bad bhi yahein pe yahein gein 
// if users add a note add it to local storage
let addBtn= document.getElementById('addBtn');
addBtn.addEventListener("click", function(){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes==null){  // agar notes empty ho to aik array bana do empty 
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); // es me bata rha hon agr koi string miti to usko parse kar do 
    }
    notesObj.push(addTxt.value); // agr kesi ne addbtn pe click kia to add btn ko update kr don ga
localStorage.setItem("notes", JSON.stringify(notesObj)); // notes aik array he hai  //string me convert es lye kia cause localstorge me string me he store hota hai
addTxt.value = ""; // ye eski value ko blank es liye kia hai k jab enter kar do to value remove ho jaye ga txt se lekhi na reh jaye
console.log(notesObj);
showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){  // agar notes empty ho to aik array bana do empty 
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); // es me bata rha hon agr koi string miti to usko parse kar do 
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } 
   else{
    notesElm.innerHTML = `Nothing to show here! Use Add A Note section to add notes`;
   }

}
// function to delete note
function deleteNote(index){
    console.log(" i am deleting", index)
    let notes = localStorage.getItem("notes");
    if(notes==null){  // 
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
notesObj.splice(index, 1) ;
localStorage.setItem("notes", JSON.stringify(notesObj)); // notes aik array he hai  //string me convert es lye kia cause localstorge me string me he store hota hai

showNotes();    

}