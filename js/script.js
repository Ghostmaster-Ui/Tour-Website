document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const slides = Array.from(document.querySelectorAll(".carousel-item"));
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const cardsPerView = 3; // Show 3 cards at a time
    let currentIndex = cardsPerView; // Start at the first real item
    let interval;

    // Clone first few items and append them at the end
    slides.slice(0, cardsPerView).forEach((slide) => {
        let clone = slide.cloneNode(true);
        carouselInner.appendChild(clone);
    });

    // Clone last few items and prepend them at the beginning
    slides.slice(-cardsPerView).forEach((slide) => {
        let clone = slide.cloneNode(true);
        carouselInner.insertBefore(clone, carouselInner.firstChild);
    });

    function updateCarousel(instant = false) {
        const offset = -(currentIndex * 100) / cardsPerView;
        carouselInner.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
        carouselInner.style.transform = `translateX(${offset}%)`;

        // Reset position when reaching cloned slides
        if (currentIndex >= slides.length) {
            setTimeout(() => {
                carouselInner.style.transition = "none";
                currentIndex = cardsPerView;
                updateCarousel(true);
            }, 500);
        } else if (currentIndex < cardsPerView) {
            setTimeout(() => {
                carouselInner.style.transition = "none";
                currentIndex = slides.length;
                updateCarousel(true);
            }, 500);
        }
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        updateCarousel();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Event Listeners
    nextBtn.addEventListener("click", function () {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Initialize the carousel
    updateCarousel(true);
    startAutoSlide();
});
