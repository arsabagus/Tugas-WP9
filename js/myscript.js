const navbar = document.getElementById('navbarItems');
const navItems = navbar.getElementsByClassName('nav-link');

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');

        current[0].className = current[0].className.replace('active');
        this.className += " active";
    })
}