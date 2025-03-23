const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const navbar = document.getElementById("collapsed");

function openCollapse() {
    navbar.classList.toggle("active");
}

openBtn.addEventListener("click", () => openCollapse());
closeBtn.addEventListener("click", () => openCollapse());