document.addEventListener("DOMContentLoaded", function() {
    // Add smooth scrolling to all links
    var links = document.querySelectorAll("a[href^='#']");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", smoothScroll);
    }

    // Smooth scrolling function
    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000; // Animation duration in milliseconds
        var start = null;

        // Animation function
        function animation(currentTime) {
            if (start === null) start = currentTime;
            var timeElapsed = currentTime - start;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function (linear)
        function ease(t, b, c, d) {
            t /= d;
            return c * t + b;
        }

        requestAnimationFrame(animation);
    }
});
