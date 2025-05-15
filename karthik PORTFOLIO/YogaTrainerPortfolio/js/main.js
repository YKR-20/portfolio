/* 
=======================================
   Main JavaScript for Yogakarthikraj Portfolio
   Handles loading, navigation, and UI interactions
=======================================
*/

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const backToTopBtn = document.getElementById('backToTopBtn');
const sections = document.querySelectorAll('section[id]');
const typeTextElement = document.getElementById('typed-text');
const skillBars = document.querySelectorAll('.skill-bar');
const yearElement = document.getElementById('year');
const revealElements = document.querySelectorAll('.reveal-item, .reveal-left, .reveal-right, .reveal-up');

// Variables
const phrases = ["Software Trainer", "Free Fire Gamer", "Video Editor", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in footer
    if (yearElement) yearElement.textContent = new Date().getFullYear();
    
    // Start the typing animation
    if (typeTextElement) typeWriter();
    
    // Remove loading screen after everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('loading-hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
    
    // Observe elements for animation
    setupIntersectionObserver();
    
    // Initialize event listeners
    initEventListeners();
});

// Set up the Intersection Observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a skill bar, animate the width
                if (entry.target.classList.contains('skill-bar')) {
                    const percentage = entry.target.getAttribute('data-percentage');
                    const fill = entry.target.querySelector('.skill-fill');
                    if (fill) {
                        fill.style.setProperty('--width', `${percentage}%`);
                        fill.classList.add('active');
                    }
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe reveal elements
    revealElements.forEach(el => observer.observe(el));
    
    // Observe skill bars
    skillBars.forEach(el => observer.observe(el));
}

// Initialize event listeners
function initEventListeners() {
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('menu-open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('open')) {
                menuToggle.classList.remove('menu-open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('no-scroll');
            }
            
            // Scroll to section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        // Header behavior on scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Update active navigation based on scroll position
        updateActiveNav();
    });
    
    // Back to top button click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Typewriter effect
function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Deleting text
        typeTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Typing text
        typeTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    // Check if phrase is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        isDeleting = true;
        typingSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
        // Move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Update active navigation link based on scroll position
function updateActiveNav() {
    const scrollPosition = window.scrollY + 300;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to corresponding links
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
    });
}

// Form validation (for the contact form)
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Simple validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Name validation
        if (name === '') {
            document.getElementById('name').nextElementSibling.textContent = 'Name is required';
            isValid = false;
        }
        
        // Email validation
        if (email === '') {
            document.getElementById('email').nextElementSibling.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('email').nextElementSibling.textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        // Subject validation
        if (subject === '') {
            document.getElementById('subject').nextElementSibling.textContent = 'Subject is required';
            isValid = false;
        }
        
        // Message validation
        if (message === '') {
            document.getElementById('message').nextElementSibling.textContent = 'Message is required';
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}