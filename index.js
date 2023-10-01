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
let ascendMultiplier = 1;
let ascendConvertMultiplier = 5000;
let ascendConvertCost = 1;

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
let ascendUpgrade7Status = 0;
let ascendUpgrade7Cost = 8;
let ascendUpgrade8Status = 0;
let ascendUpgrade8Cost = 5;
let ascendUpgrade9Status = 0;
let ascendUpgrade9Cost = 10;

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
let upgrade5ButtonStatus = 0;
let upgrade5ButtonCost = 9999;
let upgrade5Multiplier = 0;

const display = document.getElementsByClassName("display");
const scorePerSecond = document.getElementById("scorepersecond");

const ascendButton = document.getElementById("ascendbutton");
const ascendConvert = document.getElementById("ascendConvert");
const ascendConvertTooltipText = document.getElementById("ascendConvertTooltipText");

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
const ascendUpgrade7Button = document.getElementById("ascendUpgrade7");
const ascendUpgrade7ButtonToolTipText = document.getElementById("ascendUpgrade7ToolTipText");
const ascendUpgrade8Button = document.getElementById("ascendUpgrade8");
const ascendUpgrade8ButtonToolTipText = document.getElementById("ascendUpgrade8ToolTipText");
const ascendUpgrade9Button = document.getElementById("ascendUpgrade9");
const ascendUpgrade9ButtonToolTipText = document.getElementById("ascendUpgrade9ToolTipText");

const au1au2Line = document.getElementById("au1-au2");
const au1au4Line = document.getElementById("au1-au4");
const au1au6Line = document.getElementById("au1-au6");
const au1au7Line = document.getElementById("au1-au7");
const au2au3Line = document.getElementById("au2-au3");
const au4au5Line = document.getElementById("au4-au5");
const au7au8Line = document.getElementById("au7-au8");
const au8au9Line = document.getElementById("au8-au9");

const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const upgrade3Button = document.getElementById("upgrade3");
const upgrade4Button = document.getElementById("upgrade4");
const upgrade5Button = document.getElementById("upgrade5");

