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