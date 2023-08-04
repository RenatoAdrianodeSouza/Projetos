function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('unico')

    const img = document.querySelector("#profile img")

    if (html.classList.contains('unico')) {
        img.setAttribute('src', './assets/renato_unico.png')
    } else {
        img.setAttribute('scr', './assets/renato.png')
    }
}