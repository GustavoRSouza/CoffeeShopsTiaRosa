// Dados dos slides
const sliderData = [
    {
        title: 'Bem-vindo ao Coffee Shops Tia Rosa',
        description: 'Onde cada xícara conta uma história de sabor e acolhimento',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000'
    },
    {
        title: 'Cafés Especiais',
        description: 'Experimente nossos blends exclusivos preparados com grãos selecionados',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000'
    },
    {
        title: 'Ambiente Acolhedor',
        description: 'Um espaço pensado para seus momentos especiais',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000'
    }
];

class Slider {
    constructor() {
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.initSlider();
    }

    initSlider() {
        const heroSection = document.querySelector('.hero');
        heroSection.classList.add('slider');
        heroSection.innerHTML = this.createSliderHTML();

        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider-dot');

        // Iniciar com o primeiro slide ativo
        this.showSlide(0);

        // Adicionar event listeners
        document.querySelector('.slider-arrow.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.slider-arrow.next').addEventListener('click', () => this.nextSlide());

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.showSlide(index));
        });

        // Iniciar autoplay
        this.startAutoPlay();

        // Pausar autoplay quando o mouse estiver sobre o slider
        heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
        heroSection.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    createSliderHTML() {
        const slidesHTML = sliderData.map((slide, index) => `
            <div class="slide" style="background-image: url('${slide.image}');">
                <div class="slide-content">
                    <h1>${slide.title}</h1>
                    <p>${slide.description}</p>
                </div>
            </div>
        `).join('');

        const dotsHTML = sliderData.map((_, index) => `
            <div class="slider-dot${index === 0 ? ' active' : ''}"></div>
        `).join('');

        return `
            ${slidesHTML}
            <div class="slider-nav">${dotsHTML}</div>
            <div class="slider-arrows">
                <div class="slider-arrow prev">❮</div>
                <div class="slider-arrow next">❯</div>
            </div>
        `;
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.currentSlide = index;
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }

    startAutoPlay() {
        if (this.autoPlayInterval) return;
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Inicializar o slider quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});