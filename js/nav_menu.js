
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const update = () => {
        current += step;
        if (current >= target) {
            counter.textContent = target;
            return;
        }
        counter.textContent = current;
        requestAnimationFrame(update);
    };
    update();
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
