// Fade-In on Scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Page Transition Effect
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
