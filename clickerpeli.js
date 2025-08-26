let pisteet = 0;
let pisteetPerClick = 1;
let ppchinta = 15;
let pisteetPerSecond = 0;
let ppshinta = 75;

const pisteetElement = document.getElementById('pisteet');
const pisteetPerClickElement = document.getElementById('pisteetPerClick');
const ppchintaElement = document.getElementById("ppchinta");
const pisteetPerSecondElement = document.getElementById('pisteetPerSecond');
const ppshintaElement = document.getElementById("ppshinta");

let 

function paivitaDisplay() {
    pisteetElement.textContent = pisteet;
    pisteetPerClickElement.textContent = pisteetPerClick;
    ppchintaElement.textContent = ppchinta;
    pisteetPerSecondElement.textContent = pisteetPerSecond;
    ppshintaElement.textContent = ppshinta;
}

function lisääpiste() {
    pisteet += pisteetPerClick;
    paivitaDisplay();
}

function ostappc() {
    if (pisteet >= ppchinta) {
        pisteet -= ppchinta;
        pisteetPerClick++;
        ppchinta *= 2;
        paivitaDisplay();
    }   else {
        alert("Ei tarpeeksi pisteitä!");
    }
}

function ostapps() {
    if (pisteet >= ppshinta) {
        pisteet -= ppshinta;
        pisteetPerSecond++;
        ppshinta *= 2.2;
        setInterval(function() {
            pisteet += pisteetPerSecond;
            paivitaDisplay();
        }, 1000);
        paivitaDisplay();
    }   else {
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

        