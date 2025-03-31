const galleryData = [
    {
        id: 1,
        title: 'Ambiente Acolhedor',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000',
        description: 'Nosso espaço foi projetado para proporcionar momentos especiais'
    },
    {
        id: 2,
        title: 'Preparo Artesanal',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000',
        description: 'Café preparado com dedicação e expertise'
    },
    {
        id: 3,
        title: 'Arte em Café',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000',
        description: 'Cada xícara é uma obra de arte'
    },
    {
        id: 4,
        title: 'Bolos e Doces',
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000',
        description: 'Deliciosos bolos feitos com carinho'
    },
    {
        id: 6,
        title: 'Sobremesas',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000',
        description: 'Doces irresistíveis para acompanhar seu café'
    },
    {
        id: 7,
        title: 'Grãos Selecionados',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000',
        description: 'Grãos de café premium selecionados'
    },
    {
        id: 8,
        title: 'Café Coado',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000',
        description: 'Café coado na hora com método tradicional'
    },
    {
        id: 9,
        title: 'Espaço de Trabalho',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000',
        description: 'Ambiente perfeito para trabalhar e relaxar'
    },
    {
        id: 10,
        title: 'Café Expresso',
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000',
        description: 'O clássico expresso italiano'
    },
    {
        id: 11,
        title: 'Cappuccino',
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000',
        description: 'Cappuccino cremoso com arte em café'
    },
    {
        id: 12,
        title: 'Área Externa',
        image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000',
        description: 'Espaço ao ar livre para aproveitar seu café'
    },
    {
        id: 13,
        title: 'Café com Amigos',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000',
        description: 'Momentos especiais com quem você ama'
    }
];


function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    image.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    overlay.appendChild(title);
    overlay.appendChild(description);
    galleryItem.appendChild(image);
    galleryItem.appendChild(overlay);

    return galleryItem;
}

function initGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    galleryData.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryContainer.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', initGallery);