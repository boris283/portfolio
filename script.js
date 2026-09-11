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

const boutonHamburger = document.getElementById('btn-hamburger');
const listeLiens = document.getElementById('nav-links');

boutonHamburger.addEventListener('click', () => {
    listeLiens.classList.toggle('ouvert');
});

const liens = document.querySelectorAll('.nav-links a');

liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        listeLiens.classList.remove('ouvert');
    });
});