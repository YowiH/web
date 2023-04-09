const profilePicture = document.getElementById("profile-picture");
let rotationDeg = 90;
let rotation = 0;
let spins = 0;
profilePicture.addEventListener("click", () => {
    if (spins == 9.75) {
        const rrll = document.getElementById("rrll");
        rrll.play();
    }
    profilePicture.style.transform = "rotate("+rotationDeg+"deg)";
    rotationDeg += 90;
    rotation++;
    spins = rotation/4;
    console.log(rotationDeg);
    console.log(rotation)
    console.log(spins);
});