/*

 _____  ___  _   _ _____ _   _ _____   _     _____ _____ _____ _____ 
/  ___|/ _ \| | | |_   _| \ | |  __ \ | |   |  _  |  __ \_   _/  __ \
\ `--./ /_\ \ | | | | | |  \| | |  \/ | |   | | | | |  \/ | | | /  \/
 `--. \  _  | | | | | | | . ` | | __  | |   | | | | | __  | | | |    
/\__/ / | | \ \_/ /_| |_| |\  | |_\ \ | |___\ \_/ / |_\ \_| |_| \__/\
\____/\_| |_/\___/ \___/\_| \_/\____/ \_____/\___/ \____/\___/ \____/     


*/ 

const deleteButton = document.getElementById("delbutton");

window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.savedScore) {
        currentScore = parseInt(localStorage.savedScore);
        document.getElementById("displaytext").innerHTML = currentScore;
    }
    
    if (localStorage.savedScoreMultiplier) {
        scoreMultiplier = parseInt(localStorage.savedScoreMultiplier);
        scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    }
});

deleteButton.onclick = function deleteProgress() {
    currentScore = 0;
    scoreMultiplier = 0;
    document.getElementById("displaytext").innerHTML = currentScore;
    scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    localStorage.removeItem("savedScore");
    localStorage.removeItem("savedScoreMultiplier");
}


/*

_____   ___  ___  ___ _____  ______ _   _ _   _ _____ _____ _____ _____ _   _ 
|  __ \ / _ \ |  \/  ||  ___| |  ___| | | | \ | /  __ \_   _|_   _|  _  | \ | |
| |  \// /_\ \| .  . || |__   | |_  | | | |  \| | /  \/ | |   | | | | | |  \| |
| | __ |  _  || |\/| ||  __|  |  _| | | | | . ` | |     | |   | | | | | | . ` |
| |_\ \| | | || |  | || |___  | |   | |_| | |\  | \__/\ | |  _| |_\ \_/ / |\  |
 \____/\_| |_/\_|  |_/\____/  \_|    \___/\_| \_/\____/ \_/  \___/ \___/\_| \_/    
 
 
*/


let currentScore = 0;
let scoreMultiplier = 0;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");
const upgrade1Button = document.getElementById("upgrade1");

upgrade1Button.onclick = function upgrade1() {
    scoreMultiplier++;
    upgrade1Button.innerHTML = "Upgraded."
    upgrade1Button.disabled = true;
}

setInterval(scorePerSecondLogic, 1000);
function scorePerSecondLogic() {
    scorePerSecond.innerHTML = scoreMultiplier + " SPS"
    localStorage.savedScoreMultiplier = scoreMultiplier;
}

setInterval(formula, 1000);
function formula() {
    currentScore = currentScore + scoreMultiplier;
    document.getElementById("displaytext").innerHTML = currentScore;
    localStorage.savedScore = currentScore;
}