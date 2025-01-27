// Keresési funkció
function filterAds() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var ads = document.getElementById('adsContainer').getElementsByClassName('ad-box');

    for (var i = 0; i < ads.length; i++) {
        var title = ads[i].getElementsByTagName('h5')[0];
        if (title) {
            var txtValue = title.textContent || title.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                ads[i].style.display = "";
            } else {
                ads[i].style.display = "none";
            }
        }
    }
}


// Keresés szűrése
function filterAds() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var ads = document.querySelectorAll('.ad-box');
    ads.forEach(function(ad) {
        var title = ad.querySelector('h5');
        if (title && title.textContent.toLowerCase().includes(filter)) {
            ad.style.display = "block";
        } else {
            ad.style.display = "none";
        }
    });
}