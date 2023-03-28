let divCounter = 0;

function displayDiv() {
    divCounter++;
    if (divCounter == 1) {
        document.getElementById("JJBAP1V1-note").style.display = "block";
    }
    else if (divCounter > 1) {
        document.getElementById("JJBAP1V1-note").style.display = "none";
        divCounter = 0;
    }
}