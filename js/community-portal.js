(function() {

    /* toggle menu */
    var menuBtn = document.getElementById('menu-btn');
    var menuList = document.getElementById('menu-list');

    menuBtn.onclick = function() {
       menuList.classList.toggle('menu-list_closed');
    }

    /* toggle account-expand */
    var accountExpandBtn = document.getElementById('account-expand-btn');
    var accountExpandBlock = document.getElementById('account-expand-block');
    accountExpandBtn.onclick = function() {
        accountExpandBtn.classList.toggle('expand-btn_active')
        accountExpandBlock.classList.toggle('_no-visible');
    }
})();