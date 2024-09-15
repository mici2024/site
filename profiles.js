 const profiles = [
    {name: "Dino", image: "images/dino.jpg", link: "#Dino", alt: "Imagine cu Dino"},
    {name: "Lola", image: "images/lola.png", link: "#Lola", alt: "Imagine cu Lola"},
    {name: "Nick", image: "images/nick.jpg", link: "#Nick", alt: "Imagine cu Nick"},
    {name: "Oaie", image: "images/oaie.jpg", link: "#Oaie", alt: "Imagine cu Oaie"},
    {name: "Iepurilă", image: "images/iepu.jpg", link: "#Iepurila", alt: "Imagine cu Iepurila"},
    {name: "Idefix", image: "images/idefix.jpg", link: "#Idefix", alt: "Imagine cu Idefix"},
    {name: "Ciupi", image: "images/ciupi.JPG", link: "#Ciupi", alt: "Imagine cu Ciupi"},
    {name: "Pingu", image: "images/pingu.png", link: "#Pingu", alt: "Imagine cu Pingu"},
    {name: "Rate", image: "images/rate.png", link: "#Rate", alt: "Imagine cu Rate"},
    {name: "Norisor", image: "images/nori.png", link: "#Norisor", alt: "Imagine cu Norisor"},
    {name: "Maghi", image: "images/maghi.jpg", link: "#Maghi", alt: "Imagine cu Maghi"},
];

function renderProfiles(containterId, profiles) {
    const profilesContainer = document.getElementById(containterId);
    let html = '';

    profiles.forEach(profile => {
        html += `
            <a class="profile-item internal-link" href="${profile.link}">
                <div class="profile-content">
                    <img class="profile-picture" src="${profile.image}" alt="${profile.alt}">
                    <div class="name">${profile.name}</div>
                </div>
            </a>
        `;
    });

    profilesContainer.innerHTML = html;
    addProfileEventListeners();
}

function addProfileEventListeners() {
    document
        .querySelectorAll('a.internal-link[href^="#"]')
        .forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                location.hash = anchor.getAttribute('href');
                highlightElement();
            });
        });
}

function highlightElement() {
     // removing the '#' from the anchor href
    let targetId = location.hash.slice(1);

    if (targetId) {
         // highlighting the text of the description 
        targetId += 'Text';

        const targetElement = document.getElementById(targetId);
        const highlightClassName = 'highlight';
        const highlightDuration = 3000; // in milliseconds

        if (targetElement) {
            console.log(`Highlighting element with ID: ${targetId}`);
            
            targetElement.classList.add(highlightClassName);

            setTimeout(() => {
                targetElement.classList.remove(highlightClassName);
                
            }, highlightDuration);
        }
    } else {
        console.log(`No element found with ID: ${targetId}`);
    }
}

renderProfiles('profilesContainer', profiles);