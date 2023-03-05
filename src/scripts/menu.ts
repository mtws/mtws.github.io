const hamburger = document.querySelector('.hamburger');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        navLinks.classList.toggle('expanded');
    });
}

// https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import
export {}