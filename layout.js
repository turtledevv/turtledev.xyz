(async () => {
    const body = document.body || document.documentElement;

    const headerReq = fetch("/assets/header.html").then(r => r.text());
    const footerReq = fetch("/assets/footer.html").then(r => r.text());

    headerReq.then(html => {
        const first = document.body?.firstElementChild;

        if (first && first.classList.contains("aboveHeader")) {
            first.insertAdjacentHTML("afterend", html);
        } else {
            (document.body || body).insertAdjacentHTML("afterbegin", html);
        }
    });

    footerReq.then(html => {
        (document.body || body).insertAdjacentHTML("beforeend", html);
    });
})();

// called "aparams" to fix conflict with other scripts
const aparams = new URLSearchParams(window.location.search);
if (aparams.get("nl") === "1") {
    // Create a <style> element
    const style = document.createElement("style");
    style.textContent = `
        nav, header {
            display: flex;
            justify-content: center;
        }
    `;
    document.head.appendChild(style);
}