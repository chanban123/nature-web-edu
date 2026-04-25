document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Nature Wave Music Academy!');
    
    // Initialize EmailJS
    // Sign up at https://www.emailjs.com/ and replace these with your credentials
    // You'll get these from EmailJS dashboard after setting up a service
    // emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
    
    const SERVICE_ID = "YOUR_SERVICE_ID"; // Gmail or other email service
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Email template you create
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default for anchor links, not for page links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Contact form submission with email sending
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                to_email: "naturewavemusic@gmail.com", // Academy email
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                phone: formData.get('phone'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validate form
            if (!data.from_name || !data.from_email || !data.phone || !data.subject || !data.message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            btn.textContent = '⏳ Sending...';
            btn.disabled = true;
            
            // Send email via EmailJS
            // emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            //     to_email: data.to_email,
            //     from_name: data.from_name,
            //     from_email: data.from_email,
            //     phone: data.phone,
            //     subject: data.subject,
            //     message: data.message
            // })
            // .then(function(response) {
            //     console.log('Email sent successfully!', response);
                
            //     // Show success message
            //     btn.textContent = '✓ Message Sent!';
            //     btn.style.background = '#45a049';
                
            //     // Reset form
            //     contactForm.reset();
                
            //     alert('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
                
            //     // Restore button after 3 seconds
            //     setTimeout(() => {
            //         btn.textContent = originalText;
            //         btn.style.background = '';
            //         btn.disabled = false;
            //     }, 3000);
            // })
            // .catch(function(error) {
            //     console.error('Email sending failed:', error);
                
            //     btn.textContent = '✗ Failed to Send';
            //     btn.style.background = '#e74c3c';
            //     btn.disabled = false;
                
            //     alert('Failed to send message. Please try again or contact us directly.');
                
            //     // Restore button after 3 seconds
            //     setTimeout(() => {
            //         btn.textContent = originalText;
            //         btn.style.background = '';
            //     }, 3000);
            // });
        });
    }

    // Newsletter form with email confirmation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Validate email
            if (!email) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            btn.textContent = '⏳ Subscribing...';
            btn.disabled = true;
            
            // Send subscription confirmation email
            // emailjs.send(SERVICE_ID, "newsletter_template", {
            //     to_email: email,
            //     user_email: email
            // })
            // .then(function(response) {
            //     console.log('Newsletter subscription email sent!', response);
            //     btn.textContent = '✓ Subscribed!';
            //     btn.style.background = '#45a049';
            //     newsletterForm.reset();
            //     alert('Thank you for subscribing! A confirmation email has been sent to ' + email);
                
            //     setTimeout(() => {
            //         btn.textContent = originalText;
            //         btn.style.background = '';
            //         btn.disabled = false;
            //     }, 3000);
            // })
            // .catch(function(error) {
            //     console.error('Newsletter subscription failed:', error);
            //     btn.textContent = '✗ Failed';
            //     btn.style.background = '#e74c3c';
            //     btn.disabled = false;
                
            //     // Still show success for user experience (email backend would be manual)
            //     setTimeout(() => {
            //         btn.textContent = originalText;
            //         btn.style.background = '';
            //     }, 3000);
            // });
        });
    }

    // Button click handlers
    const buttons = document.querySelectorAll('.btn-primary, .btn-contact, .btn-video');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.className.includes('btn-contact')) {
                window.location.href = 'contact-us.html';
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    const cards = document.querySelectorAll('.class-card, .program-card, .feature-box, .testimonial-card, .teacher-card, .stat-box, .why-item, .class-detail-card, .schedule-box, .teacher-detail-card, .pricing-card, .detail-item, .offer-box, .faq-item, .why-learn-item, .quick-contact-btn, .info-box');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Counter animation for stats
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const element = entry.target;
                const duration = 2000; // 2 seconds animation
                const startTime = Date.now();
                
                element.classList.add('counted');
                
                function updateCount() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(progress * target);
                    
                    // Format number with comma separator
                    element.textContent = current.toLocaleString();
                    element.innerHTML += '<span>+</span>';
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        // Final value
                        element.textContent = target.toLocaleString();
                        element.innerHTML += '<span>+</span>';
                    }
                }
                
                updateCount();
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    // Observe counter elements
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Dropdown toggle function
function toggleDropdown(event) {
    event.preventDefault();
    const btn = event.currentTarget;
    const content = btn.nextElementSibling;
    
    // Toggle the active state on button
    btn.classList.toggle('active');
    
    // Toggle the content visibility
    if (content && content.classList.contains('dropdown-content')) {
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            content.style.display = 'none';
        } else {
            content.classList.add('show');
            content.style.display = 'block';
        }
    }
}