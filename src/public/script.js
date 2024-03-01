
document.addEventListener("DOMContentLoaded", function() {
    // Example: toggling the visibility of the first article
    const firstArticle = document.querySelector("article");
    firstArticle.addEventListener("click", function() {
        this.style.display = this.style.display === "none" ? "block" : "none";
    });
});
