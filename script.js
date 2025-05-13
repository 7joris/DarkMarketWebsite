const siteName = "DarkMarket";
let titleIndex = 0;
let isTitleDeleting = false;
let currentTitle = '';

function animateTitle() {
    if (!isTitleDeleting && titleIndex < siteName.length) {
        currentTitle = siteName.substring(0, titleIndex + 1);
        document.title = currentTitle;
        titleIndex++;
        setTimeout(animateTitle, 150);
    } else if (isTitleDeleting && titleIndex > 0) {
        currentTitle = siteName.substring(0, titleIndex - 1);
        document.title = currentTitle;
        titleIndex--;
        setTimeout(animateTitle, 100);
    } else {
        isTitleDeleting = !isTitleDeleting;
        setTimeout(animateTitle, isTitleDeleting ? 1000 : 500);
    }
}

function bruteforceText() {
    const element = document.getElementById('bruteforce-text');
    const targetText = "DarkMarket";
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~";
    let iterations = 0;
    const maxIterations = 30;
    const delay = 80;

    element.innerHTML = '';
    for (let i = 0; i < targetText.length; i++) {
        const span = document.createElement('span');
        span.className = 'bruteforce-char';
        element.appendChild(span);
    }
    const spans = element.querySelectorAll('.bruteforce-char');

    const interval = setInterval(() => {
        iterations++;
        
        spans.forEach((span, index) => {
            if (iterations > maxIterations) {
                span.textContent = targetText[index];
                span.classList.add('bruteforce-final');
                if (index === spans.length - 1) {
                    clearInterval(interval);
                }
            } 
            else if (iterations > index * (maxIterations / targetText.length)) {
                span.textContent = chars[Math.floor(Math.random() * chars.length)];
            }
        });
    }, delay);
}

function animateProductCards() {
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

function setupFAQAccordion() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

function setupNavigation() {

    document.querySelector('a[href="#hero-section"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#hero-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('a[href="#products"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#products').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('a[href="#faq"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#faq').scrollIntoView({
            behavior: 'smooth'
        });
    });

document.querySelector('a[href="#reviews"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#reviews').scrollIntoView({
        behavior: 'smooth'
    });
});

    document.querySelector('a[href="#site-footer"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#site-footer').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

function setupBuyButtons() {
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.parentNode.querySelector('h3').textContent;
            alert(`You have selected : ${productName}\n\nContact us on Telegram or Discord to complete your purchase.`);
        });
    });

    document.querySelectorAll('.desc-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.parentNode.parentNode.querySelector('h3').textContent;
            window.location.href = this.getAttribute('href');
        });
    });
}

function setupProductGallery() {
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src.replace('-thumb', '-preview');
                mainImage.alt = this.alt;
            });
        });
    }
}

window.onload = function() {
    animateTitle();
    bruteforceText();
    animateProductCards();
    setupFAQAccordion();
    setupNavigation();
    setupBuyButtons();
    setupProductGallery();
};

