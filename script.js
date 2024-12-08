function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    passwordField.setAttribute('type', passwordFieldType === 'password' ? 'text' : 'password');
}

const modal = document.getElementById("forgotPasswordModal");
const btn = document.getElementById("forgotPasswordLink");
const span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}