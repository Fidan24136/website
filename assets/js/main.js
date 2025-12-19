// Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-item, .stat-card, .project-photo, .about-preview, .projects-intro').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = hero.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Typing animation for hero name (optional - disabled to use CSS animation instead)
    // Uncomment below if you prefer typing effect over fade-in
    /*
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        heroName.style.opacity = '1';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500);
    }
    */

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element) => {
        const target = element.textContent;
        const isNumber = /^\d+/.test(target);
        if (isNumber) {
            const num = parseInt(target);
            const duration = 2000;
            const increment = num / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + (target.includes('+') ? '+' : '') + (target.includes('/') ? '/10' : '');
                }
            }, 16);
        }
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Cursor trail effect (optional, can be disabled)
    let cursorTrail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            if (cursorTrail.length > maxTrailLength) {
                cursorTrail.shift();
            }
        }
    });

    // Image lazy loading with fade in
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button, .project-btn, .photo-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Interactive profile photo - add floating particles on hover
    const profilePhotoElement = document.querySelector('.profile-photo');
    if (profilePhotoElement) {
        profilePhotoElement.addEventListener('mouseenter', function() {
            for (let i = 0; i < 8; i++) {
                createParticle(this);
            }
        });
    }

    function createParticle(element) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--random-x', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--random-y', (Math.random() - 0.5) * 200 + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }

    // Interactive logo - add glow pulse
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.classList.add('logo-glow');
        });
        logo.addEventListener('mouseleave', function() {
            this.classList.remove('logo-glow');
        });
    }

    // Add tilt effect to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add magnetic effect to social icons
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) translateY(-3px)`;
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add interactive text reveal on hover for project titles
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.background = 'var(--gradient-orange-yellow)';
            this.style.webkitBackgroundClip = 'text';
            this.style.webkitTextFillColor = 'transparent';
            this.style.backgroundClip = 'text';
            this.style.transform = 'scale(1.05)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.webkitBackgroundClip = '';
            this.style.webkitTextFillColor = '';
            this.style.backgroundClip = '';
            this.style.transform = '';
        });
    });

    // Mouse tracking for project photos
    const projectPhotos = document.querySelectorAll('.project-photo');
    projectPhotos.forEach(photo => {
        photo.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.style.setProperty('--mouse-x', x + '%');
            this.style.setProperty('--mouse-y', y + '%');
        });
    });

    // Add floating animation to profile photo on page load
    if (profilePhotoElement) {
        profilePhotoElement.style.animation = 'floatProfile 3s ease-in-out infinite';
    }
});

// Add smooth page transitions
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

