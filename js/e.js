(function () {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            setTimeout(fn, 1000 / 60);
        };
    }
})();

window.addEventListener('load', function () {
    let _links = document.querySelectorAll('a'),
        _anchorLinks = Array.filter(_links, function (obj) {
            if (obj.getAttribute('href').match(/(#)/)) {
                return true;
            }
        });
    _anchorLinks.forEach(function (obj) {
        obj.addEventListener('click', function (e) {
            e.preventDefault();
            let _target = obj.getAttribute('href');
            document.querySelector(_target).scrollIntoView({block: 'start', behavior: 'smooth'});
        });
    });
});