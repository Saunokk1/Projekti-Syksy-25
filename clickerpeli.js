let pisteet = 0;
let pisteetPerClick = 1;
let ppchinta = 70;
let pisteetPerSecond = 0;
let ppshinta = 30;
let tehdashinta = 200
let achievement1Awarded = false;
let achievement2Awarded = false;
let achievement3Awarded = false;
let autoClickerInterval = null;

const pisteetElement = document.getElementById('pisteet');
const pisteetPerClickElement = document.getElementById('pisteetPerClick');
const ppchintaElement = document.getElementById("ppchinta");
const pisteetPerSecondElement = document.getElementById('pisteetPerSecond');
const ppshintaElement = document.getElementById("ppshinta");
const 
const achievementElement1 = document.getElementById("achievement1");
const achievementElement2 = document.getElementById("achievement2");
const achievementElement3 = document.getElementById("achievement3");

function paivitaDisplay() {
    pisteetElement.textContent = pisteet;
    pisteetPerClickElement.textContent = pisteetPerClick;
    ppchintaElement.textContent = ppchinta;
    pisteetPerSecondElement.textContent = pisteetPerSecond;
    ppshintaElement.textContent = ppshinta;
}

function checkAchievements() {
    if (!achievement1Awarded && pisteet >= 1) {
        achievementElement1.textContent = "Aloitit Pelin!";
        achievement1Awarded = true;
    }
    if (!achievement2Awarded && pisteetPerSecond >= 5) {
        achievementElement2.textContent = "Jidion Would Be Proud✓"
        achievement2Awarded = true;
    }
    if (!achievement3Awarded && pisteetPerClick >= 5) {
        achievementElement3.textContent = "Crazy Clicks!👆"
        achievement3Awarded = true;
    }
}

function lisääpiste() {
    pisteet += pisteetPerClick;
    checkAchievements();
    paivitaDisplay();
}

function ostappc() {
    if (pisteet >= ppchinta) {
        pisteet -= ppchinta;
        pisteetPerClick++;
        ppchinta *= 3;
        checkAchievements();
        paivitaDisplay();
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
        }, 500);
        
        checkAchievements();
        paivitaDisplay();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }
}
function ostatehdas() {
    if (pisteet >= tehdashinta) {
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
        }, 500);
        
        checkAchievements();
        paivitaDisplay();
    } else {
        alert("Ei tarpeeksi pisteitä!");
    }

}

paivitaDisplay();

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
