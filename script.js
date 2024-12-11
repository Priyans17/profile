document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.reset();
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Animate hero text on load
    document.querySelectorAll('.animate-text').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Parallax effect for hero illustration
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroIllustration = document.querySelector('.hero-illustration');
        heroIllustration.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

