 const profiles = [
    {name: "Dino", image: "images/dino.jpg", link: "#Dino", alt: "Imagine cu Dino"},
    {name: "Lola", image: "images/lola.png", link: "#Lola", alt: "Imagine cu Lola"},
    {name: "Nick", image: "images/nick.jpg", link: "#Nick", alt: "Imagine cu Nick"},
    {name: "Oaie", image: "images/oaie.jpg", link: "#Oaie", alt: "Imagine cu Oaie"},
    {name: "Iepurila", image: "images/iepu.jpg", link: "#Iepurila", alt: "Imagine cu Iepurila"},
    {name: "Idefix", image: "images/idefix.jpg", link: "#Idefix", alt: "Imagine cu Idefix"},
    {name: "Ciupi", image: "images/ciupi.jpg", link: "#Ciupi", alt: "Imagine cu Ciupi"},
    {name: "Pingu", image: "images/pingu.png", link: "#Pingu", alt: "Imagine cu Pingu"},
    {name: "Rate", image: "images/rate.png", link: "#Rate", alt: "Imagine cu Rate"},
    {name: "Norisor", image: "images/nori.png", link: "#Norisor", alt: "Imagine cu Norisor"},
    {name: "Maghi", image: "images/maghi.jpg", link: "#Maghi", alt: "Imagine cu Maghi"}
];

// Select the container where profiles will be inserted
const profilesContainer = document.getElementById('profilesContainer');

let html = '';

// Generate HTML for each profile and append it to the container
profiles.forEach(profile => {
        html += `
            <a class="profileItem internal-link" href="${profile.link}">
                <div class="profileContent">
                    <img class="profilePicture" src="${profile.image}" alt="${profile.alt}">
                    <div class="name">${profile.name}</div>
                </div>
            </a>
        `;
});

profilesContainer.innerHTML = html;

function highlightElement() {
    // removing the '#' from the anchor href
    let targetId = location.hash.slice(1);

    if (targetId) {
        targetId += 'Text'; // for highlighting the text of the description

        const targetElement = document.getElementById(targetId);
        const highlightClassName = 'highlight';
        const highlightDuration = 3000; // in milliseconds

        if (targetElement) {
            console.log(`Highlighting element with ID: ${targetId}`);
            
            targetElement.classList.add(highlightClassName);
            setTimeout(() => targetElement.classList.remove(highlightClassName), highlightDuration);
        }
    } else {
        console.log(`No element found with ID: ${targetId}`);
    }
}

document
    .querySelectorAll('a.internal-link[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            location.hash = this.getAttribute('href');
            highlightElement();
        });
    });

const books = [
    {image: "images/inteligenta-emotionala.jpeg", link: "https://cartigratis.com/products/3851-inteligenta-emotionala", alt: "Inteligenta emotionala"},
    {image: "images/gandeste-si-devii-bogat.jpg", link: "https://cartigratis.com/products/3584-gandeste-si-devii-bogat", alt: "Gandeste si devii bogat"},
    {image: "images/cele-cinci-limbaje-de-iubire.jpg", link: "https://cartigratis.com/products/3975-cele-cinci-limbaje-de-iubire-ale-copiilor", alt: "Cele cinci limbaje de iubire ale copiilor"},
    {image: "images/ce-sa-le-spunem-copiilor.jpg", link: "https://cartigratis.com/products/3955-ce-sa-le-spunem-copiilor", alt: "Ce sa le spunem copiilor"},
    {image: "images/drumul-catre-tine-insuti.jpg", link: "https://cartigratis.com/products/3582-drumul-catre-tine-insuti", alt: "Drumul catre tine insuti"},
    {image: "images/secretele-comunicarii.jpg", link: "https://cartigratis.com/products/3583-secretele-comunicarii", alt: "Secretele comunicarii"},
    {image: "images/limbajul-trupului.jpeg", link: "https://cartigratis.com/products/3602-limbajul-vorbirii", alt: "Limbajul trupului"},
];

const booksContainer = document.getElementById('bookContainer');

books.forEach(book => {
    const bookItem = `
        <a href="${book.link}" target="_blank">
            <img class="fixed-size-image image-frame" src="${book.image}" alt="${book.alt}"/>
        </a>
    `;

    booksContainer.insertAdjacentHTML('beforeend', bookItem);
});
