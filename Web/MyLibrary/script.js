function rotate() {
    const toggle = document.querySelector(".toggle");
    toggle.classList.toggle("rotate");
}

function disableTextSelection() {
    const element = event.currentTarget;
    element.style.userSelect = "none";
    const toggle = document.querySelector(".toggle");
    toggle.addEventListener("dblclick", disableTextSelection);
}

function display() {
    const contextNote = document.querySelector(".context-note");
    if (contextNote.style.display == "none") {
        contextNote.style.display = "block";
    } else {
        contextNote.style.display = "none";
    }
}

const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", () => {
        const bookNoteId = image.dataset.booknote;
        const bookNote = document.getElementById(bookNoteId);
        const bookNotesDisplayer = document.getElementById("book-notes-displayer");
        bookNotesDisplayer.innerHTML = "";
        bookNotesDisplayer.appendChild(bookNote.cloneNode(true));
    });
});