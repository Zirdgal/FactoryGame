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

let ascendButtonStatus = 0;
let ascendButtonCost = 10000;

let upgrade1ButtonStatus = 0;
let upgrade1ButtonCost = 0;

let upgrade2ButtonStatus = 0;
let upgrade2ButtonCost = 35;

let upgrade3ButtonStatus = 0;
let upgrade3ButtonCost = 100;

let upgrade4ButtonStatus = 0;
let upgrade4ButtonCost = 500;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");
const ascendButton = document.getElementById("ascendbutton");
const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const upgrade3Button = document.getElementById("upgrade3");
const upgrade4Button = document.getElementById("upgrade4");

/*
                                      .___       ___.           __    __                  .__                .__        
 __ ________   ________________     __| _/____   \_ |__  __ ___/  |__/  |_  ____   ____   |  |   ____   ____ |__| ____  
|  |  \____ \ / ___\_  __ \__  \   / __ |/ __ \   | __ \|  |  \   __\   __\/  _ \ /    \  |  |  /  _ \ / ___\|  |/ ___\ 
|  |  /  |_> > /_/  >  | \// __ \_/ /_/ \  ___/   | \_\ \  |  /|  |  |  | (  <_> )   |  \ |  |_(  <_> ) /_/  >  \  \___ 
|____/|   __/\___  /|__|  (____  /\____ |\___  >  |___  /____/ |__|  |__|  \____/|___|  / |____/\____/\___  /|__|\___  >
      |__|  /_____/            \/      \/    \/       \/                              \/             /_____/         \/   

*/
ascendButton.onclick = function ascendUpgrade() {
    if (currentScore >= ascendButtonCost) {
        currentScore = currentScore - ascendButtonCost
        ascendButtonCost = ascendButtonCost * 20;
        scoreMultiplier = scoreMultiplier * 10;
        ascendButtonStatus++;
    }
}
upgrade1Button.onclick = function upgrade1() {
    if (currentScore >= upgrade1ButtonCost) {
        currentScore = currentScore - upgrade1ButtonCost;
        upgrade1ButtonCost = upgrade1ButtonCost * 1.5 + 10;
        scoreMultiplier++;
        upgrade1ButtonStatus++;
    }
}
upgrade2Button.onclick = function upgrade2() {
    if (currentScore >= upgrade2ButtonCost) {
        currentScore = currentScore - upgrade2ButtonCost;
        scoreMultiplier = scoreMultiplier * 1.5;
        upgrade2ButtonStatus = 1;
    }
}
upgrade3Button.onclick = function upgrade3() {
    if (currentScore >= upgrade3ButtonCost) {
        currentScore = currentScore - upgrade3ButtonCost;
        scoreMultiplier = scoreMultiplier * scoreMultiplier;
        upgrade3ButtonStatus = 1;
    }
}
upgrade4Button.onclick = function upgrade4() {
    if (currentScore >= upgrade4ButtonCost) {
        currentScore = currentScore - upgrade4ButtonCost;
        upgrade4ButtonCost = upgrade4ButtonCost + 500;
        scoreMultiplier = scoreMultiplier + 10;
        upgrade4ButtonStatus++;
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
setInterval(upgradeBlockingTimedEvents, 1);
function upgradeBlockingTimedEvents() {
    //ASCEND BUTTON
    ascendButton.innerHTML = "Ascend SPS * 10 Cost: " + ascendButtonCost;

    //UPGRADE 1 BUTTON
    if (upgrade1ButtonStatus === 15) {
        upgrade1Button.disabled = true;
        upgrade1Button.innerHTML = "Increase SPS + 1 (Level MAX)"
    } else {
        upgrade1Button.disabled = false;
        upgrade1Button.innerHTML = "Increase SPS + 1 (Level " + upgrade1ButtonStatus + "/15) Cost:" + upgrade1ButtonCost.toFixed(2);
    }
    if (upgrade1ButtonStatus >= 3) {
        upgrade2Button.hidden = false;
    }

    //UPGRADE 2 BUTTON
    if(upgrade2ButtonStatus === 1) {
        upgrade2Button.disabled = true;
        upgrade2Button.innerHTML = "Increase SPS * 1.5 (Level MAX)"
        upgrade3Button.hidden = false;

    } else {
        upgrade2Button.disabled = false;
        upgrade2Button.innerHTML = "Increase SPS * 1.5 (Level 0/1) Cost:35";
    }

    //UPGRADE 3 BUTTON
    if(upgrade3ButtonStatus === 1) {
        upgrade3Button.disabled = true;
        upgrade3Button.innerHTML = "Increase SPS ^ 2 (Level MAX)"
        upgrade4Button.hidden = false;
    } else {
        upgrade3Button.disabled = false;
        upgrade3Button.innerHTML = "Increase SPS ^ 2 (Level " + upgrade3ButtonStatus + "/1) Cost: " + upgrade3ButtonCost;
    }
    //UPGRADE 4 BUTTON
    if(upgrade4ButtonStatus === 10) {
        upgrade4Button.disabled = true;
        upgrade4Button.innerHTML = "Increase SPS + 10 (Level MAX)"
    } else {
        upgrade4Button.disabled = false;
        upgrade4Button.innerHTML = "Increase SPS + 10 (Level " + upgrade4ButtonStatus + "/10) Cost: " + upgrade4ButtonCost;
    }


        // COLOUR ASCEND
    if (currentScore >= ascendButtonCost) {
        ascendButton.style.borderColor = "green";
        ascendButton.style.backgroundColor = "lightgreen";
        ascendButton.style.color = "black";
    } else {
        ascendButton.style.borderColor = "red";
        ascendButton.style.backgroundColor = "pink";
        ascendButton.style.color = "black";
    }

    // COLOUR UPG1
    if (currentScore >= upgrade1ButtonCost) {
        upgrade1Button.style.borderColor = "green";
        upgrade1Button.style.backgroundColor = "lightgreen";
        upgrade1Button.style.color = "black";
    } else {
        upgrade1Button.style.borderColor = "red";
        upgrade1Button.style.backgroundColor = "pink";
        upgrade1Button.style.color = "black";
    }
    if(upgrade1ButtonStatus === 15) {
        upgrade1Button.style.borderColor = "white";
        upgrade1Button.style.backgroundColor = "black";
        upgrade1Button.style.color = "white";
    }
        // COLOUR UPG2
    if (currentScore >= upgrade2ButtonCost) {
        upgrade2Button.style.borderColor = "green";
        upgrade2Button.style.backgroundColor = "lightgreen";
        upgrade2Button.style.color = "black";
    } else {
        upgrade2Button.style.borderColor = "red";
        upgrade2Button.style.backgroundColor = "pink";
        upgrade2Button.style.color = "black";
    }
    if(upgrade2ButtonStatus === 1) {
        upgrade2Button.style.borderColor = "white";
        upgrade2Button.style.backgroundColor = "black";
        upgrade2Button.style.color = "white";
    }
        // COLOUR UPG3
    if (currentScore >= upgrade3ButtonCost) {
        upgrade3Button.style.borderColor = "green";
        upgrade3Button.style.backgroundColor = "lightgreen";
        upgrade3Button.style.color = "black";
    } else {
        upgrade3Button.style.borderColor = "red";
        upgrade3Button.style.backgroundColor = "pink";
        upgrade3Button.style.color = "black";
    }
    if(upgrade3ButtonStatus === 1) {
        upgrade3Button.style.borderColor = "white";
        upgrade3Button.style.backgroundColor = "black";
        upgrade3Button.style.color = "white";
    }
        // COLOUR UPG4
    if (currentScore >= upgrade4ButtonCost) {
        upgrade4Button.style.borderColor = "green";
        upgrade4Button.style.backgroundColor = "lightgreen";
        upgrade4Button.style.color = "black";
    } else {
        upgrade4Button.style.borderColor = "red";
        upgrade4Button.style.backgroundColor = "pink";
        upgrade4Button.style.color = "black";
    }
    if(upgrade4ButtonStatus === 10) {
        upgrade4Button.style.borderColor = "white";
        upgrade4Button.style.backgroundColor = "black";
        upgrade4Button.style.color = "white";
    }
}

setInterval(timedEvents, 1000);
function timedEvents() {
    // Score Logic
    currentScore = currentScore + scoreMultiplier;
    document.getElementById("displaytext").innerHTML = currentScore.toFixed(2);

    // SPS Logic
    scorePerSecond.innerHTML = scoreMultiplier.toFixed(2) + " SPS";
    localStorage.savedScore = currentScore;
    localStorage.savedScoreMultiplier = scoreMultiplier;
        //ascend button
    localStorage.savedAscendButtonStatus = ascendButtonStatus;
    localStorage.savedAscendButtonCost = ascendButtonCost;
        // upgrade 1 button
    localStorage.savedUpgrade1ButtonStatus = upgrade1ButtonStatus;
    localStorage.savedUpgrade1ButtonCost = upgrade1ButtonCost;
        // upgrade 2 button
    localStorage.savedUpgrade2ButtonStatus = upgrade2ButtonStatus;
    localStorage.savedUpgrade2ButtonCost = upgrade2ButtonCost;
        //upgrade 3 button
    localStorage.savedUpgrade3ButtonStatus = upgrade3ButtonStatus;
    localStorage.savedUpgrade3ButtonCost = upgrade3ButtonCost;
        //upgrade 4 button
    localStorage.savedUpgrade4ButtonStatus = upgrade4ButtonStatus;
    localStorage.savedUpgrade4ButtonCost = upgrade4ButtonCost;
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
        document.getElementById("displaytext").innerHTML = currentScore; }
    if (localStorage.savedScoreMultiplier) {
        scoreMultiplier = parseInt(localStorage.savedScoreMultiplier);
        scorePerSecond.innerHTML = scoreMultiplier + " SPS"; }
        
    if (localStorage.savedAscendButtonStatus) {
        ascendButtonStatus = parseInt(localStorage.savedUpgrade1ButtonStatus); }
    if (localStorage.savedAscendButtonCost) {
        ascendButtonCost = parseInt(localStorage.savedAscendButtonCost); }

    if (localStorage.savedUpgrade1ButtonStatus) {
        upgrade1ButtonStatus = parseInt(localStorage.savedUpgrade1ButtonStatus); }
    if (localStorage.savedUpgrade1ButtonCost) {
        upgrade1ButtonCost = parseInt(localStorage.savedUpgrade1ButtonCost); }

    if (localStorage.savedUpgrade2ButtonStatus) {
        upgrade2ButtonStatus = parseInt(localStorage.savedUpgrade2ButtonStatus); }
    if (localStorage.savedUpgrade2ButtonCost) {
        upgrade2ButtonCost = parseInt(localStorage.savedUpgrade2ButtonCost); }

    if (localStorage.savedUpgrade3ButtonStatus) {
        upgrade3ButtonStatus = parseInt(localStorage.savedUpgrade3ButtonStatus); }
    if (localStorage.savedUpgrade3ButtonCost) {
        upgrade3ButtonCost = parseInt(localStorage.savedUpgrade3ButtonCost); }

    if (localStorage.savedUpgrade4ButtonStatus) {
        upgrade4ButtonStatus = parseInt(localStorage.savedUpgrade4ButtonStatus); }
    if (localStorage.savedUpgrade4ButtonCost) {
        upgrade4ButtonCost = parseInt(localStorage.savedUpgrade4ButtonCost); }
});

