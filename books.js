const books = [
    {image: "images/inteligenta-emotionala.jpeg", link: "https://cartigratis.com/products/3851-inteligenta-emotionala", alt: "Inteligenta emotionala"},
    {image: "images/gandeste-si-devii-bogat.jpg", link: "https://cartigratis.com/products/3584-gandeste-si-devii-bogat", alt: "Gandeste si devii bogat"},
    {image: "images/cele-cinci-limbaje-de-iubire.jpg", link: "https://cartigratis.com/products/3975-cele-cinci-limbaje-de-iubire-ale-copiilor", alt: "Cele cinci limbaje de iubire ale copiilor"},
    {image: "images/ce-sa-le-spunem-copiilor.jpg", link: "https://cartigratis.com/products/3955-ce-sa-le-spunem-copiilor", alt: "Ce sa le spunem copiilor"},
    {image: "images/drumul-catre-tine-insuti.jpg", link: "https://cartigratis.com/products/3582-drumul-catre-tine-insuti", alt: "Drumul catre tine insuti"},
    {image: "images/secretele-comunicarii.jpg", link: "https://cartigratis.com/products/3583-secretele-comunicarii", alt: "Secretele comunicarii"},
    {image: "images/limbajul-trupului.jpeg", link: "https://cartigratis.com/products/3602-limbajul-vorbirii", alt: "Limbajul trupului"},
];

function renderBooks(containerId, books) {
    const booksContainer = document.getElementById(containerId);

    books.forEach(book => {
        const bookItem = `
            <a href="${book.link}" target="_blank">
                <img class="fixed-size-image image-frame" src="${book.image}" alt="${book.alt}"/>
            </a>
        `;

        booksContainer.insertAdjacentHTML('beforeend', bookItem);
    });
}

renderBooks('bookContainer', books);