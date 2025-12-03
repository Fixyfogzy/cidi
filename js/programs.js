// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Navbar scroll effect - slight opacity change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.opacity = '0.98';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.opacity = '1';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('.donate-btn') || e.target.closest('.donate-btn');
    if (!isDropdownButton) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Handle dropdown display
document.querySelectorAll('.donate-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        const content = dropdown.querySelector('.dropdown-content');
        const isVisible = content.style.display === 'block';
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(d => {
            d.style.display = 'none';
        });
        
        // Toggle current dropdown
        content.style.display = isVisible ? 'none' : 'block';
    });
});

// Gallery Images Data
const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Health Program' },
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Youth Training Session' },
    { url: 'https://images.unsplash.com/photo-1559027615-cfa462889789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Women Empowerment Workshop' },
    { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rural Development Project' },
    { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Medical Camp' },
    { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8f6be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Skills Training' },
    { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Meeting' },
    { url: 'https://images.unsplash.com/photo-1516627145497-ae6958deff32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Children Education' },
    { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Agriculture Training' },
    { url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Clean Water Project' },
    { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Team Planning' },
    { url: 'https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'School Renovation' },
    { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Food Distribution' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Gathering' },
    { url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Health Education' },
    { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Computer Training' },
    { url: 'https://images.unsplash.com/photo-1551524165-6b6e5a6166f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rural Infrastructure' },
    { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Leadership Workshop' },
    { url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Environmental Project' },
    { url: 'https://images.unsplash.com/photo-1551135049-8a33b2fb1d19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Celebration' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Team Collaboration' },
    { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Child Care Program' },
    { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Medical Assistance' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rural Development' },
    { url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Community Health Workers' }
];

// Generate Gallery
function generateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.alt}" loading="lazy">
        `;
        
        galleryItem.addEventListener('click', () => {
            openModal(image.url, image.alt);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Modal Functionality
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');

function openModal(src, alt) {
    modal.style.display = 'block';
    modalImg.src = src;
    modalCaption.textContent = alt;
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on X click
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunc();
    }
});

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                // Here you would typically send the email to your backend
                console.log('Newsletter subscription:', email);
                
                // Show success message
                emailInput.value = '';
                emailInput.placeholder = 'Thank you for subscribing!';
                
                // Reset placeholder after 3 seconds
                setTimeout(() => {
                    emailInput.placeholder = 'Enter your email';
                }, 3000);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateGallery();
    initNewsletterForm();
    initSmoothScrolling();
});