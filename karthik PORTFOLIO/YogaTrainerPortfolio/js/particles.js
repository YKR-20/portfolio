/* 
=======================================
   Particles JavaScript for Yogakarthikraj Portfolio
   Creates and animates particles in the background
=======================================
*/

// DOM Elements
const particlesContainer = document.getElementById('particles-container');

// Particles configuration
const particlesConfig = {
    count: 35,
    colors: ['#0DF0FF', '#FF2DB6', '#6EFF41'],
    minSize: 2,
    maxSize: 7,
    minSpeed: 10,
    maxSpeed: 20
};

// Create particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (particlesContainer) {
        createParticles();
    }
});

// Function to create particles
function createParticles() {
    // Clear any existing particles
    particlesContainer.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < particlesConfig.count; i++) {
        const particle = document.createElement('span');
        
        // Random properties
        const size = Math.random() * (particlesConfig.maxSize - particlesConfig.minSize) + particlesConfig.minSize;
        const posX = Math.random() * 100; // position in viewport width percentage
        const delay = Math.random() * 10; // random start delay
        const duration = Math.random() * (particlesConfig.maxSpeed - particlesConfig.minSpeed) + particlesConfig.minSpeed;
        
        // Cycle through colors
        const color = particlesConfig.colors[i % particlesConfig.colors.length];
        
        // Set styles
        particle.style.position = 'absolute';
        particle.style.display = 'block';
        particle.style.borderRadius = '50%';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.bottom = '-20px';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size}px ${color}`;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.animationDelay = `${delay}s`;
        
        // Add to container
        particlesContainer.appendChild(particle);
    }
    
    // Add the float animation style if it doesn't exist
    if (!document.getElementById('particle-animation-style')) {
        const style = document.createElement('style');
        style.id = 'particle-animation-style';
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Recreate particles on window resize (for better responsiveness)
window.addEventListener('resize', () => {
    if (particlesContainer) {
        // Debounce the resize event to avoid excessive recreation
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(() => {
            createParticles();
        }, 200);
    }
});