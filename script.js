function toggleTheme() {
    const body = document.body;
    const overlay = document.querySelector('.theme-transition');

    body.classList.add("switching");

    setTimeout(() => {
        body.classList.toggle("dark-mode");
    }, 300); // รอ 300ms ให้จอ fade ก่อนเปลี่ยนธีมจริง

    setTimeout(() => {
        body.classList.remove("switching");
    }, 600); // รอให้ fade กลับปกติหลังเปลี่ยนธีม
}
