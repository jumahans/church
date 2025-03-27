// Add this to your existing main.js file

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gallery navigation
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    
    if (galleryGrid && galleryPrev && galleryNext) {
        galleryPrev.addEventListener('click', () => {
            galleryGrid.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        galleryNext.addEventListener('click', () => {
            galleryGrid.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
        
        // Modal functionality
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.querySelector('.gallery-modal');
        const modalImg = document.getElementById('modal-image');
        const modalCaption = document.querySelector('.modal-caption');
        const closeModal = document.querySelector('.close-modal');
        const modalPrev = document.querySelector('.modal-prev');
        const modalNext = document.querySelector('.modal-next');
        
        let currentIndex = 0;
        
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                const img = item.querySelector('img');
                const caption = item.querySelector('h4').textContent;
                
                modalImg.src = img.src;
                modalCaption.textContent = caption;
                modal.style.display = 'block';
                
                // Disable body scroll when modal is open
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            // Re-enable body scroll
            document.body.style.overflow = 'auto';
        });
        
        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Modal navigation
        modalPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            const img = galleryItems[currentIndex].querySelector('img');
            const caption = galleryItems[currentIndex].querySelector('h4').textContent;
            
            modalImg.src = img.src;
            modalCaption.textContent = caption;
        });
        
        modalNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            const img = galleryItems[currentIndex].querySelector('img');
            const caption = galleryItems[currentIndex].querySelector('h4').textContent;
            
            modalImg.src = img.src;
            modalCaption.textContent = caption;
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    modalPrev.click();
                } else if (e.key === 'ArrowRight') {
                    modalNext.click();
                } else if (e.key === 'Escape') {
                    closeModal.click();
                }
            }
        });
    }
});