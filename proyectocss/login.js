function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("mensaje-error");

    if ((user === "Juan Antonio" && pass === "Mateo Cordero") || (user === "Manolo" && pass === "Muela")) {
        alert("Usuario correcto");
        document.getElementById("login-container").style.display = "none";
        document.getElementById("contenido-web").style.display = "block";
    } else {
        error.innerHTML = "Usuario o contraseña no válidos.";
    }
}