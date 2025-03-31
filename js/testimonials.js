const testimonials = [
    {
        name: 'Maria Silva',
        image: 'https://i.pravatar.cc/150?img=1',
        text: 'O melhor café da região! Ambiente acolhedor e atendimento excepcional.',
        rating: 5
    },
    {
        name: 'João Santos',
        image: 'https://i.pravatar.cc/150?img=2',
        text: 'Ótimo lugar para trabalhar remotamente. O café é simplesmente delicioso!',
        rating: 4
    },
    {
        name: 'Ana Oliveira',
        image: 'https://i.pravatar.cc/150?img=3',
        text: 'As sobremesas são incríveis e o café é sempre fresquinho.',
        rating: 5
    }
];

function createStars(rating) {
    const starsHtml = Array.from({ length: 5 }, (_, index) => {
        const starClass = index < rating ? 'star-filled' : 'star-empty';
        return `<span class="star ${starClass}">★</span>`;
    }).join('');
    return `<div class="rating">${starsHtml}</div>`;
}

function createTestimonialSlides() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = '';

    const slidesWrapper = document.createElement('div');
    slidesWrapper.className = 'testimonials-wrapper';

    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="testimonial-content">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <h4>${testimonial.name}</h4>
                ${createStars(testimonial.rating)}
                <p>${testimonial.text}</p>
            </div>
        `;
        slidesWrapper.appendChild(slide);
    });


    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button prev';
    prevButton.innerHTML = '❮';
    prevButton.onclick = () => navigate(-1);

    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button next';
    nextButton.innerHTML = '❯';
    nextButton.onclick = () => navigate(1);

    const indicators = document.createElement('div');
    indicators.className = 'testimonial-indicators';
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `indicator ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        indicators.appendChild(dot);
    });

    container.appendChild(prevButton);
    container.appendChild(slidesWrapper);
    container.appendChild(nextButton);
    container.appendChild(indicators);

    startAutoplay();
}

let currentSlide = 0;
let autoplayInterval;

function navigate(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    restartAutoplay();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    restartAutoplay();
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        navigate(1);
    }, 5000); 
}

function restartAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

document.addEventListener('DOMContentLoaded', createTestimonialSlides);