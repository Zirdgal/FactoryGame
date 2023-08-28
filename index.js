/*

 _____  ___  _   _ _____ _   _ _____   _     _____ _____ _____ _____ 
/  ___|/ _ \| | | |_   _| \ | |  __ \ | |   |  _  |  __ \_   _/  __ \
\ `--./ /_\ \ | | | | | |  \| | |  \/ | |   | | | | |  \/ | | | /  \/
 `--. \  _  | | | | | | | . ` | | __  | |   | | | | | __  | | | |    
/\__/ / | | \ \_/ /_| |_| |\  | |_\ \ | |___\ \_/ / |_\ \_| |_| \__/\
\____/\_| |_/\___/ \___/\_| \_/\____/ \_____/\___/ \____/\___/ \____/     


*/ 

const saveButton = document.getElementById("savebutton");
const loadButton = document.getElementById("loadbutton");

saveButton.onclick = function saveProgress() {
    document.cookie = "score=" + currentScore + ";";
    document.cookie = "multi=" + scoreMultiplyer + ";";
}


loadButton.onclick = function loadProgress() {
    const cookiesArray = document.cookie.split("; ");

    let loadedScore = 0;
    let loadedMultiplier = 0;

    for (const cookie of cookiesArray) {
        const cookieParts = cookie.split("=");

        if (cookieParts[0] === "score") {
            loadedScore = parseInt(cookieParts[1]);
        } else if (cookieParts[0] === "multi") {
            loadedMultiplier = parseInt(cookieParts[1]);
        }
    }

    document.getElementById("displaytext").innerHTML = loadedScore;
    document.getElementById("scorepersecond").innerHTML = loadedMultiplier;

    currentScore = loadedScore;
    scoreMultiplyer = loadedMultiplier;
};




/*

_____   ___  ___  ___ _____  ______ _   _ _   _ _____ _____ _____ _____ _   _ 
|  __ \ / _ \ |  \/  ||  ___| |  ___| | | | \ | /  __ \_   _|_   _|  _  | \ | |
| |  \// /_\ \| .  . || |__   | |_  | | | |  \| | /  \/ | |   | | | | | |  \| |
| | __ |  _  || |\/| ||  __|  |  _| | | | | . ` | |     | |   | | | | | | . ` |
| |_\ \| | | || |  | || |___  | |   | |_| | |\  | \__/\ | |  _| |_\ \_/ / |\  |
 \____/\_| |_/\_|  |_/\____/  \_|    \___/\_| \_/\____/ \_/  \___/ \___/\_| \_/    
 
 
*/


let currentScore = 0;
let scoreMultiplyer = 0;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");
const upgrade1Button = document.getElementById("upgrade1");

upgrade1Button.onclick = function upgrade1() {
    scoreMultiplyer++;
    upgrade1Button.innerHTML = "Upgraded."
    upgrade1Button.disabled = true;
}

setInterval(scorePerSecondLogic, 1000);
function scorePerSecondLogic() {
    scorePerSecond.innerHTML = scoreMultiplyer + " SPS"
}

setInterval(formula, 1000);
function formula() {
    currentScore = currentScore + scoreMultiplyer;
    document.getElementById("displaytext").innerHTML = currentScore;
}