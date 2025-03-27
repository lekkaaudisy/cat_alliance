document.addEventListener('DOMContentLoaded', () => {

    // --- Particles.js Initialization ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // Density
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#00ffff", "#f800ff", "#39ff14"] // Array of neon colors
            },
            "shape": {
                "type": "triangle", // Can be "circle", "edge", "triangle", "polygon", "star"
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ffff", // Match primary neon
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3, // Movement speed
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // "grab", "bubble", "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // "push", "remove", "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 180,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    // --- Typing Effect for Tagline ---
    const taglineEl = document.getElementById('tagline');
    const taglineText = "Precision // Power // Progress"; // Your tagline
    let charIndex = 0;

    function typeTagline() {
        if (charIndex < taglineText.length) {
            taglineEl.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeTagline, 70); // Adjust typing speed (milliseconds)
        } else {
            // Optional: Add a blinking cursor or effect after typing finishes
             taglineEl.style.borderRight = '2px solid var(--primary-color)';
             setInterval(() => {
                 taglineEl.style.borderRightColor = (taglineEl.style.borderRightColor === 'transparent' ? 'var(--primary-color)' : 'transparent');
             }, 500);
        }
    }
    // Start typing after a delay to allow hero fade-in
    setTimeout(typeTagline, 1500);


    // --- Scroll-Triggered Animations ---
    const animatedSections = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after animation fires once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class if you want animation to re-trigger on scroll up/down
                 entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animatedSections.forEach(section => {
        observer.observe(section);
    });


    // --- Dynamic Year in Footer ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Optional: Navbar background change on scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(to bottom, rgba(10, 15, 31, 1), rgba(10, 15, 31, 0.8))';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(10, 15, 31, 0.9), rgba(10, 15, 31, 0))';
             navbar.style.boxShadow = 'none';
        }
    });

}); // End DOMContentLoaded
