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

const params = new URLSearchParams(window.location.search);
if (params.get("nw") === "1") {
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