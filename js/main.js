// Menu Items Data
const menuData = {
    'cafes-especiais': [
        {
            name: 'Café Especial Tia Rosa',
            description: 'Nosso blend exclusivo de grãos selecionados',
            price: 'R$ 8,90'
        },
        {
            name: 'Cappuccino Gourmet',
            description: 'Espresso, leite vaporizado e chocolate em pó',
            price: 'R$ 12,90'
        },
        {
            name: 'Mocha Caramelo',
            description: 'Café espresso, calda de chocolate e caramelo',
            price: 'R$ 14,90'
        }
    ],
    'lanches': [
        {
            name: 'Pão na Chapa',
            description: 'Pão francês na manteiga',
            price: 'R$ 6,90'
        },
        {
            name: 'Croissant Recheado',
            description: 'Croissant com queijo e presunto',
            price: 'R$ 12,90'
        },
        {
            name: 'Torta de Frango',
            description: 'Fatia de torta caseira de frango',
            price: 'R$ 9,90'
        }
    ],
    'sobremesas': [
        {
            name: 'Bolo de Chocolate',
            description: 'Fatia de bolo caseiro com cobertura',
            price: 'R$ 8,90'
        },
        {
            name: 'Pudim de Leite',
            description: 'Pudim caseiro com calda de caramelo',
            price: 'R$ 7,90'
        },
        {
            name: 'Cheesecake',
            description: 'Fatia de cheesecake com calda de frutas vermelhas',
            price: 'R$ 12,90'
        }
    ]
};

// Populate Menu Items
Object.keys(menuData).forEach(category => {
    const container = document.getElementById(category);
    if (container) {
        menuData[category].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
            `;
            container.appendChild(itemElement);
        });
    }
});

// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}