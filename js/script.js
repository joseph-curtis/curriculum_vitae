document.addEventListener('DOMContentLoaded', function() {
    // Example: Change background color on scroll
    window.onscroll = function() {
        let nav = document.querySelector('nav');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.backgroundColor = '#f8f8f8';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    };
});
