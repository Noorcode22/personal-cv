// --- Fade-In on Scroll ---
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// --- Page Load Fade ---
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// --- Mode Toggle (Light/Dark) ---
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// --- Button Hover Effect ---
toggleBtn.addEventListener('mouseenter', () => {
    toggleBtn.style.transform = "scale(1.1)";
});
toggleBtn.addEventListener('mouseleave', () => {
    toggleBtn.style.transform = "scale(1)";
});

// --- Section Highlight on Hover ---
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.borderLeft = "5px solid #ff6600";
    });
    section.addEventListener('mouseleave', () => {
        section.style.borderLeft = "5px solid transparent";
    });
});

// --- Random Background Flash ---
setInterval(() => {
    if (!document.body.classList.contains('dark-mode')) {
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    }
}, 15000);

// --- Smooth Scroll for all anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
