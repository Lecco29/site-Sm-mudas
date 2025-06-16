// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu setup
    const menuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <a href="/" class="text-2xl font-bold text-green-600">Mudas Herculândia</a>
            <button class="text-gray-600 hover:text-green-600 close-menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <nav class="flex flex-col space-y-4">
            <a href="/" class="text-gray-600 hover:text-green-600 text-lg">Home</a>
            <a href="/sobre" class="text-gray-600 hover:text-green-600 text-lg">Sobre Nós</a>
            <a href="/produtos" class="text-gray-600 hover:text-green-600 text-lg">Produtos</a>
            <a href="/contato" class="text-gray-600 hover:text-green-600 text-lg">Contato</a>
        </nav>
    `;
    document.body.appendChild(mobileMenu);

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeButton = mobileMenu.querySelector('.close-menu');
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add hover effect to all buttons
    document.querySelectorAll('button').forEach(button => {
        button.classList.add('transform', 'transition', 'duration-300', 'hover:scale-105');
    });

    // Add hover effect to all cards
    document.querySelectorAll('.bg-white.rounded-lg').forEach(card => {
        card.classList.add('transform', 'transition', 'duration-300', 'hover:shadow-xl');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation classes to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .bg-white.rounded-lg').forEach(element => {
    observer.observe(element);
});

// Contact form handling with validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Phone validation (Brazilian format)
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX');
            return;
        }

        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full';
        successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        document.body.appendChild(successMessage);

        // Animate the success message
        setTimeout(() => {
            successMessage.classList.remove('translate-x-full');
        }, 100);

        // Remove the message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('translate-x-full');
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 5000);

        contactForm.reset();
    });

    // Add phone mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                }
            }
            
            e.target.value = value;
        });
    }
}

// Product quote buttons with enhanced functionality
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.trim() === 'Solicitar Orçamento') {
        button.addEventListener('click', function() {
            const productCard = this.closest('.bg-white');
            const productName = productCard.querySelector('h3').textContent;
            const productImage = productCard.querySelector('img').src;
            
            // Store product info in localStorage
            localStorage.setItem('selectedProduct', JSON.stringify({
                name: productName,
                image: productImage
            }));
            
            // Redirect to contact page
            window.location.href = `/contato?product=${encodeURIComponent(productName)}`;
        });
    }
});

// Social media links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('.sr-only').textContent.toLowerCase();
        const urls = {
            facebook: 'https://facebook.com/mudasherculandia',
            instagram: 'https://instagram.com/mudasherculandia'
        };
        
        if (urls[platform]) {
            window.open(urls[platform], '_blank');
        }
    });
}); 