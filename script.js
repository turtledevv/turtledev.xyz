function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

window.onload = function () {
    const savedMode = getCookie('theme');
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
    const box = document.getElementById("blackBox");
    if (!box) {
    return;
    }
    box.style.opacity = "0";
    box.addEventListener("transitionend", () => {
    if (box.parentNode) {
        box.remove();
        }
    });
}