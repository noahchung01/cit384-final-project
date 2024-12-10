document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    if (!backToTopButton) {
        console.warn("No Back to Top button found.");
        return;
    }

    // Detect scrolling to toggle button visibility
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Scroll both body and html elements to the top when button is clicked
    backToTopButton.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

