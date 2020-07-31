const elements = document.querySelectorAll(".col-sm")
document.querySelector(".magnus").addEventListener("click", () => {
    window.location.href = `file:///H:/Projects/Chess%20Players%20Websites/profiles/magnus.html`
})

for (let el of elements) {
    const value = el.classList[1]
    el.addEventListener("click", () => {
        window.location.href = `file:///H:/Projects/Chess%20Players%20Websites/profiles/${value}.html`
    })
}