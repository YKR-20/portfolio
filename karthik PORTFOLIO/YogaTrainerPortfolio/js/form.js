/* 
=======================================
   Form JavaScript for Yogakarthikraj Portfolio
   Handles form submissions and validation
=======================================
*/

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Form submission with FormSubmit
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
                submitButton.disabled = true;
                
                try {
                    // FormSubmit will handle the form submission
                    // The form has the appropriate hidden fields for FormSubmit configuration
                    await fetch(contactForm.action, {
                        method: 'POST',
                        body: new FormData(contactForm)
                    });
                    
                    // Show success message
                    showFormMessage('success', 'Message sent successfully! I\'ll get back to you soon.');
                    
                    // Reset the form
                    contactForm.reset();
                    
                } catch (error) {
                    // Show error message
                    showFormMessage('error', 'Failed to send message. Please try again later.');
                    console.error('Form submission error:', error);
                } finally {
                    // Reset button state
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                }
            }
        });
    }
});

// Validate the form
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    // Reset all error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Validate name
    if (!nameInput.value.trim()) {
        showInputError(nameInput, 'Name is required');
        isValid = false;
    }
    
    // Validate email
    if (!emailInput.value.trim()) {
        showInputError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showInputError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    if (!subjectInput.value.trim()) {
        showInputError(subjectInput, 'Subject is required');
        isValid = false;
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
        showInputError(messageInput, 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showInputError(messageInput, 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

// Show input error message
function showInputError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = errorMessage;
}

// Show form message (success or error)
function showFormMessage(type, message) {
    // Remove any existing message
    const existingMessage = document.getElementById('form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.id = 'form-message';
    messageElement.textContent = message;
    
    if (type === 'success') {
        messageElement.className = 'form-message success';
        messageElement.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    } else {
        messageElement.className = 'form-message error';
        messageElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    }
    
    // Insert before the form
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(messageElement, contactForm);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageElement.classList.add('fade-out');
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 5000);
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}