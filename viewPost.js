const postDiv = document.getElementById("post-content");
const headerDiv = document.getElementById("post-header");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    postDiv.textContent = "Post ID not set!";
} else {

    // ---- Fetch post content ----
    fetch(`https://turtleposts.vercel.app/api/post-content?id=${encodeURIComponent(id)}&col=trtl`)
        .then(async (res) => {
            if (!res.ok) {
                switch (res.status) {
                    case 404:
                        postDiv.textContent = "Post not found!";
                        break;
                    case 400:
                        postDiv.textContent = "Bad request.";
                        break;
                    case 500:
                        postDiv.textContent = "Server error.";
                        break;
                    default:
                        postDiv.textContent = `Unexpected error (${res.status}).`;
                }
                return null;
            }
            return res.json();
        })
        .then((data) => {
            if (!data || !data.content) {
                if (!postDiv.textContent)
                    postDiv.textContent = "Invalid API response.";
                return;
            }

            postDiv.innerHTML = data.content;
        })
        .catch(() => {
            postDiv.textContent = "Network error. Failed to reach the API.";
        });


    // ---- Fetch post info (title/author/timestamp) ----
    fetch(`https://turtleposts.vercel.app/api/post-info?id=${encodeURIComponent(id)}&col=trtl`)
        .then(async (res) => {
            if (!res.ok) {
                switch (res.status) {
                    case 404:
                        headerDiv.textContent = `POST ${id} | Post not found`;
                        break;
                    case 400:
                        headerDiv.textContent = "Header error: Bad request.";
                        break;
                    case 500:
                        headerDiv.textContent = "Header error: Server error.";
                        break;
                    default:
                        headerDiv.textContent = `Header error (${res.status}).`;
                }
                return null;
            }
            return res.json();
        })
        .then((data) => {
            if (!data) return;

            const timestamp = new Date(data.timestamp).toLocaleString();

            headerDiv.textContent =
                `POST ${id} | ${data.title} | ${data.author} | ${timestamp}`;
        })
        .catch(() => {
            headerDiv.textContent = "Header error: Network failure.";
        });
}