const up1up2Line = document.getElementById("up1-up2");
const up1up4Line = document.getElementById("up1-up4");
const up2up3Line = document.getElementById("up2-up3");
const up4up5Line = document.getElementById("up4-up5");

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
        upgrade5ButtonStatus = 0;
        upgrade5ButtonCost = 9999;
        upgrade5Multiplier = 0;

        upgrade2Button.hidden = true;
        upgrade3Button.hidden = true;
        upgrade4Button.hidden = true;
        upgrade5Button.hidden = true;

        up1up2Line.hidden = true;
        up1up4Line.hidden = true;
        up2up3Line.hidden = true;
        up4up5Line.hidden = true;
    }
}
ascendConvert.onclick = function ascendConvert() {
    if (ascensionScore >= 0.001) {
        currentScore = currentScore + (ascensionScore * ascendConvertMultiplier);
        ascensionScore = ascensionScore - ascensionScore;
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
        upgrade3Multiplier = upgrade3Multiplier + 0.05;
    }
}
ascendUpgrade7Button.onclick = function ascendUpgrade7() {
    if (ascensionScore >= ascendUpgrade7Cost) {
        ascensionScore = ascensionScore - ascendUpgrade7Cost;
        ascendUpgrade7Cost = ascendUpgrade7Cost + 4;
        ascendUpgrade7Status++;
        ascendMultiplier = ascendMultiplier + 0.1;
    }
}
ascendUpgrade8Button.onclick = function ascendUpgrade8() {
    if (ascensionScore >= ascendUpgrade8Cost) {
        ascensionScore = ascensionScore - ascendUpgrade8Cost;
        ascendUpgrade8Cost = ascendUpgrade8Cost + 2;
        ascendUpgrade8Status++;
        ascendConvertMultiplier = ascendConvertMultiplier + 1000;
    }
}
ascendUpgrade9Button.onclick = function ascendUpgrade9() {
    if (ascensionScore >= ascendUpgrade9Cost) {
        ascensionScore = ascensionScore - ascendUpgrade9Cost;
        ascendUpgrade9Cost = ascendUpgrade9Cost + 3;
        ascendUpgrade9Status++;
        ascendConvertCost = ascendConvertCost - 0.05;
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
upgrade5Button.onclick = function upgrade5() {
    if (currentScore >= upgrade5ButtonCost) {
        currentScore = currentScore - upgrade5ButtonCost;
        upgrade5ButtonCost = upgrade5ButtonCost + 90000;
        upgrade5Multiplier = upgrade5Multiplier + 0.1;
        upgrade5ButtonStatus++;
    }
}

/*
    ____                              
   / __ \____  ____        __  ______ 
  / /_/ / __ \/ __ \______/ / / / __ \
 / ____/ /_/ / /_/ /_____/ /_/ / /_/ /
/_/    \____/ .___/      \__,_/ .___/ 
           /_/               /_/      
*/
let aModal = document.getElementById("ascensionModal");
let aBtn = document.getElementById("ascendButtonMenu");
let iModal = document.getElementById("infoModal");
let iBtn = document.getElementById("infoButton");
var aSpan = document.getElementById("aClose");
var iSpan = document.getElementById("iClose");

// When the user clicks on the button, open the modal
aBtn.onclick = function() {
  aModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aSpan.onclick = function() {
  aModal.style.display = "none";
}

// When the user clicks on the button, open the modal
iBtn.onclick = function() {
  iModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
iSpan.onclick = function() {
  iModal.style.display = "none";
}

// Handle clicks outside of modals to close them
window.onclick = function(event) {
  if (event.target == aModal) {
    aModal.style.display = "none";
  } else if (event.target == iModal) {
    iModal.style.display = "none";
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
    if(ascensionScore >= 0.001) {
        ascendConvert.style.borderColor = "green";
    } else {
        ascendConvert.style.borderColor = "red";
    }
        // COLOUR ASCEND 1 UPG
    if (ascensionScore >= ascendUpgrade1Cost) {
        ascendUpgrade1Button.style.borderColor = "green";
    } else {
        ascendUpgrade1Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 2 UPG
    if (ascensionScore >= ascendUpgrade2Cost) {
        ascendUpgrade2Button.style.borderColor = "green";
    } else {
        ascendUpgrade2Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 3 UPG
    if (ascensionScore >= ascendUpgrade3Cost) {
        ascendUpgrade3Button.style.borderColor = "green";
    } else {
        ascendUpgrade3Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 4 UPG
    if (ascensionScore >= ascendUpgrade4Cost) {
        ascendUpgrade4Button.style.borderColor = "green";
    } else {
        ascendUpgrade4Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 5 UPG
    if (ascensionScore >= ascendUpgrade5Cost) {
        ascendUpgrade5Button.style.borderColor = "green";
    } else {
        ascendUpgrade5Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 6 UPG
    if (ascensionScore >= ascendUpgrade6Cost) {
        ascendUpgrade6Button.style.borderColor = "green";
    } else {
        ascendUpgrade6Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 7 UPG
    if (ascensionScore >= ascendUpgrade7Cost) {
        ascendUpgrade7Button.style.borderColor = "green";
    } else {
        ascendUpgrade7Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 8 UPG
    if (ascensionScore >= ascendUpgrade8Cost) {
        ascendUpgrade8Button.style.borderColor = "green";
    } else {
        ascendUpgrade8Button.style.borderColor = "red";
    }
        // COLOUR ASCEND 9 UPG
    if (ascensionScore >= ascendUpgrade9Cost) {
        ascendUpgrade9Button.style.borderColor = "green";
    } else {
        ascendUpgrade9Button.style.borderColor = "red";
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
        // COLOUR UPG5
    if (currentScore >= upgrade5ButtonCost) {
        upgrade5Button.style.borderColor = "green";
        upgrade5Button.style.backgroundColor = "lightgreen";
        upgrade5Button.style.color = "black";
    } else {
        upgrade5Button.style.borderColor = "red";
        upgrade5Button.style.backgroundColor = "pink";
        upgrade5Button.style.color = "black";
    }

/*
    ____                   __              __  __          __      __           
   / __ \___  ____ ___  __/ /___ ______   / / / /___  ____/ /___ _/ /____  _____
  / /_/ / _ \/ __ `/ / / / / __ `/ ___/  / / / / __ \/ __  / __ `/ __/ _ \/ ___/
 / _, _/  __/ /_/ / /_/ / / /_/ / /     / /_/ / /_/ / /_/ / /_/ / /_/  __(__  ) 
/_/ |_|\___/\__, /\__,_/_/\__,_/_/      \____/ .___/\__,_/\__,_/\__/\___/____/  
           /____/                           /_/                                     
*/
    //ASCEND 1 UPG
    if (ascendUpgrade1Status === 2) {
        ascendUpgrade1ButtonToolTipText.innerHTML = "Decrease Ascension Cost by 500 (Level MAX)"
        ascendUpgrade1Button.style.borderColor = "white";
        ascendUpgrade1Button.disabled = true;

        ascendUpgrade6Button.hidden = false;
        au1au6Line.hidden = false;
        ascendUpgrade7Button.hidden = false;
        au1au7Line.hidden = false;
    } else {
        ascendUpgrade1ButtonToolTipText.innerHTML = "Decrease Ascension Cost by 500 (" + ascendUpgrade1Cost + " AP) (Level " + ascendUpgrade1Status + "/2)"
        ascendUpgrade1Button.disabled = false;
        
        au1au6Line.hidden = true;
        ascendUpgrade6Button.hidden = true;
        au1au7Line.hidden = true;
        ascendUpgrade7Button.hidden = true;
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
        ascendUpgrade2Button.style.borderColor = "white";
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
        ascendUpgrade3Button.style.borderColor = "white";
    } else {
        ascendUpgrade3Button.disabled = false;
        ascendUpgrade3ButtonToolTipText.innerHTML = "Add Another Level to Upgrade 2 (Level " + ascendUpgrade3Status + "/2) (" + ascendUpgrade3Cost + " AP)";
    }
        //ASCEND 4 UPG
    if(ascendUpgrade4Status === 5) {
        ascendUpgrade4Button.disabled = true;
        ascendUpgrade4ButtonToolTipText.innerHTML = "Increase Upgrade1 Level Count (Level MAX)";
        ascendUpgrade4Button.style.borderColor = "white";
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
        ascendUpgrade5Button.style.borderColor = "white";
    } else {
        ascendUpgrade5Button.disabled = false;
        ascendUpgrade5ButtonToolTipText.innerHTML = "Increase Upgrade1 by 0.5 (Level " + ascendUpgrade5Status + "/4) (" + ascendUpgrade5Cost + " AP)";
    }
        //ASCEND 6 UPG
    if(ascendUpgrade6Status === 2) {
        ascendUpgrade6Button.disabled = true;
        ascendUpgrade6ButtonToolTipText.innerHTML = "Increase Upgrade3 by 0.05 (Level MAX)";
        ascendUpgrade6Button.style.borderColor = "white";
    } else {
        ascendUpgrade6Button.disabled = false;
        ascendUpgrade6ButtonToolTipText.innerHTML = "Increase Upgrade3 by 0.05 (Level " + ascendUpgrade6Status + "/2) (" + ascendUpgrade6Cost + " AP)";
    }
        //ASCEND 7 UPG
    if(ascendUpgrade7Status === 5) {
        ascendUpgrade7Button.disabled = true;
        ascendUpgrade7ButtonToolTipText.innerHTML = "Increase Ascension Multiplier by 0.1 (Level MAX)";
        ascendUpgrade7Button.style.borderColor = "white";
    } else {
        ascendUpgrade7Button.disabled = false;
        ascendUpgrade7ButtonToolTipText.innerHTML = "Increase Ascension Multiplier by 0.1 (Level " + ascendUpgrade7Status + "/5) " + ascendUpgrade7Cost + " AP)";
    }
    if (ascendUpgrade7Status >= 1) {
        ascendUpgrade8Button.hidden = false;
        au7au8Line.hidden = false;
    }else {
        ascendUpgrade8Button.hidden = true;
        au7au8Line.hidden = true;
    }
        //ASCEND 8 UPG
    if(ascendUpgrade8Status === 5) {
        ascendUpgrade8Button.disabled = true;
        ascendUpgrade8ButtonToolTipText.innerHTML = "Increase Ascension Convert Gain by 1000 (Level MAX)";
        ascendUpgrade8Button.style.borderColor = "white";
    } else {
        ascendUpgrade8Button.disabled = false;
        ascendUpgrade8ButtonToolTipText.innerHTML = "Increase Ascension Convert Gain by 1000 (Level " + ascendUpgrade8Status + "/5) (" + ascendUpgrade8Cost + " AP)";
    }
    if(ascendUpgrade8Status >= 2) {
        ascendUpgrade9Button.hidden = false;
        au8au9Line.hidden = false;
    }else {
        ascendUpgrade9Button.hidden = true;
        au8au9Line.hidden = true;
    }
        //ASCEND 9 UPG
    if(ascendUpgrade9Status === 5) {
        ascendUpgrade9Button.disabled = true;
        ascendUpgrade9ButtonToolTipText.innerHTML = "Decrease Ascension Convert AP requirement by 0.05 (Level MAX)";
        ascendUpgrade9Button.style.borderColor = "white";
    } else {
        ascendUpgrade9Button.disabled = false;
        ascendUpgrade9ButtonToolTipText.innerHTML = "Decrease Ascension Convert AP requirement by 0.05 (Level " + ascendUpgrade9Status + "/5) (" + ascendUpgrade9Cost + " AP)";
    }
    //UPGRADE 1 BUTTON
    if (upgrade1ButtonStatus === upgrade1ButtonMaxLevel) {
        upgrade1Button.disabled = true;
        upgrade1Button.innerHTML = "Increase SPS + " + upgrade1ButtonMultiplier + " (Level MAX)"
        upgrade1Button.style.borderColor = "white";
        upgrade1Button.style.backgroundColor = "black";
        upgrade1Button.style.color = "white";
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
        upgrade2Button.style.borderColor = "white";
        upgrade2Button.style.backgroundColor = "black";
        upgrade2Button.style.color = "white";

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
        upgrade3Button.style.borderColor = "white";
        upgrade3Button.style.backgroundColor = "black";
        upgrade3Button.style.color = "white";
    } else {
        upgrade3Button.disabled = false;
        upgrade3Button.innerHTML = "Increase SPS ^ " + upgrade3Multiplier.toFixed(1) + " (Level " + upgrade3ButtonStatus + "/" + upgrade3ButtonMaxLevel + ") Cost: " + upgrade3ButtonCost;
    }
    //UPGRADE 4 BUTTON
    if(upgrade4ButtonStatus === 10) {
        upgrade4Button.disabled = true;
        upgrade4Button.innerHTML = "Increase SPS + 10 (Level MAX)"
        upgrade4Button.style.borderColor = "white";
        upgrade4Button.style.backgroundColor = "black";
        upgrade4Button.style.color = "white";
    } else {
        upgrade4Button.disabled = false;
        upgrade4Button.innerHTML = "Increase SPS + 10 (Level " + upgrade4ButtonStatus + "/10) Cost: " + upgrade4ButtonCost;
    }
    if(upgrade4ButtonStatus >= 5) {
        upgrade5Button.hidden = false;
        up4up5Line.hidden = false;
    }else {
        upgrade5Button.hidden = true;
        up4up5Line.hidden = true;
    }
    //UPGRADE 5 BUTTON
    if(upgrade5ButtonStatus === 1) {
        upgrade5Button.disabled = true;
        upgrade5Button.innerHTML = "Increase SPS + 0.1 Per Second (Level MAX)"
        upgrade5Button.style.borderColor = "white";
        upgrade5Button.style.backgroundColor = "black";
        upgrade5Button.style.color = "white";
    } else {
        upgrade5Button.disabled = false;
        upgrade5Button.innerHTML = "Increase SPS + 0.1 Per Second (Level " + upgrade5ButtonStatus + "/1) Cost:" + upgrade5ButtonCost;
    }
};

setInterval(timedEvents, 1000);
function timedEvents() {
    // Score Logic
    currentScore = currentScore + scoreMultiplier;
    document.getElementById("displaytext").innerHTML = currentScore.toFixed(2) + " Score";

    // UPG-5 Logic
    scoreMultiplier = scoreMultiplier + upgrade5Multiplier;

    //AP Logic
    document.getElementById("ascensionScore").innerHTML = (ascensionScore.toFixed(2) * ascendMultiplier.toFixed(2)).toFixed(2) + " AP";
    ascendButton.innerHTML = "Ascension Point Cost: " + ascendButtonCost + " (You will gain: " + (ascensionResetScore.toFixed(2) * ascendMultiplier.toFixed(2)).toFixed(2) + " AP)";
    ascendConvertTooltipText.innerHTML = "Convert AP to Score (" + ascendConvertCost.toFixed(3) + "AP = " + ascendConvertMultiplier + " Score)"

    // SPS Logic
    scorePerSecond.innerHTML = scoreMultiplier.toFixed(2) + " SPS";
    localStorage.savedScore = currentScore;
    localStorage.savedScoreMultiplier = scoreMultiplier;



        //ascend button
    localStorage.savedAscensionScore = ascensionScore;
    localStorage.savedAscensionResetScore = ascensionResetScore;
    localStorage.savedAscendButtonCost = ascendButtonCost;
    localStorage.setItem("savedAscendMultiplier", ascendMultiplier.toString());

    localStorage.savedAscendConvertMultiplier = ascendConvertMultiplier;
    localStorage.setItem("savedAscendConvertCost", ascendConvertCost.toString());
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
        //ascend 7 upgrade
    localStorage.savedAscendUpgrade7Cost = ascendUpgrade7Cost;
    localStorage.savedAscendUpgrade7Status = ascendUpgrade7Status;
        //ascend 8 upgrade
    localStorage.savedAscendUpgrade8Cost = ascendUpgrade8Cost;
    localStorage.savedAscendUpgrade8Status = ascendUpgrade8Status;
        //ascend 9 upgrade
    localStorage.savedAscendUpgrade9Cost = ascendUpgrade9Cost;
    localStorage.savedAscendUpgrade9Status = ascendUpgrade9Status;
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
        //upgrade 5 button
    localStorage.savedUpgrade5ButtonStatus = upgrade5ButtonStatus;
    localStorage.savedUpgrade5ButtonCost = upgrade5ButtonCost;
    localStorage.setItem("savedUpgrade5Multiplier", upgrade5Multiplier.toString());
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
        document.getElementById("displaytext").innerHTML = currentScore;}

    if (localStorage.savedScoreMultiplier) {
        scoreMultiplier = parseInt(localStorage.savedScoreMultiplier);
        scorePerSecond.innerHTML = scoreMultiplier + " SPS";}

    if (localStorage.savedAscendButtonCost) {
        ascendButtonCost = parseInt(localStorage.savedAscendButtonCost);}
    if (localStorage.savedAscensionScore) {
        ascensionScore = parseInt(localStorage.savedAscensionScore);}
    if (localStorage.savedAscensionResetScore) {
        ascensionResetScore = parseInt(localStorage.savedAscensionResetScore);}
    if (localStorage.savedAscendMultiplier) {
        ascendMultiplier = parseFloat(localStorage.savedAscendMultiplier);}

    if (localStorage.savedAscendConvertMultiplier) {
        ascendConvertMultiplier = parseInt(localStorage.savedAscendConvertMultiplier);}
    if (localStorage.savedAscendConvertCost) {
        ascendConvertCost = parseFloat(localStorage.savedAscendConvertCost);}

    if (localStorage.savedAscendUpgrade1Cost) {
        ascendUpgrade1Cost = parseInt(localStorage.savedAscendUpgrade1Cost);}
    if (localStorage.savedAscendUpgrade1Status) {
        ascendUpgrade1Status = parseInt(localStorage.savedAscendUpgrade1Status);}

    if (localStorage.savedAscendUpgrade2Cost) {
        ascendUpgrade2Cost = parseInt(localStorage.savedAscendUpgrade2Cost);}
    if (localStorage.savedAscendUpgrade2Status) {
        ascendUpgrade2Status = parseInt(localStorage.savedAscendUpgrade2Status);}

    if (localStorage.savedAscendUpgrade3Cost) {
        ascendUpgrade3Cost = parseInt(localStorage.savedAscendUpgrade3Cost);}
    if (localStorage.savedAscendUpgrade3Status) {
        ascendUpgrade3Status = parseInt(localStorage.savedAscendUpgrade3Status);}

    if (localStorage.savedAscendUpgrade4Cost) {
        ascendUpgrade4Cost = parseInt(localStorage.savedAscendUpgrade4Cost);}
    if (localStorage.savedAscendUpgrade4Status) {
        ascendUpgrade4Status = parseInt(localStorage.savedAscendUpgrade4Status);}

    if (localStorage.savedAscendUpgrade5Cost) {
        ascendUpgrade5Cost = parseInt(localStorage.savedAscendUpgrade5Cost);}
    if (localStorage.savedAscendUpgrade5Status) {
        ascendUpgrade5Status = parseInt(localStorage.savedAscendUpgrade5Status);}

    if (localStorage.savedAscendUpgrade6Cost) {
        ascendUpgrade6Cost = parseInt(localStorage.savedAscendUpgrade6Cost);}
    if (localStorage.savedAscendUpgrade6Status) {
        ascendUpgrade6Status = parseInt(localStorage.savedAscendUpgrade6Status);}

    if (localStorage.savedAscendUpgrade7Cost) {
        ascendUpgrade7Cost = parseInt(localStorage.savedAscendUpgrade7Cost);}
    if (localStorage.savedAscendUpgrade7Status) {
        ascendUpgrade7Status = parseInt(localStorage.savedAscendUpgrade7Status);}

    if (localStorage.savedAscendUpgrade8Cost) {
        ascendUpgrade8Cost = parseInt(localStorage.savedAscendUpgrade8Cost);}
    if (localStorage.savedAscendUpgrade8Status) {
        ascendUpgrade8Status = parseInt(localStorage.savedAscendUpgrade8Status);}
        
    if (localStorage.savedAscendUpgrade9Cost) {
        ascendUpgrade9Cost = parseInt(localStorage.savedAscendUpgrade9Cost);}
    if (localStorage.savedAscendUpgrade9Status) {
        ascendUpgrade9Status = parseInt(localStorage.savedAscendUpgrade9Status);}

    if (localStorage.savedUpgrade1ButtonStatus) {
        upgrade1ButtonStatus = parseInt(localStorage.savedUpgrade1ButtonStatus);}
    if (localStorage.savedUpgrade1ButtonCost) {
        upgrade1ButtonCost = parseInt(localStorage.savedUpgrade1ButtonCost);}
    if (localStorage.savedUpgrade1ButtonMaxLevel) {
        upgrade1ButtonMaxLevel = parseInt(localStorage.savedUpgrade1ButtonMaxLevel);}
    if (localStorage.savedUpgrade1ButtonMultiplier) {
        upgrade1ButtonMultiplier = parseInt(localStorage.savedUpgrade1ButtonMultiplier);}

    if (localStorage.savedUpgrade2ButtonStatus) {
        upgrade2ButtonStatus = parseInt(localStorage.savedUpgrade2ButtonStatus);}
    if (localStorage.savedUpgrade2ButtonCost) {
        upgrade2ButtonCost = parseInt(localStorage.savedUpgrade2ButtonCost);}
    if (localStorage.savedUpgrade2Multiplier) {
        upgrade2Multiplier = parseFloat(localStorage.savedUpgrade2Multiplier);}
    if (localStorage.savedUpgrade2ButtonMaxLevel) {
        upgrade2MaxLevel = parseInt(localStorage.savedUpgrade2ButtonMaxLevel);}

    if (localStorage.savedUpgrade3ButtonStatus) {
        upgrade3ButtonStatus = parseInt(localStorage.savedUpgrade3ButtonStatus);}
    if (localStorage.savedUpgrade3ButtonCost) {
        upgrade3ButtonCost = parseInt(localStorage.savedUpgrade3ButtonCost);}
    if (localStorage.savedUpgrade3ButtonMaxLevel) {
        upgrade3ButtonMaxLevel = parseInt(localStorage.savedUpgrade3ButtonMaxLevel);}
    if (localStorage.savedUpgrade3Multiplier) {
        upgrade3Multiplier = parseFloat(localStorage.savedUpgrade3Multiplier);}

    if (localStorage.savedUpgrade4ButtonStatus) {
        upgrade4ButtonStatus = parseInt(localStorage.savedUpgrade4ButtonStatus);}
    if (localStorage.savedUpgrade4ButtonCost) {
        upgrade4ButtonCost = parseInt(localStorage.savedUpgrade4ButtonCost);}

    if (localStorage.savedUpgrade5ButtonStatus) {
        upgrade5ButtonStatus = parseInt(localStorage.savedUpgrade5ButtonStatus);}
    if (localStorage.savedUpgrade5ButtonCost) {
        upgrade5ButtonCost = parseInt(localStorage.savedUpgrade5ButtonCost);}
    if (localStorage.savedUpgrade5Multiplier) {
        upgrade5Multiplier = parseFloat(localStorage.savedUpgrade5Multiplier);}
});


deleteButton.onclick = function deleteProgress() {
    currentScore = 0;
    scoreMultiplier = 0;

    ascensionScore = 0;
    ascensionResetScore = 0;
    ascendButtonCost = 10000;
    ascendMultiplier = 1;

    ascendConvertMultiplier = 5000;
    ascendConvertCost = 1;

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

    ascendUpgrade7Status = 0;
    ascendUpgrade7Cost = 8;
    
    ascendUpgrade8Status = 0;
    ascendUpgrade8Cost = 5;

    ascendUpgrade9Status = 0;
    ascendUpgrade9Cost = 10;

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

    upgrade5ButtonStatus = 0;
    upgrade5ButtonCost = 9999;
    upgrade5Multiplier = 0;

    document.getElementById("displaytext").innerHTML = currentScore;
    scorePerSecond.innerHTML = scoreMultiplier + " SPS";
    document.getElementById("ascensionScore").innerHTML = ascensionScore * ascendMultiplier;

    ascendButton.innerHTML = "Ascension Point Cost: " + ascendButtonCost + " (You will gain: " + ascensionResetScore + " AP)";
    ascendUpgrade1ButtonToolTipText.innerHTML = "Decrease Ascension Cost by 500 (" + ascendUpgrade1Cost + " AP) (Level " + ascendUpgrade1Status + "/2)"
    ascendUpgrade2Button.hidden = true;
    ascendUpgrade3Button.hidden = true;
    ascendUpgrade4Button.hidden = true;
    ascendUpgrade5Button.hidden = true;
    ascendUpgrade6Button.hidden = true;
    ascendUpgrade7Button.hidden = true;
    ascendUpgrade8Button.hidden = true;
    ascendUpgrade9Button.hidden = true;

    au1au2Line.hidden = true;
    au1au4Line.hidden = true;
    au1au6Line.hidden = true;
    au1au7Line.hidden = true;
    au2au3Line.hidden = true;
    au4au5Line.hidden = true;
    au7au8Line.hidden = true;
    au8au9Line.hidden = true;

    upgrade1Button.innerHTML = "Increase SPS + " + upgrade1ButtonMultiplier + " (Level " + upgrade1ButtonStatus + "/15) Cost:" + upgrade1ButtonCost;
    upgrade2Button.hidden = true;
    upgrade3Button.hidden = true;
    upgrade4Button.hidden = true;
    upgrade5Button.hidden = true;

    up1up2Line.hidden = true;
    up1up4Line.hidden = true;
    up4up5Line.hidden = true;
    up2up3Line.hidden = true;

    localStorage.removeItem("savedScore");
    localStorage.removeItem("savedScoreMultiplier");

    localStorage.removeItem("savedAscensionScore");
    localStorage.removeItem("savedAscensionResetScore");
    localStorage.removeItem("savedAscendButtonCost");
    localStorage.removeItem("savedAscendMultiplier");

    localStorage.removeItem("savedAscendConvertMultiplier");
    localStorage.removeItem("savedAscendConvertCost");

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
    
    localStorage.removeItem("savedAscendUpgrade7Cost");
    localStorage.removeItem("savedAscendUpgrade7Status");

    localStorage.removeItem("savedAscendUpgrade8Cost");
    localStorage.removeItem("savedAscendUpgrade8Status");

    localStorage.removeItem("savedAscendUpgrade9Cost");
    localStorage.removeItem("savedAscendUpgrade9Status");

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

    localStorage.removeItem("savedUpgrade5ButtonStatus");
    localStorage.removeItem("savedUpgrade5ButtonCost");
    localStorage.removeItem("savedUpgrade5Multiplier");
}