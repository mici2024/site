function addScrollButton(buttonId) {
    const scrollButton = document.getElementById(buttonId);

    window.onscroll = function () {
        const visibilityPoint = 100;

        if (document.body.scrollTop > visibilityPoint || document.documentElement.scrollTop > visibilityPoint) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    };

    scrollButton.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addScrollButton('scrollButton');