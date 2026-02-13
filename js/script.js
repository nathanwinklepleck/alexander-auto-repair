// =====================
// Hero Background Slideshow
// =====================
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (heroSlides.length > 0) {
    setInterval(nextSlide, 5000);
}

// =====================
// Mobile Menu Toggle
// =====================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// =====================
// Smooth Scrolling
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Scroll to Top Button
// =====================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================
// Navbar Background on Scroll
// =====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// =====================
// Form Handling
// =====================
const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');

quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        vehicle: document.getElementById('vehicle').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    
    // Simulate form submission (In production, this would send to a server)
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Thank you for your request!</strong><br>
            We've received your quote request and will contact you shortly at ${formData.email}.
        `;
        
        // Log to console (in production, this would be sent to server/email service)
        console.log('Form submitted:', formData);
        
        // Reset form
        quoteForm.reset();
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
        
    } catch (error) {
        // Show error message
        formMessage.className = 'form-message error';
        formMessage.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <strong>Oops! Something went wrong.</strong><br>
            Please try again or call us at (317) 272-7400.
        `;
    } finally {
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
    }
});

// =====================
// Form Validation
// =====================
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    // Remove non-numeric characters
    let value = e.target.value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    
    e.target.value = value;
});

// Email validation
const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        emailInput.setCustomValidity('Please enter a valid email address');
        emailInput.reportValidity();
    } else {
        emailInput.setCustomValidity('');
    }
});

// =====================
// Intersection Observer for Animations
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .trust-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// =====================
// Quick Call Button (Mobile)
// =====================
if (window.innerWidth <= 768) {
    const quickCallBtn = document.createElement('a');
    quickCallBtn.href = 'tel:+13172727400';
    quickCallBtn.className = 'quick-call-btn';
    quickCallBtn.innerHTML = '<i class="fas fa-phone"></i>';
    quickCallBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 60px;
        height: 60px;
        background: #28a745;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 998;
        text-decoration: none;
        animation: pulse 2s infinite;
    `;
    
    // Add pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(quickCallBtn);
}

// =====================
// Performance: Lazy Loading Images
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// =====================
// Service Worker Registration (for future PWA capability)
// =====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(err => console.log('SW registration failed'));
    });
}

// =====================
// Analytics Event Tracking (placeholder)
// =====================
function trackEvent(category, action, label) {
    // In production, integrate with Google Analytics or similar
    console.log('Event tracked:', { category, action, label });
}

// Track button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('Button', 'Click', e.target.textContent.trim());
    });
});

// Track form submission
quoteForm.addEventListener('submit', () => {
    trackEvent('Form', 'Submit', 'Quote Request');
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'Phone Click', 'Call Button');
    });
});

console.log('Alexander Auto Repair website loaded successfully! 🚗');
