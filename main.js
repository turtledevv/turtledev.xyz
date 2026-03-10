
function setCookie(name, value, days) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + "; expires=" + expires.toUTCString() + "; path=/";
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


window.onload = function () {
    var savedMode = getCookie('theme');
    if (savedMode === 'dark') {
        document.body.id = 'dark';
    }
    removeBlackBox();
};


function togglemode() {
    if (document.body.id === 'dark') {
        document.body.id = '';
        setCookie('theme', 'light', 365);
    } else {
        document.body.id = 'dark';
        setCookie('theme', 'dark', 365);
    }
}


function removeBlackBox() {
    var box = document.getElementById("blackBox");
    if (!box) return;

    box.style.opacity = "0";

    var removed = false;
    var cleanup = function() {
        if (removed) return;
        removed = true;
        if (box.parentNode) box.parentNode.removeChild(box);
    };

    if (box.addEventListener) {
        box.addEventListener("transitionend", cleanup, false);
    }

    /* in case shit fails, remove after 1s */
    setTimeout(cleanup, 1000);
}
