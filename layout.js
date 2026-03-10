(async () => {
    const body = document.body || document.documentElement;

    const headerReq = fetch("/assets/header.html").then(r => r.text());
    const footerReq = fetch("/assets/footer.html").then(r => r.text());

    // Insert header
    headerReq.then(html => {
        const first = body?.firstElementChild;

        if (first && first.classList.contains("aboveHeader")) {
            first.insertAdjacentHTML("afterend", html);
        } else {
            body.insertAdjacentHTML("afterbegin", html);
        }

        const currentPage = body.dataset.page;
        if (currentPage) {
            const btn = document.getElementById("nav-" + currentPage);
            if (btn) btn.style.fontWeight = "bold";
        }
    });

    // Insert footer
    footerReq.then(html => {
        body.insertAdjacentHTML("beforeend", html);
    });
})();