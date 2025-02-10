

function changeicon(icon, menu) {
    let i = document.getElementById(icon)
    let m = document.getElementById(menu)
    m.classList.toggle("menu")

    if (m.classList.contains("menu")) {
        i.classList.remove("fa-bar")
        i.classList.add("fa-xmark")
        m.style.display = "flex"
        m.style.flexDirection = "column"
        m.style.flexWrap = "nowrap"
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bar")
        m.style.display = "none"
        // menu.style.display = "none"
    }
}