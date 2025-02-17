function toggleTheme() {
    const body = document.body;
    const overlay = document.querySelector('.theme-transition');

    body.classList.add("switching");

    setTimeout(() => {
        body.classList.toggle("dark-mode");
    }, 300);

    setTimeout(() => {
        body.classList.remove("switching");
    }, 600);
}
