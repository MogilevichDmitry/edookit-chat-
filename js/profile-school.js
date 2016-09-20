(function() {
    /* profile nav fixed */
    window.onscroll = function() {
        var profileNav = document.getElementById('profile-nav');
        if (profileNav.classList.contains('profile-nav_fixed')) {
            profileNav.remove('profile-nav_fixed');
        } else if (window.pageYOffset > 100) {
            profileNav.classList.add('profile-nav_fixed');
        }
    }
    //var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

})();