// functiond ashiglagdah global variables

// togloom duussan eseh
var isPlaying;

// idevhtei toglogch
var active_player;

// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores;

// toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah
var round_score;

// Shoog haruulan elementiig DOM-os haij oloh
var dice_dom = document.querySelector(".dice");

// togloomiig ehluuleh
initGame();

function initGame() {
    // togloom ehelseniig hadgalah
    isPlaying = true;
    // idevhtei toglogch
    active_player = 0;

    // toglogchdiin tsugluulsan onoog hadgalah huvisagch
    scores = [0, 0];

    // toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah
    round_score = 0;

    // buh onoog 0 bolgoj haruulah

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // toglogchdiin neriig dahij uguh
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    // winner classiig arilgah
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    dice_dom.style.display = "none";
}
// roll button event
document.querySelector(".btn-roll").addEventListener("click", function() {
    // togloom duusaagui bol
    if (isPlaying) {
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
    } else {
        alert("new game tovchiig darna uu");
    }
});
// hold button event
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (isPlaying) {
        // ene toglogchiin eeljiin onoog global onoo ruu nemne
        scores[active_player] += round_score;
        // Delgetsen deerh onoog uurchilnu
        document.getElementById("score-" + active_player).textContent =
            scores[active_player];
        // toglogch ylsan esehiig shalgana
        if (scores[active_player] >= 100) {
            // neriig winner bolgoj uurchilnu
            document.getElementById("name-" + active_player).textContent = "Winner!";
            // active classiig winner classaar solino
            document
                .querySelector(".player-" + active_player + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + active_player + "-panel")
                .classList.remove("active");
            // togloom duussaniig hadgalah
            isPlaying = false;
        } else {
            // toglogchiin eeljiig solino
            switchToNextPlayer();
        }
    } else {
        alert("new game tovchiig darna uu");
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

// new game button event
document.querySelector(".btn-new").addEventListener("click", initGame);