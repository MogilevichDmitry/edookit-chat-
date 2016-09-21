(function() {
    var menuBtn = document.getElementById('menu-btn');
    var menuList = document.getElementById('menu-list');

    menuBtn.onclick = function() {
       menuList.classList.toggle('menu-list_closed');
    }

})();