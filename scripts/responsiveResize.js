function applySizeRelatedStyles () {
    const screenWidth = window.innerWidth;

    const descriptions = document.getElementsByClassName('description-text');

    if (screenWidth > 760) {
        for (const description of descriptions) {
            description.style.marginLeft = '65px';
        }

        const descritptionTextBackgrounds = document.getElementsByClassName('description-text-background');

        for (const background of descritptionTextBackgrounds) {
            background.style.marginLeft = '50px';
            background.style.marginRight = '50px';
        }
    } else {
        for (const description of descriptions) {
            description.style.marginLeft = '35px';
        }
    }
}

applySizeRelatedStyles();