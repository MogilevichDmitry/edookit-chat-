(function() {

    /* map actions*/
    var mapButton = document.getElementById('map-expand');
    var mapBox = document.getElementById('map-box');
    var contentSearchMap = document.getElementById('content__search-map');

    mapButton.onclick = function() {
        contentSearchMap.classList.toggle('content__search-map_row');
        mapBox.classList.toggle('map-box_expanded');
        mapButton.classList.toggle('fullscreen-btn_active');
    }

    /* change view buttons */
    var viewButton = document.getElementsByClassName('view-selector__item');

    for (var i = 0; i < viewButton.length; i++) {
        viewButton[i].onclick = function () {
            viewButton[0].classList.toggle('view-selector__item_active');
            viewButton[1].classList.toggle('view-selector__item_active');
        }
    }
})();