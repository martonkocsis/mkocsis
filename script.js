document.addEventListener('DOMContentLoaded', function() {
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!reduceMotionQuery.matches) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
});
