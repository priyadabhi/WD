function changeicon(icon) {
    let i = document.getElementById(icon)
    document.body.classList.toggle("menu")

    if (document.body.classList.contains("menu")) {
        i.classList.remove("fa-bar")
        i.classList.add("fa-xmark")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bar")
    }
}