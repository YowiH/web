divCounter = 0;
contextCounter = 0;
contextId = "JJBA-P1V1-context";


function displayNote(clicked_id) {
    noteId = clicked_id.concat("-note");
    divCounter++;
    if (divCounter == 1) {
        document.getElementById(noteId).style.display = "block";
        document.getElementById(clicked_id).style.filter = "grayscale(100%)";
    }
    else if (divCounter > 1) {
        document.getElementById(noteId).style.display = "none";
        divCounter = 0;
        document.getElementById(clicked_id).style.filter = "grayscale(0%)";
    }
}

function showContext() {
    contextCounter++;
    if (contextCounter == 1) {
        document.getElementById(contextId).style.display = "block";
    }
    else if (contextCounter > 1) {
        document.getElementById(contextId).style.display = "none";
        contextCounter = 0;
    }
}