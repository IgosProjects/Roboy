document.addEventListener('DOMContentLoaded', function () {
    showTabFromHash();

    window.addEventListener('hashchange', function () {
        showTabFromHash();
    });
});



function showTabFromHash() {
    var hash = window.location.hash.substr(1);
    var tabs = document.querySelectorAll('.tab');
    var homeTab = document.getElementById('home'); // Replace 'home' with the actual ID of your home tab

    if (!hash || hash === 'home') {  // Show home tab by default
        // Hide other tabs
        tabs.forEach(function (tab) {
            if (tab !== homeTab) {
                tab.style.display = 'none';
            }
        });

        // Show home tab
        homeTab.style.display = 'block';
    } else {
        tabs.forEach(function (tab) {
            if (tab.id === hash) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    }
}

 // Use JavaScript to hide noscript content when JavaScript is allowed
 document.addEventListener("DOMContentLoaded", function () {
    var noscriptElement = document.querySelector("noscript");
    noscriptElement.style.display = "none";
});