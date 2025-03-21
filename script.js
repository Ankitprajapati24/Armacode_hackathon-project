document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#005bb5'; 
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#0072ff'; 
    });
});

const revealElements = document.querySelectorAll('.animated');

const revealOnScroll = () => {
    for (let element of revealElements) {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (elementTop < viewportHeight - 50) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);

document.addEventListener('DOMContentLoaded', revealOnScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
