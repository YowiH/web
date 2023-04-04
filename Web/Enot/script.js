let notes = [];

function saveNote() {
    const note = document.getElementById("note").value;
    notes.push(note);
    document.getElementById("note").value = "";
    displayNotes();
}

function searchNote() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredNotes = notes.filter(note => note.toLowerCase().includes(searchTerm));
    displayNotes(filteredNotes);
}

function displayNotes(notesArray = notes) {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    notesArray.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}