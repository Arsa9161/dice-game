// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah
var round_score = 0;

// ehleh

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// add event
document.querySelector(".btn-roll").addEventListener("click", function() {
    // shoo ali talaar buusniig hadgalah huvisagch. 1-6 sanamsargui
    var dice_number = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".dice").src = "dice-" + dice_number + ".png";
});