/*
   ______                        ______                 __  _           
  / ____/___ _____ ___  ___     / ____/_  ______  _____/ /_(_)___  ____ 
 / / __/ __ `/ __ `__ \/ _ \   / /_  / / / / __ \/ ___/ __/ / __ \/ __ \
/ /_/ / /_/ / / / / / /  __/  / __/ / /_/ / / / / /__/ /_/ / /_/ / / / /
\____/\__,_/_/ /_/ /_/\___/  /_/    \__,_/_/ /_/\___/\__/_/\____/_/ /_/                                                                         
*/


let currentScore = 0;
let scoreMultiplier = 0;

let ascensionScore = 0;
let ascensionResetScore = 0;
let ascendButtonCost = 10000;

let ascendUpgrade1Status = 0;
let ascendUpgrade1Cost = 1;
let ascendUpgrade2Status = 0;
let ascendUpgrade2Cost = 2;
let ascendUpgrade3Status = 0;
let ascendUpgrade3Cost = 7;
let ascendUpgrade4Status = 0;
let ascendUpgrade4Cost = 1;
let ascendUpgrade5Status = 0;
let ascendUpgrade5Cost = 3;
let ascendUpgrade6Status = 0;
let ascendUpgrade6Cost = 4;

let upgrade1ButtonStatus = 0;
let upgrade1ButtonCost = 0;
let upgrade1ButtonMaxLevel = 10;
let upgrade1ButtonMultiplier = 1;
let upgrade2ButtonStatus = 0;
let upgrade2ButtonCost = 35;
let upgrade2Multiplier = 1.1;
let upgrade2MaxLevel = 1;
let upgrade3ButtonMaxLevel = 1;
let upgrade3ButtonStatus = 0;
let upgrade3ButtonCost = 100;
let upgrade3Multiplier = 0.1;
let upgrade4ButtonStatus = 0;
let upgrade4ButtonCost = 500;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");

const ascendButton = document.getElementById("ascendbutton");

const ascendUpgrade1Button = document.getElementById("ascendUpgrade1");
const ascendUpgrade1ButtonToolTipText = document.getElementById("ascendUpgrade1ToolTipText");
const ascendUpgrade2Button = document.getElementById("ascendUpgrade2");
const ascendUpgrade2ButtonToolTipText = document.getElementById("ascendUpgrade2ToolTipText");
const ascendUpgrade3Button = document.getElementById("ascendUpgrade3");
const ascendUpgrade3ButtonToolTipText = document.getElementById("ascendUpgrade3ToolTipText");
const ascendUpgrade4Button = document.getElementById("ascendUpgrade4");
const ascendUpgrade4ButtonToolTipText = document.getElementById("ascendUpgrade4ToolTipText");
const ascendUpgrade5Button = document.getElementById("ascendUpgrade5");
const ascendUpgrade5ButtonToolTipText = document.getElementById("ascendUpgrade5ToolTipText");
const ascendUpgrade6Button = document.getElementById("ascendUpgrade6");
const ascendUpgrade6ButtonToolTipText = document.getElementById("ascendUpgrade6ToolTipText");

const au1au2Line = document.getElementById("au1-au2");
const au1au4Line = document.getElementById("au1-au4");
const au1au6Line = document.getElementById("au1-au6");
const au2au3Line = document.getElementById("au2-au3");
const au4au5Line = document.getElementById("au4-au5");

const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const upgrade3Button = document.getElementById("upgrade3");
const upgrade4Button = document.getElementById("upgrade4");

const up1up2Line = document.getElementById("up1-up2");
const up1up4Line = document.getElementById("up1-up4");
const up2up3Line = document.getElementById("up2-up3");

