(function() {
    var mapButton = document.getElementById('map-expand');
    var mapBox = document.getElementById('map-box');
    var contentSearchMap = document.getElementById('content__search-map');

    mapButton.onclick = function() {
        contentSearchMap.classList.toggle('content__search-map_row');
        mapBox.classList.toggle('map-box_expanded');
    }
})();