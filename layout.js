(async () => {
    const body = document.body || document.documentElement;

    const headerReq = fetch("/assets/header.html").then(r => r.text());
    const footerReq = fetch("/assets/footer.html").then(r => r.text());

    // insert da header
    headerReq.then(html => {
        const first = body?.firstElementChild;

        if (first && first.classList.contains("aboveHeader")) {
            first.insertAdjacentHTML("afterend", html);
        } else {
            body.insertAdjacentHTML("afterbegin", html);
        }

        requestAnimationFrame(() => {
            const currentPage = body.dataset.page;
            if (!currentPage) return;

            // use querySelector to handle cases where nav buttons are nested
            const btn = document.querySelector(`#nav-${currentPage}`);
            if (btn) btn.style.fontWeight = "bold";
        });
    });

    // then, insert thy footeh
    footerReq.then(html => {
        body.insertAdjacentHTML("beforeend", html);
    });
})();