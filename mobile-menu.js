// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Mobile footer accordion functionality
    if (window.innerWidth <= 900) {
        const footerSections = document.querySelectorAll('.footer-grid > div:not(.footer-brand)');
        
        footerSections.forEach(section => {
            const heading = section.querySelector('h5');
            if (heading) {
                heading.addEventListener('click', function() {
                    section.classList.toggle('expanded');
                });
            }
        });
    }
});