/*
                                    __        __          __  __                  
  __  ______  ____ __________ _____/ /__     / /_  __  __/ /_/ /_____  ____  _____
 / / / / __ \/ __ `/ ___/ __ `/ __  / _ \   / __ \/ / / / __/ __/ __ \/ __ \/ ___/
/ /_/ / /_/ / /_/ / /  / /_/ / /_/ /  __/  / /_/ / /_/ / /_/ /_/ /_/ / / / (__  ) 
\__,_/ .___/\__, /_/   \__,_/\__,_/\___/  /_.___/\__,_/\__/\__/\____/_/ /_/____/  
    /_/    /____/                                                                 
*/
ascendButton.onclick = function ascendUpgrade() {
    if (currentScore >= ascendButtonCost) {

        ascensionScore = ascensionScore + (currentScore / ascendButtonCost);
        currentScore = currentScore - ascendButtonCost * (currentScore / ascendButtonCost);

        // RESETTING PROGRESS
        currentScore = 0;
        scoreMultiplier = 0;
    
        upgrade1ButtonStatus = 0;
        upgrade1ButtonCost = 0;
        upgrade2ButtonStatus = 0;
        upgrade2ButtonCost = 35;
        upgrade3ButtonStatus = 0;
        upgrade3ButtonCost = 100;
        upgrade4ButtonStatus = 0;
        upgrade4ButtonCost = 500;

        upgrade2Button.hidden = true;
        upgrade3Button.hidden = true;
        upgrade4Button.hidden = true;

        up1up2Line.hidden = true;
        up1up4Line.hidden = true;
        up2up3Line.hidden = true;
    }
}
ascendUpgrade1Button.onclick = function ascendUpgrade1() {
    if (ascensionScore >= ascendUpgrade1Cost) {
        ascensionScore = ascensionScore - ascendUpgrade1Cost;
        ascendButtonCost = ascendButtonCost - 500;
        ascendUpgrade1Status++;
        ascendUpgrade1Cost++;
    }
}
ascendUpgrade2Button.onclick = function ascendUpgrade2() {
    if (ascensionScore >= ascendUpgrade2Cost) {
        ascensionScore = ascensionScore - ascendUpgrade2Cost;
        upgrade2Multiplier = upgrade2Multiplier + 0.1;
        ascendUpgrade2Cost = ascendUpgrade2Cost + 1;
        ascendUpgrade2Status++;
    }
}
ascendUpgrade3Button.onclick = function ascendUpgrade3() {
    if (ascensionScore >= ascendUpgrade3Cost) {
        ascensionScore = ascensionScore - ascendUpgrade3Cost;
        upgrade2MaxLevel++;
        ascendUpgrade3Cost = ascendUpgrade3Cost + ascendUpgrade3Cost;
        ascendUpgrade3Status++;
    }
}
ascendUpgrade4Button.onclick = function ascendUpgrade4() {
    if (ascensionScore >= ascendUpgrade4Cost) {
        ascensionScore = ascensionScore - ascendUpgrade4Cost;
        upgrade1ButtonMaxLevel++;
        ascendUpgrade4Cost = ascendUpgrade4Cost + 0.5;
        ascendUpgrade4Status++;
    }
}
ascendUpgrade5Button.onclick = function ascendUpgrade5() {
    if (ascensionScore >= ascendUpgrade5Cost) {
        ascensionScore = ascensionScore - ascendUpgrade5Cost;
        upgrade1ButtonMultiplier = upgrade1ButtonMultiplier + 0.5;
        ascendUpgrade5Cost = ascendUpgrade5Cost + 1.5;
        ascendUpgrade5Status++;
    }
}
ascendUpgrade6Button.onclick = function ascendUpgrade6() {
    if (ascensionScore >= ascendUpgrade6Cost) {
        ascensionScore = ascensionScore - ascendUpgrade6Cost;
        ascendUpgrade6Cost = ascendUpgrade6Cost + 2;
        ascendUpgrade6Status++;
        upgrade3Multiplier = upgrade3Multiplier + 0.2;
    }
}
upgrade1Button.onclick = function upgrade1() {
    if (currentScore >= upgrade1ButtonCost) {
        currentScore = currentScore - upgrade1ButtonCost;
        upgrade1ButtonCost = upgrade1ButtonCost + 15;
        scoreMultiplier = scoreMultiplier + upgrade1ButtonMultiplier;
        upgrade1ButtonStatus++;
    }
}
upgrade2Button.onclick = function upgrade2() {
    if (currentScore >= upgrade2ButtonCost) {
        currentScore = currentScore - upgrade2ButtonCost;
        scoreMultiplier = scoreMultiplier * upgrade2Multiplier.toFixed(1);
        upgrade2ButtonStatus++;
        upgrade2ButtonCost = upgrade2ButtonCost * 10;
    }
}
upgrade3Button.onclick = function upgrade3() {
    if (currentScore >= upgrade3ButtonCost) {
        currentScore = currentScore - upgrade3ButtonCost;
        scoreMultiplier = scoreMultiplier * (scoreMultiplier * upgrade3Multiplier);
        upgrade3ButtonStatus++;
        upgrade3ButtonCost = upgrade3ButtonCost + 900;
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
    ___                              _           
   /   |  _____________  ____  _____(_)___  ____ 
  / /| | / ___/ ___/ _ \/ __ \/ ___/ / __ \/ __ \
 / ___ |(__  ) /__/  __/ / / (__  ) / /_/ / / / /
/_/  |_/____/\___/\___/_/ /_/____/_/\____/_/ /_/                                                
*/
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("ascendButtonMenu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*
   __  _                    __                        __      
  / /_(_)___ ___  ___  ____/ /  ___ _   _____  ____  / /______
 / __/ / __ `__ \/ _ \/ __  /  / _ \ | / / _ \/ __ \/ __/ ___/
/ /_/ / / / / / /  __/ /_/ /  /  __/ |/ /  __/ / / / /_(__  ) 
\__/_/_/ /_/ /_/\___/\__,_/   \___/|___/\___/_/ /_/\__/____/ 
*/ 
setInterval(upgradeBlockingTimedEvents, 1);
function upgradeBlockingTimedEvents() {

    ascensionResetScore = currentScore / ascendButtonCost;

    //ASCEND 1 UPG
    if (ascendUpgrade1Status === 2) {
        ascendUpgrade1ButtonToolTipText.innerHTML = "Decrease Ascension Cost by 500 (Level MAX)"
        ascendUpgrade1Button.disabled = true;
        ascendUpgrade6Button.hidden = false;
        au1au6Line.hidden = false;
    } else {
        ascendUpgrade1ButtonToolTipText.innerHTML = "Decrease Ascension Cost by 500 (" + ascendUpgrade1Cost + " AP) (Level " + ascendUpgrade1Status + "/2)"
        ascendUpgrade6Button.hidden = true;
        au1au6Line.hidden = true;
        ascendUpgrade1Button.disabled = false;
    }
    if(ascendUpgrade1Status >= 1) {
        ascendUpgrade2Button.hidden = false;
        ascendUpgrade4Button.hidden = false;
        au1au2Line.hidden = false;
        au1au4Line.hidden = false;
    } else {
        ascendUpgrade2Button.hidden = true;
        ascendUpgrade4Button.hidden = true;
        au1au2Line.hidden = true;
        au1au4Line.hidden = true;
    }
        //ASCEND 2 UPG
    if(ascendUpgrade2Status === 9) {
        ascendUpgrade2Button.disabled = true;
        ascendUpgrade2ButtonToolTipText.innerHTML = "Increase Upgrade2 Multiplier by 0.1 (Level MAX)"
    } else {
        ascendUpgrade2Button.disabled = false;
        ascendUpgrade2ButtonToolTipText.innerHTML = "Increase Upgrade2 Multiplier by 0.1 (Level " + ascendUpgrade2Status + "/9) (" + ascendUpgrade2Cost + " AP)";
    }
    if(ascendUpgrade2Status >= 4) {
        ascendUpgrade3Button.hidden = false;
        au2au3Line.hidden = false;
    } else {
        ascendUpgrade3Button.hidden = true;
        au2au3Line.hidden = true;
    }
    
        //ASCEND 3 UPG
    if(ascendUpgrade3Status === 2) {
        ascendUpgrade3Button.disabled = true;
        ascendUpgrade3ButtonToolTipText.innerHTML = "Add Another Level to Upgrade 2 (Level MAX)";
    } else {
        ascendUpgrade3Button.disabled = false;
        ascendUpgrade3ButtonToolTipText.innerHTML = "Add Another Level to Upgrade 2 (Level " + ascendUpgrade3Status + "/2) (" + ascendUpgrade3Cost + " AP)";
    }
        //ASCEND 4 UPG
    if(ascendUpgrade4Status === 5) {
        ascendUpgrade4Button.disabled = true;
        ascendUpgrade4ButtonToolTipText.innerHTML = "Increase Upgrade1 Level Count (Level MAX)";
    } else {
        ascendUpgrade4Button.disabled = false;
        ascendUpgrade4ButtonToolTipText.innerHTML = "Increase Upgrade1 Level Count (Level " + ascendUpgrade4Status + "/5) (" + ascendUpgrade4Cost + " AP)";
    }
    if(ascendUpgrade4Status >= 1) {
        ascendUpgrade5Button.hidden = false;
        au4au5Line.hidden = false;
    } else {
        ascendUpgrade5Button.hidden = true;
        au4au5Line.hidden = true;
    }
        //ASCEND 5 UPG
    if(ascendUpgrade5Status === 5) {
        ascendUpgrade5Button.disabled = true;
        ascendUpgrade5ButtonToolTipText.innerHTML = "Increase Upgrade1 by 0.5 (Level MAX)";
    } else {
        ascendUpgrade5Button.disabled = false;
        ascendUpgrade5ButtonToolTipText.innerHTML = "Increase Upgrade1 by 0.5 (Level " + ascendUpgrade5Status + "/4) (" + ascendUpgrade5Cost + " AP)";
    }
        //ASCEND 6 UPG
    if(ascendUpgrade6Status === 2) {
        ascendUpgrade6Button.disabled = true;
        ascendUpgrade6ButtonToolTipText.innerHTML = "Increase Upgrade3 by 0.2 (Level MAX)";
    } else {
        ascendUpgrade6Button.disabled = false;
        ascendUpgrade6ButtonToolTipText.innerHTML = "Increase Upgrade3 by 0.2 (Level " + ascendUpgrade6Status + "/2) (" + ascendUpgrade6Cost + " AP)";
    }
    //UPGRADE 1 BUTTON
    if (upgrade1ButtonStatus === upgrade1ButtonMaxLevel) {
        upgrade1Button.disabled = true;
        upgrade1Button.innerHTML = "Increase SPS + " + upgrade1ButtonMultiplier + " (Level MAX)"
    } else {
        upgrade1Button.disabled = false;
        upgrade1Button.innerHTML = "Increase SPS + " + upgrade1ButtonMultiplier + " (Level " + upgrade1ButtonStatus + "/" + upgrade1ButtonMaxLevel + ") Cost:" + upgrade1ButtonCost;
    }
    if (upgrade1ButtonStatus >= 3) {
        upgrade2Button.hidden = false;
        up1up2Line.hidden = false;
    } else {
        upgrade2Button.hidden = true;
        up1up2Line.hidden = true;
    }
    if (upgrade1ButtonStatus >= 10) {
        upgrade4Button.hidden = false;
        up1up4Line.hidden = false;
    } else {
        upgrade4Button.hidden = true;
        up1up4Line.hidden = true;
    }

    //UPGRADE 2 BUTTON
    if(upgrade2ButtonStatus === upgrade2MaxLevel) {
        upgrade2Button.disabled = true;
        upgrade2Button.innerHTML = "Increase SPS * " + upgrade2Multiplier.toFixed(1) + " (Level MAX)"

    } else {
        upgrade2Button.disabled = false;
        upgrade2Button.innerHTML = "Increase SPS * " + upgrade2Multiplier.toFixed(1) + " (Level " + upgrade2ButtonStatus + "/" + upgrade2MaxLevel + ") Cost:" + upgrade2ButtonCost;
    }
    if (upgrade2ButtonStatus >= 1) {
        upgrade3Button.hidden = false;
        up2up3Line.hidden = false;
    } else {
        upgrade3Button.hidden = true;
        up2up3Line.hidden = true;
    }

    //UPGRADE 3 BUTTON
    if(upgrade3ButtonStatus === upgrade3ButtonMaxLevel) {
        upgrade3Button.disabled = true;
        upgrade3Button.innerHTML = "Increase SPS ^ " + upgrade3Multiplier.toFixed(1) + " (Level MAX)"
    } else {
        upgrade3Button.disabled = false;
        upgrade3Button.innerHTML = "Increase SPS ^ " + upgrade3Multiplier.toFixed(1) + " (Level " + upgrade3ButtonStatus + "/" + upgrade3ButtonMaxLevel + ") Cost: " + upgrade3ButtonCost;
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

        // COLOUR ASCEND 1 UPG
    if (ascensionScore >= ascendUpgrade1Cost) {
        ascendUpgrade1Button.style.borderColor = "green";
    } else {
        ascendUpgrade1Button.style.borderColor = "red";
    }
    if (ascendUpgrade1Status === 2) {
        ascendUpgrade1Button.style.borderColor = "white";
    }
        // COLOUR ASCEND 2 UPG
    if (ascensionScore >= ascendUpgrade2Cost) {
        ascendUpgrade2Button.style.borderColor = "green";
    } else {
        ascendUpgrade2Button.style.borderColor = "red";
    }
    if (ascendUpgrade2Status === 9) {
        ascendUpgrade2Button.style.borderColor = "white";
    }
        // COLOUR ASCEND 3 UPG
    if (ascensionScore >= ascendUpgrade3Cost) {
        ascendUpgrade3Button.style.borderColor = "green";
    } else {
        ascendUpgrade3Button.style.borderColor = "red";
    }
    if (ascendUpgrade3Status === 2) {
        ascendUpgrade3Button.style.borderColor = "white";
    }
        // COLOUR ASCEND 4 UPG
    if (ascensionScore >= ascendUpgrade4Cost) {
        ascendUpgrade4Button.style.borderColor = "green";
    } else {
        ascendUpgrade4Button.style.borderColor = "red";
    }
    if (ascendUpgrade4Status === 5) {
        ascendUpgrade4Button.style.borderColor = "white";
    }
        // COLOUR ASCEND 5 UPG
    if (ascensionScore >= ascendUpgrade5Cost) {
        ascendUpgrade5Button.style.borderColor = "green";
    } else {
        ascendUpgrade5Button.style.borderColor = "red";
    }
    if (ascendUpgrade5Status === 5) {
        ascendUpgrade5Button.style.borderColor = "white";
    }
        // COLOUR ASCEND 6 UPG
    if (ascensionScore >= ascendUpgrade6Cost) {
        ascendUpgrade6Button.style.borderColor = "green";
    } else {
        ascendUpgrade6Button.style.borderColor = "red";
    }
    if (ascendUpgrade6Status === 2) {
        ascendUpgrade6Button.style.borderColor = "white";
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
    if(upgrade1ButtonStatus === upgrade1ButtonMaxLevel) {
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
    if(upgrade2ButtonStatus === upgrade2MaxLevel) {
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
    if(upgrade3ButtonStatus === upgrade3ButtonMaxLevel) {
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
    document.getElementById("displaytext").innerHTML = currentScore.toFixed(2) + " Score";

    //AP Logic
    document.getElementById("ascensionScore").innerHTML = ascensionScore.toFixed(2) + " AP";
    ascendButton.innerHTML = "Ascension Point Cost: " + ascendButtonCost + " (You will gain: " + ascensionResetScore.toFixed(2) + " AP)";

    // SPS Logic
    scorePerSecond.innerHTML = scoreMultiplier.toFixed(2) + " SPS";
    localStorage.savedScore = currentScore;
    localStorage.savedScoreMultiplier = scoreMultiplier;


        //ascend button
    localStorage.savedAscensionScore = ascensionScore;
    localStorage.savedAscensionResetScore = ascensionResetScore;
    localStorage.savedAscendButtonCost = ascendButtonCost;
        //ascend 1 upgrade
    localStorage.savedAscendUpgrade1Cost = ascendUpgrade1Cost;
    localStorage.savedAscendUpgrade1Status = ascendUpgrade1Status;
        //ascend 2 upgrade
    localStorage.savedAscendUpgrade2Cost = ascendUpgrade2Cost;
    localStorage.savedAscendUpgrade2Status = ascendUpgrade2Status;
        //ascend 3 upgrade
    localStorage.savedAscendUpgrade3Cost = ascendUpgrade3Cost;
    localStorage.savedAscendUpgrade3Status = ascendUpgrade3Status;
        //ascend 4 upgrade
    localStorage.savedAscendUpgrade4Cost = ascendUpgrade4Cost;
    localStorage.savedAscendUpgrade4Status = ascendUpgrade4Status;
        //ascend 5 upgrade
    localStorage.savedAscendUpgrade5Cost = ascendUpgrade5Cost;
    localStorage.savedAscendUpgrade5Status = ascendUpgrade5Status;
        //ascend 6 upgrade
    localStorage.savedAscendUpgrade6Cost = ascendUpgrade6Cost;
    localStorage.savedAscendUpgrade6Status = ascendUpgrade6Status;
        // upgrade 1 button
    localStorage.savedUpgrade1ButtonStatus = upgrade1ButtonStatus;
    localStorage.savedUpgrade1ButtonCost = upgrade1ButtonCost;
    localStorage.savedUpgrade1ButtonMaxLevel = upgrade1ButtonMaxLevel;
    localStorage.savedUpgrade1ButtonMultiplier = upgrade1ButtonMultiplier;
        // upgrade 2 button
    localStorage.savedUpgrade2ButtonStatus = upgrade2ButtonStatus;
    localStorage.savedUpgrade2ButtonCost = upgrade2ButtonCost;
    localStorage.setItem("savedUpgrade2Multiplier", upgrade2Multiplier.toString());
    localStorage.savedUpgrade2ButtonMaxLevel = upgrade2MaxLevel;
        //upgrade 3 button
    localStorage.savedUpgrade3ButtonStatus = upgrade3ButtonStatus;
    localStorage.savedUpgrade3ButtonCost = upgrade3ButtonCost;
    localStorage.savedUpgradeButton3MaxLevel = upgrade3ButtonMaxLevel;
    localStorage.setItem("savedUpgrade3Multiplier", upgrade3Multiplier.toString());
        //upgrade 4 button
    localStorage.savedUpgrade4ButtonStatus = upgrade4ButtonStatus;
    localStorage.savedUpgrade4ButtonCost = upgrade4ButtonCost;
}

/*
   _____             _                __            _     
  / ___/____ __   __(_)___  ____ _   / /___  ____ _(_)____
  \__ \/ __ `/ | / / / __ \/ __ `/  / / __ \/ __ `/ / ___/
 ___/ / /_/ /| |/ / / / / / /_/ /  / / /_/ / /_/ / / /__  
/____/\__,_/ |___/_/_/ /_/\__, /  /_/\____/\__, /_/\___/  
                         /____/           /____/          
*/ 

const deleteButton = document.getElementById("delbutton");

window.addEventListener("DOMContentLoaded", function() {

    if (localStorage.savedScore) {
        currentScore = parseInt(localStorage.savedScore);
        document.getElementById("displaytext").innerHTML = currentScore; }
    if (localStorage.savedScoreMultiplier) {
        scoreMultiplier = parseInt(localStorage.savedScoreMultiplier);
        scorePerSecond.innerHTML = scoreMultiplier + " SPS"; }        

    if (localStorage.savedAscendButtonCost) {
        ascendButtonCost = parseInt(localStorage.savedAscendButtonCost); }
    if (localStorage.savedAscensionScore) {
        ascensionScore = parseInt(localStorage.savedAscensionScore); }    
    if (localStorage.savedAscensionResetScore) {
        ascensionResetScore = parseInt(localStorage.savedAscensionResetScore); }     

    if (localStorage.savedAscendUpgrade1Cost) {
        ascendUpgrade1Cost = parseInt(localStorage.savedAscendUpgrade1Cost); }
    if (localStorage.savedAscendUpgrade1Status) {
        ascendUpgrade1Status = parseInt(localStorage.savedAscendUpgrade1Status); }  

    if (localStorage.savedAscendUpgrade2Cost) {
        ascendUpgrade2Cost = parseInt(localStorage.savedAscendUpgrade2Cost); }
    if (localStorage.savedAscendUpgrade2Status) {
        ascendUpgrade2Status = parseInt(localStorage.savedAscendUpgrade2Status); }  

    if (localStorage.savedAscendUpgrade3Cost) {
        ascendUpgrade3Cost = parseInt(localStorage.savedAscendUpgrade3Cost); }
    if (localStorage.savedAscendUpgrade3Status) {
        ascendUpgrade3Status = parseInt(localStorage.savedAscendUpgrade3Status); }  
        
    if (localStorage.savedAscendUpgrade4Cost) {
        ascendUpgrade4Cost = parseInt(localStorage.savedAscendUpgrade4Cost); }
    if (localStorage.savedAscendUpgrade4Status) {
        ascendUpgrade4Status = parseInt(localStorage.savedAscendUpgrade4Status); }  
        
    if (localStorage.savedAscendUpgrade5Cost) {
        ascendUpgrade5Cost = parseInt(localStorage.savedAscendUpgrade5Cost); }
    if (localStorage.savedAscendUpgrade5Status) {
        ascendUpgrade5Status = parseInt(localStorage.savedAscendUpgrade5Status); }  

    if (localStorage.savedAscendUpgrade6Cost) {
        ascendUpgrade6Cost = parseInt(localStorage.savedAscendUpgrade6Cost); }
    if (localStorage.savedAscendUpgrade5Status) {
        ascendUpgrade6Status = parseInt(localStorage.savedAscendUpgrade6Status); }  

    if (localStorage.savedUpgrade1ButtonStatus) {
        upgrade1ButtonStatus = parseInt(localStorage.savedUpgrade1ButtonStatus); }
    if (localStorage.savedUpgrade1ButtonCost) {
        upgrade1ButtonCost = parseInt(localStorage.savedUpgrade1ButtonCost); }
    if (localStorage.savedUpgrade1ButtonMaxLevel) {
        upgrade1ButtonMaxLevel = parseInt(localStorage.savedUpgrade1ButtonMaxLevel); }
    if (localStorage.savedUpgrade1ButtonMultiplier) {
        upgrade1ButtonMultiplier = parseInt(localStorage.savedUpgrade1ButtonMultiplier); }

    if (localStorage.savedUpgrade2ButtonStatus) {
        upgrade2ButtonStatus = parseInt(localStorage.savedUpgrade2ButtonStatus); }
    if (localStorage.savedUpgrade2ButtonCost) {
        upgrade2ButtonCost = parseInt(localStorage.savedUpgrade2ButtonCost); }
    if (localStorage.savedUpgrade2Multiplier) {
        upgrade2Multiplier = parseFloat(localStorage.savedUpgrade2Multiplier); }
    if (localStorage.savedUpgrade2ButtonMaxLevel) {
        upgrade2MaxLevel = parseInt(localStorage.savedUpgrade2ButtonMaxLevel); }

    if (localStorage.savedUpgrade3ButtonStatus) {
        upgrade3ButtonStatus = parseInt(localStorage.savedUpgrade3ButtonStatus); }
    if (localStorage.savedUpgrade3ButtonCost) {
        upgrade3ButtonCost = parseInt(localStorage.savedUpgrade3ButtonCost); }
    if (localStorage.savedUpgrade3ButtonMaxLevel) {
        upgrade3ButtonMaxLevel = parseInt(localStorage.savedUpgrade3ButtonMaxLevel); }      
    if (localStorage.savedUpgrade3Multiplier) {
        upgrade3Multiplier = parseFloat(localStorage.savedUpgrade3Multiplier); }  

    if (localStorage.savedUpgrade4ButtonStatus) {
        upgrade4ButtonStatus = parseInt(localStorage.savedUpgrade4ButtonStatus); }
    if (localStorage.savedUpgrade4ButtonCost) {
        upgrade4ButtonCost = parseInt(localStorage.savedUpgrade4ButtonCost); }
});

deleteButton.onclick = function deleteProgress() {
    currentScore = 0;
    scoreMultiplier = 0;

    ascensionScore = 0;
    ascensionResetScore = 0;
    ascendButtonCost = 10000;

    ascendUpgrade1Status = 0;
    ascendUpgrade1Cost = 1;

    ascendUpgrade2Status = 0;
    ascendUpgrade2Cost = 2;

    ascendUpgrade3Status = 0;
    ascendUpgrade3Cost = 7;
    
    ascendUpgrade4Status = 0;
    ascendUpgrade4Cost = 1;

    ascendUpgrade5Status = 0;
    ascendUpgrade5Cost = 3;
    
    ascendUpgrade6Status = 0;
    ascendUpgrade6Cost = 4;

    upgrade1ButtonStatus = 0;
    upgrade1ButtonCost = 0;
    upgrade1ButtonMaxLevel = 10;
    upgrade1ButtonMultiplier = 1;

    upgrade2ButtonStatus = 0;
    upgrade2ButtonCost = 35;
    upgrade2Multiplier = 1.1;
    upgrade2MaxLevel = 1;
    
    upgrade3ButtonStatus = 0;
    upgrade3ButtonCost = 100;
    upgrade3ButtonMaxLevel = 1;
    upgrade3Multiplier = 0.1;

    upgrade4ButtonStatus = 0;
    upgrade4ButtonCost = 500;

    document.getElementById("displaytext").innerHTML = currentScore;
    scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    document.getElementById("ascensionScore").innerHTML = ascensionScore;

    ascendButton.innerHTML = "Ascension Point Cost: " + ascendButtonCost + " (You will gain: " + ascensionResetScore + " AP)";
    ascendUpgrade1Button = "Decrease Ascension Cost by 500 (" + ascendUpgrade1Cost + " AP) (Level " + ascendUpgrade1Status + "/2)"
    ascendUpgrade2Button.hidden = true;
    ascendUpgrade3Button.hidden = true;
    ascendUpgrade4Button.hidden = true;
    ascendUpgrade5Button.hidden = true;
    ascendUpgrade6Button.hidden = true;

    au1au2Line.hidden = true;
    au1au4Line.hidden = true;
    au1au6Line.hidden = true;
    au2au3Line.hidden = true;
    au4au5Line.hidden = true;

    upgrade1Button.innerHTML = "Increase SPS + " + upgrade1ButtonMultiplier + " (Level " + upgrade1ButtonStatus + "/15) Cost:" + upgrade1ButtonCost;
    upgrade2Button.hidden = true;
    upgrade3Button.hidden = true;
    upgrade4Button.hidden = true;

    up1up2Line.hidden = true;
    up1up4Line.hidden = true;
    up2up3Line.hidden = true;

    localStorage.removeItem("savedScore");
    localStorage.removeItem("savedScoreMultiplier");

    localStorage.removeItem("savedAscensionScore");
    localStorage.removeItem("savedAscensionResetScore");
    localStorage.removeItem("savedAscendButtonCost");
    localStorage.removeItem("savedAscendButtonStatus"); // REMOVE ON 24/09 PATCH

    localStorage.removeItem("savedAscendUpgrade1Cost");
    localStorage.removeItem("savedAscendUpgrade1Status");

    localStorage.removeItem("savedAscendUpgrade2Cost");
    localStorage.removeItem("savedAscendUpgrade2Status");
    
    localStorage.removeItem("savedAscendUpgrade3Cost");
    localStorage.removeItem("savedAscendUpgrade3Status");

    localStorage.removeItem("savedAscendUpgrade4Cost");
    localStorage.removeItem("savedAscendUpgrade4Status");

    localStorage.removeItem("savedAscendUpgrade5Cost");
    localStorage.removeItem("savedAscendUpgrade5Status");
    
    localStorage.removeItem("savedAscendUpgrade6Cost");
    localStorage.removeItem("savedAscendUpgrade6Status");

    localStorage.removeItem("savedUpgrade1ButtonStatus");
    localStorage.removeItem("savedUpgrade1ButtonCost");
    localStorage.removeItem("savedUpgrade1ButtonMaxLevel");
    localStorage.removeItem("savedUpgrade1ButtonMultiplier");

    localStorage.removeItem("savedUpgrade2ButtonStatus");
    localStorage.removeItem("savedUpgrade2ButtonCost");
    localStorage.removeItem("savedUpgrade2Multiplier");
    localStorage.removeItem("savedUpgrade2MaxLevel");
    
    localStorage.removeItem("savedUpgrade3ButtonStatus");
    localStorage.removeItem("savedUpgrade3ButtonCost");
    localStorage.removeItem("savedUpgrade3ButtonMaxLevel");
    localStorage.removeItem("savedUpgrade3Multiplier");

    localStorage.removeItem("savedUpgrade4ButtonStatus");
    localStorage.removeItem("savedUpgrade4ButtonCost");
}