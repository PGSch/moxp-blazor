function initializeParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6e42e5"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.3,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6e42e5",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
}

// Initialize animations with reference counting
let initialized = false;

function initializeAnimations(heroElement) {
    if (initialized) return;
    initialized = true;

    // Stats animation
    const statValues = heroElement.querySelectorAll('.stat-value');
    const targetValues = [42.7, 12.9, 6.3];
    const increments = [0.1, 0.05, 0.02];
    
    statValues.forEach((el, i) => {
        let current = 0;
        const increment = increments[i];
        const target = targetValues[i];
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(interval);
                current = target;
            }
            el.textContent = (i === 2 ? current.toFixed(1) + '%' : '$' + Math.floor(current).toLocaleString() + (i === 0 ? 'M' : 'K'));
        }, 20);
    });

    // Token 3D animation
    const token3d = heroElement.querySelector('.token-3d');
    if (token3d) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            token3d.style.transform = `rotateX(${y * 30 - 15}deg) rotateY(${x * 30 - 15}deg) translateY(${y * 20 - 10}px)`;
        });
    }
}

// Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

function toggleMenu(isOpen) {
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    if (isOpen) {
        nav.classList.add('active');
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    } else {
        nav.classList.remove('active');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
}