document.addEventListener("DOMContentLoaded", () => {
    console.log("Website siap digunakan!");
});

function toggleContactInfo() {
    const popup = document.getElementById('contactPopup');
    popup.classList.toggle('show');
}