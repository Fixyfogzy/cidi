// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .footer-section a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

// 2. Animate statistics counters (fixed)
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const duration = 1500; // Animation duration in ms
        const frameRate = 30; // Frames per second
        const totalFrames = Math.floor(duration / (1000 / frameRate));
        const increment = target / totalFrames;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                counter.innerText = target + '+';
            } else {
                counter.innerText = Math.floor(current) + '+';
            }
        }, 1000 / frameRate);
    });
};

    // 3. Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate counters when impact section is visible
                if (entry.target.classList.contains('impact')) {
                    setTimeout(animateCounters, 300);
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // 4. Sticky header with background change on scroll
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    if (header && heroSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > heroSection.offsetHeight - 100) {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.0)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0)';
                header.style.boxShadow = 'none';
            }
        });
    }

    // 5. Testimonial slider functionality
    const testimonialSlider = () => {
        const testimonials = document.querySelectorAll('.testimonial');
        let currentIndex = 0;
        
        // Initially show only the first testimonial on mobile
        if (window.innerWidth < 768 && testimonials.length > 0) {
            testimonials.forEach((testimonial, index) => {
                if (index !== 0) {
                    testimonial.style.display = 'none';
                }
            });
            
            // Auto-rotate testimonials on mobile
            setInterval(() => {
                testimonials[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % testimonials.length;
                testimonials[currentIndex].style.display = 'block';
            }, 5000);
        } else {
            // Make sure all testimonials are visible on desktop
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'block';
            });
        }
    };
    
    testimonialSlider();
    window.addEventListener('resize', testimonialSlider);

    // 6. Form validation for newsletter signup (if added later)
    const validateForm = (form) => {
        const email = form.querySelector('input[type="email"]');
        if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            email.style.borderColor = 'red';
            return false;
        }
        return true;
    };

    // 7. Program cards hover effect enhancement
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 8. Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '&uarr;';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // 9. Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});