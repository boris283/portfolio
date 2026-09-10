const sections = document.querySelectorAll('.animation-apparition');

const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
        if (entree.isIntersecting) {
            entree.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observateur.observe(section);
});