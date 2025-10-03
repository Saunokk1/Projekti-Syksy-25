let pisteet = 0;
let pisteetPerClick = 1;
let ppchinta = 70;
let pisteetPerSecond = 0;
let ppshinta = 30;
let tehdashinta = 325;
let achievement1Awarded = false;
let achievement2Awarded = false;
let achievement3Awarded = false;
let autoClickerInterval = null;
let isToggled = false;

const pisteetElement = document.getElementById('pisteet');
const pisteetPerClickElement = document.getElementById('pisteetPerClick');
const ppchintaElement = document.getElementById("ppchinta");
const pisteetPerSecondElement = document.getElementById('pisteetPerSecond');
const ppshintaElement = document.getElementById("ppshinta");
const tehdashintaElement = document.getElementById("tehdashinta")
const achievementElement1 = document.getElementById("achievement1");
const achievementElement2 = document.getElementById("achievement2");
const achievementElement3 = document.getElementById("achievement3");
const kuva = document.getElementById("keksiid")

function paivitaDisplay() {
    pisteetElement.textContent = pisteet;
    pisteet = Math.round(pisteet);
    pisteetPerClickElement.textContent = pisteetPerClick;
    ppchintaElement.textContent = ppchinta;
    ppchinta = Math.round(ppchinta);
    pisteetPerSecondElement.textContent = pisteetPerSecond;
    ppshintaElement.textContent = ppshinta;
    ppshinta = Math.round(ppshinta);
    tehdashintaElement.textContent = tehdashinta;
    tehdashinta = Math.round(tehdashinta);
}

function paivitaVäri() {
    if (pisteet < ppchinta) {
        ppchintaElement.style.color = "red";
    } else {
        ppchintaElement.style.color = "green";
    }
    if (pisteet < ppshinta) {
        ppshintaElement.style.color = "red";
    } else {
        ppshintaElement.style.color = "green"
    }
    if (pisteet < tehdashinta) {
        tehdashintaElement.style.color = "red";
    } else {
        tehdashintaElement.style.color = "green";
    }
}

function checkAchievements() {
    if (!achievement1Awarded && pisteet >= 1) {
        achievementElement1.textContent = "Aloitit Pelin!";
        achievementElement1.style.color = "gold";
        achievement1Awarded = true;
    }
    if (!achievement2Awarded && pisteetPerSecond >= 8) {
        achievementElement2.textContent = "Jidion Would Be Proud✓"
        achievementElement2.style.color = "gold";
        achievement2Awarded = true;
    }
    if (!achievement3Awarded && pisteetPerClick >= 5) {
        achievementElement3.textContent = "Crazy Clicks!👆"
        achievementElement3.style.color = "gold";
        achievement3Awarded = true;
    }
}

function lisääpiste() {
    pisteet += pisteetPerClick;
    checkAchievements();
    paivitaDisplay();
    paivitaVäri()
}

function ostappc() {
    if (pisteet >= ppchinta) {
        pisteet -= ppchinta;
        pisteetPerClick++;
        ppchinta *= 3;
        checkAchievements();
        paivitaDisplay();
        paivitaVäri();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
}

function ostapps() {
    if (pisteet >= ppshinta) {
        pisteet -= ppshinta;
        pisteetPerSecond++;
        ppshinta *= 1.5;
        
        if (autoClickerInterval) {
            clearInterval(autoClickerInterval);
        }
        
        autoClickerInterval = setInterval(function() {
            pisteet += pisteetPerSecond;
            checkAchievements();
            paivitaDisplay();
            paivitaVäri();
        }, 1000);
        
        checkAchievements();
        paivitaDisplay();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
}
function ostatehdas() {
    if (pisteet >= tehdashinta) {
        pisteet -= tehdashinta;
        pisteetPerSecond += 5;
        tehdashinta *= 4;
        
        if (autoClickerInterval) {
            clearInterval(autoClickerInterval);
        }
        
        autoClickerInterval = setInterval(function() {
            pisteet += pisteetPerSecond;
            checkAchievements();
            paivitaDisplay();
        }, 1000);
        
        checkAchievements();
        paivitaDisplay();
        paivitaVäri();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
}

function vaihdakuva() {
    if (isToggled === false) {
        kuva.src = "kuvat/leipoja.png";
        isToggled = true;
    } else {
        kuva.src = "kuvat/Bluecupcake.png";
        isToggled = false;
    }
}

paivitaDisplay();
paivitaVäri();

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const slideMenu = document.getElementById('slideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    function openMenu() {
        slideMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
    
    function closeMenu() {
        slideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; 
    }
    
    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const achievementButton = document.getElementById('achievementButton');
    const closeAchievementButton = document.getElementById('closeAchievement');
    const achievementMenu = document.getElementById('achievementContent');
    
    function openAchievementMenu() {
        achievementMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
    
    function closeAchievementMenu() {
        achievementMenu.classList.remove('active');
        document.body.style.overflow = ''; 
    }
    
    achievementButton.addEventListener('click', openAchievementMenu);
    closeAchievementButton.addEventListener('click', closeAchievementMenu);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAchievementMenu();
        }
    });
});
