function rotate() {
    const toggle = document.querySelector(".toggle");
    toggle.classList.toggle("active");
}

function disableTextSelection() {
    const element = event.currentTarget;
    element.style.userSelect = "none";
    const toggle = document.querySelector(".toggle");
    toggle.addEventListener("dblclick", disableTextSelection);
}

function display() {
    const contextNote = document.querySelector(".context-note");
    contextNote.classList.toggle("active");
}

function toggleList() {
    rotate();
    disableTextSelection();
    display();
}

const images = document.querySelectorAll("img");
let activeImage = null;
images.forEach(image => {
    image.addEventListener("click", () => {
        const bookNoteId = image.dataset.booknote;
        const bookNote = document.getElementById(bookNoteId);
        const bookNotesDisplayer = document.getElementById("book-notes-displayer");
        bookNotesDisplayer.innerHTML = "";
        bookNotesDisplayer.appendChild(bookNote.cloneNode(true));
        window.location.hash = bookNoteId;
        if (activeImage !== image) {
            image.classList.add("active");
            if (activeImage !== null) {
                activeImage.classList.remove("active");
                bookNotesDisplayer.innerHTML = "";
            }
            activeImage = image;
        } else {
            image.classList.remove("active");
            bookNotesDisplayer.innerHTML = "";
            activeImage = null;
        }
    });
});