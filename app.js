// idevhtei toglogch
active_player = 0;

// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah
var round_score = 0;

// ehleh

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// Shoog arilgah
var dice_dom = document.querySelector(".dice");
dice_dom.style.display = "none";

// roll button event
document.querySelector(".btn-roll").addEventListener("click", function() {
    // shoo ali talaar buusniig hadgalah huvisagch. 1-6 sanamsargui
    var dice_number = Math.floor(Math.random() * 6 + 1);

    // buusan toonoos hargalzan shoog web deer haruulna
    dice_dom.src = "dice-" + dice_number + ".png";
    dice_dom.style.display = "block";

    // buusan too ni 1 ees ylgaati bol idevhtei toglogchiin onoog nemne
    if (dice_number !== 1) {
        // 1ees ylgaatai bol toglogchiin onoog nemne
        round_score += dice_number;
        document.getElementById(
            "current-" + active_player
        ).textContent = round_score;
    } else {
        // 1 buuval idevhiteo toglogchiin eeljiig solino
        switchToNextPlayer();
    }
});
// hold button event
document.querySelector(".btn-hold").addEventListener("click", function() {
    // ene toglogchiin eeljiin onoog global onoo ruu nemne
    scores[active_player] += round_score;
    // Delgetsen deerh onoog uurchilnu
    document.getElementById("score-" + active_player).textContent =
        scores[active_player];
    // toglogch ylsan esehiig shalgana
    if (scores[active_player] >= 10) {
        // neriig winner bolgoj uurchilnu
        document.getElementById("name-" + active_player).textContent = "Winner!";
        // active classiig winner classaar solino
        document
            .querySelector(".player-" + active_player + "-panel")
            .classList.add("winner");
        document
            .querySelector(".player-" + active_player + "-panel")
            .classList.remove("active");
    } else {
        // toglogchiin eeljiig solino
        switchToNextPlayer();
    }
});

function switchToNextPlayer() {
    // ene toglogchiin eeljiin onoog 0 bolgono
    round_score = 0;
    document.getElementById("current-" + active_player).textContent = 0;

    // idevhitei toglogchiin eeljiig solino
    active_player === 1 ? (active_player = 0) : (active_player = 1);

    // ulaan tsegiig solino
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // shoog tur alga bolgono
    dice_dom.style.display = "none";
}