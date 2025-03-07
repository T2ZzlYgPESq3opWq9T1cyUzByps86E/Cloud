(function() {
    var url = window.location.href;
    if (url.indexOf("www.") === -1) {
        var newUrl = url.replace("https://", "https://www.");
        window.location.replace(newUrl);
    }
})();
