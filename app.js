document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE NAVIGATION TOGGLE
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-xmark';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });

    // 2. ACTIVE NAV LINK ON SCROLL
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. FAQ ACCORDION
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            
            // Toggle current active state
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 4. RECOMMENDATION CALCULATOR
    const recommendationForm = document.getElementById('recommendationForm');
    const calcResult = document.getElementById('calcResult');
    const recommendedProductName = document.getElementById('recommendedProductName');
    const recommendedProductDesc = document.getElementById('recommendedProductDesc');
    const resultWhatsAppBtn = document.getElementById('resultWhatsAppBtn');

    if (recommendationForm) {
        recommendationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const age = document.getElementById('userAge').value;
            const goal = document.getElementById('userGoal').value;
            
            let prodName = "";
            let prodDesc = "";
            let waMsg = "";

            if (goal === 'autoimun' || age === 'anak') {
                prodName = "4Life Transfer Factor™ Tri-Factor Formula";
                prodDesc = "Menyeimbangkan dan menenangkan sistem kekebalan tubuh Anda dengan lembut. Sangat direkomendasikan bagi anak-anak, lansia sensitif, serta penderita alergi atau penyakit autoimun.";
                waMsg = "Halo Admin 4Life, saya berminat memesan Tri-Factor Formula setelah mencoba Kalkulator Rekomendasi di website.";
            } else if (goal === 'stamina') {
                prodName = "4Life RioVida Stix™ Tri-Factor";
                prodDesc = "Memberikan asupan antioksidan premium dari buah-buahan super (acai berry, delima, elderberry) dipadukan dengan Transfer Factor. Sangat baik untuk stamina harian, energi, dan kesegaran tubuh.";
                waMsg = "Halo Admin 4Life, saya berminat memesan RioVida Stix setelah mencoba Kalkulator Rekomendasi di website.";
            } else {
                prodName = "4Life Transfer Factor Plus™ Tri-Factor Formula";
                prodDesc = "Formula pertahanan imun andalan kami. Meningkatkan respon sel NK (Natural Killer) hingga 437% untuk perlindungan super kuat terhadap virus, bakteri, dan pemulihan stamina tubuh dengan cepat.";
                waMsg = "Halo Admin 4Life, saya berminat memesan Transfer Factor Plus setelah mencoba Kalkulator Rekomendasi di website.";
            }

            // Show result
            recommendedProductName.textContent = prodName;
            recommendedProductDesc.textContent = prodDesc;
            resultWhatsAppBtn.href = `https://wa.me/628123456789?text=${encodeURIComponent(waMsg)}`;
            
            calcResult.classList.remove('hidden');
            
            // Smooth scroll to result
            calcResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
});
