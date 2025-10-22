document.addEventListener('DOMContentLoaded', () => {

    const galleryImages = document.querySelectorAll('.image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;


    function openLightbox(index) {
        lightboxImg.src = galleryImages[index].src;
        currentIndex = index;
        
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        
        lightbox.classList.remove('active');
    }

    function showNextImage() {
        currentIndex++;
        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }
        lightboxImg.src = galleryImages[currentIndex].src;
    }


    

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        
        if (lightbox.classList.contains('active')) {
            if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'Escape') {
                closeLightbox();
            }
        }
    });

});
