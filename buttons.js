function addScrollButton(buttonId) {
    const scrollButton = document.getElementById(buttonId);

    if (!scrollButton) {
        console.error(`Button with ID ${buttonId} not found`);
        return;
    }

    window.addEventListener('scroll', () => {
        const visibilityPoint = 300;

        if (window.scrollY > visibilityPoint) {
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.visibility = 'hidden';
        }
    });

    // click event listener to scroll back to top
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    addScrollButton('scrollButton');
});