deleteButton.onclick = function deleteProgress() {
    currentScore = 0;
    scoreMultiplier = 0;

    ascendButtonStatus = 0;
    ascendButtonCost = 10000;

    upgrade1ButtonStatus = 0;
    upgrade1ButtonCost = 0;

    upgrade2ButtonStatus = 0;
    upgrade2ButtonCost = 35;
    
    upgrade3ButtonStatus = 0;
    upgrade3ButtonCost = 100;

    upgrade4ButtonStatus = 0;
    upgrade4ButtonCost = 500;

    document.getElementById("displaytext").innerHTML = currentScore;
    scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    ascendButton.innerHTML = "Ascend SPS * 10 Cost: " + ascendButtonCost;
    upgrade1Button.innerHTML = "Increase SPS + 1 (Level " + upgrade1ButtonStatus + "/15) Cost:" + upgrade1ButtonCost;
    upgrade2Button.hidden = true;
    upgrade3Button.hidden = true;
    upgrade4Button.hidden = true;

    localStorage.removeItem("savedScore");
    localStorage.removeItem("savedScoreMultiplier");

    localStorage.removeItem("savedAscendButtonStatus");
    localStorage.removeItem("savedAscendButtonCost");
    localStorage.removeItem("savedAscendButtonMultiplier"); // TO DO : REMOVE THESE ON 17/09 PATCH

    localStorage.removeItem("savedUpgrade1ButtonStatus");
    localStorage.removeItem("savedUpgrade1ButtonCost");

    localStorage.removeItem("savedUpgrade2ButtonStatus");
    localStorage.removeItem("savedUpgrade2ButtonCost");
    localStorage.removeItem("savedUpgrade2ButtonMultiplier"); // TO DO : REMOVE THESE ON 17/09 PATCH
    
    localStorage.removeItem("savedUpgrade3ButtonStatus");
    localStorage.removeItem("savedUpgrade3ButtonCost");
    localStorage.removeItem("savedUpgrade3ButtonMultiplier"); // TO DO : REMOVE THESE ON 17/09 PATCH

    localStorage.removeItem("savedUpgrade4ButtonStatus");
    localStorage.removeItem("savedUpgrade4ButtonCost");
}