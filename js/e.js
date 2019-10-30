(function () {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            setTimeout(fn, 1000 / 60);
        };
    }
})();

window.addEventListener('load', function () {
    let _links = document.querySelectorAll('a'),
        _anchorLinks = [];

    _links.forEach(obj => {
        if (obj.getAttribute('href').match(/(#)/)) {
            _anchorLinks.push(obj);
        }
    });

    _anchorLinks.forEach(function (obj) {
        obj.addEventListener('click', function (e) {
            e.preventDefault();
            let _target = obj.getAttribute('href');
            document.querySelector(_target).scrollIntoView({block: 'start', behavior: 'smooth'});
        });
    });

    let _mainMenu = document.querySelector('.main-nav');
    document.querySelectorAll('.menu-opener')[0].addEventListener('touchstart', function () {
        _mainMenu.classList.toggle('opened');
    });
    window.addEventListener('scroll', function () {
        if (_mainMenu.classList.contains('opened')){
            _mainMenu.classList.remove('opened');
        }
    })
});
