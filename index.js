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
let upgrade1ButtonStatus = 0;
let upgrade1ButtonCost = 0;
let upgrade2ButtonStatus = 0;
let upgrade2ButtonCost = 50;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");
const ascendButton = document.getElementById("ascendbutton");
const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");

/*
                                      .___       ___.           __    __                  .__                .__        
 __ ________   ________________     __| _/____   \_ |__  __ ___/  |__/  |_  ____   ____   |  |   ____   ____ |__| ____  
|  |  \____ \ / ___\_  __ \__  \   / __ |/ __ \   | __ \|  |  \   __\   __\/  _ \ /    \  |  |  /  _ \ / ___\|  |/ ___\ 
|  |  /  |_> > /_/  >  | \// __ \_/ /_/ \  ___/   | \_\ \  |  /|  |  |  | (  <_> )   |  \ |  |_(  <_> ) /_/  >  \  \___ 
|____/|   __/\___  /|__|  (____  /\____ |\___  >  |___  /____/ |__|  |__|  \____/|___|  / |____/\____/\___  /|__|\___  >
      |__|  /_____/            \/      \/    \/       \/                              \/             /_____/         \/   

*/
upgrade1Button.onclick = function upgrade1() {
    if (currentScore >= upgrade1ButtonCost) {
        currentScore = currentScore - upgrade1ButtonCost;
        upgrade1ButtonCost = upgrade1ButtonCost + 10;
        scoreMultiplier++;
        upgrade1ButtonStatus++;
        upgrade1Button.innerHTML = "Increase SPS + 1 (Level " + upgrade1ButtonStatus + "/4) Cost:" + upgrade1ButtonCost;
    }
}
upgrade2Button.onclick = function upgrade2() {
    if (currentScore >= upgrade2ButtonCost) {
        currentScore = currentScore - upgrade2ButtonCost;
        scoreMultiplier = scoreMultiplier * 2;
        upgrade2ButtonStatus = 1;
        upgrade2Button.innerHTML = "Increase SPS * 2 (Level MAX/1)";
    }
}

/*
  __  .__                   .___                            __          
_/  |_|__| _____   ____   __| _/   _______  __ ____   _____/  |_  ______
\   __\  |/     \_/ __ \ / __ |  _/ __ \  \/ // __ \ /    \   __\/  ___/
 |  | |  |  Y Y  \  ___// /_/ |  \  ___/\   /\  ___/|   |  \  |  \___ \ 
 |__| |__|__|_|  /\___  >____ |   \___  >\_/  \___  >___|  /__| /____  >
               \/     \/     \/       \/          \/     \/          \/
*/ 
setInterval(upgradeBlockingTimedEvents, 10);
function upgradeBlockingTimedEvents() {
    //UPGRADE 1 BUTTON
    if (upgrade1ButtonStatus === 4) {
        upgrade1Button.disabled = true;
        upgrade1Button.innerHTML = "Increase SPS + 1 (Level MAX/4)"
        upgrade2Button.hidden = false;
    } else {
        upgrade1Button.disabled = false;
        upgrade1Button.innerHTML = "Increase SPS + 1 (Level " + upgrade1ButtonStatus + "/4) Cost:" + upgrade1ButtonCost;
    }

    //UPGRADE 2 BUTTON
    if(upgrade2ButtonStatus === 1) {
        upgrade2Button.disabled = true;
        upgrade2Button.innerHTML = "Increase SPS * 2 (Level MAX/1)"
    } else {
        upgrade2Button.disabled = false;
        upgrade2Button.innerHTML = "Increase SPS * 2 (Level 0/1) Cost:50";
    }
    
}

setInterval(timedEvents, 1000);
function timedEvents() {
    // Score Logic
    currentScore = currentScore + scoreMultiplier;
    document.getElementById("displaytext").innerHTML = currentScore;

    // SPS Logic
    scorePerSecond.innerHTML = scoreMultiplier + " SPS"

    //localStorage
    localStorage.savedScore = currentScore;
    localStorage.savedScoreMultiplier = scoreMultiplier;
    localStorage.savedUpgrade1ButtonStatus = upgrade1ButtonStatus;
    localStorage.savedUpgrade1ButtonCost = upgrade1ButtonCost;
    localStorage.savedUpgrade2ButtonStatus = upgrade2ButtonStatus;
    localStorage.savedUpgrade2ButtonCost = upgrade2ButtonCost;
}

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

    if (localStorage.savedUpgrade1ButtonStatus) {
        upgrade1ButtonStatus = parseInt(localStorage.savedUpgrade1ButtonStatus);
    }

    if (localStorage.savedUpgrade1ButtonCost) {
        upgrade1ButtonCost = parseInt(localStorage.savedUpgrade1ButtonCost);
    }

    if (localStorage.savedUpgrade2ButtonStatus) {
        upgrade2ButtonStatus = parseInt(localStorage.savedUpgrade2ButtonStatus);
    }

    if (localStorage.savedUpgrade1ButtonCost) {
        upgrade2ButtonCost = parseInt(localStorage.savedUpgrade2ButtonCost);
    }
});

deleteButton.onclick = function deleteProgress() {
    currentScore = 0;
    scoreMultiplier = 0;
    upgrade1ButtonStatus = 0;
    upgrade1ButtonCost = 0;
    upgrade2ButtonStatus = 0;
    upgrade2ButtonCost = 0;

    document.getElementById("displaytext").innerHTML = currentScore;
    scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    upgrade1Button.innerHTML = "Increase SPS + 1 (Level " + upgrade1ButtonStatus + "/4) Cost:" + upgrade1ButtonCost;
    upgrade2Button.hidden = true;

    localStorage.removeItem("savedScore");
    localStorage.removeItem("savedScoreMultiplier");
    localStorage.removeItem("savedUpgrade1ButtonStatus");
    localStorage.removeItem("savedUpgrade1ButtonCost");
    localStorage.removeItem("savedUpgrade2ButtonStatus");
    localStorage.removeItem("savedUpgrade2ButtonCost");
}

