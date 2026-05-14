// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Image Expansion Modal
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');
const expandableImages = document.querySelectorAll('.expandable-image');

if (expandableImages.length > 0) {
    expandableImages.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            modalImage.src = image.src;
            imageModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        // Add cursor pointer to show it's clickable
        image.style.cursor = 'pointer';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'block') {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});