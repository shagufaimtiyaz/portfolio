document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling to sections
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic animations on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, options);
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Hover interactions
    const hoverElements = document.querySelectorAll('.hover-effect');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.classList.add('hover-active');
        });
        element.addEventListener('mouseleave', function () {
            this.classList.remove('hover-active');
        });
    });

    // Smooth transitions on element changes
    const transitionElements = document.querySelectorAll('.transition-effect');
    transitionElements.forEach(element => {
        element.style.transition = 'all 0.3s ease-in-out';
    });
});