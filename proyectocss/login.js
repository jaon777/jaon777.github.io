function verificarAcceso() {
    const usuariosValidos = {
        "Juan Antonio": "Mateo Cordero",
        "Manolo": "Muela"
    };

    let usuarioInput = prompt("Introduce tu nombre de usuario:");
    let passInput = prompt("Introduce tu contraseña:");

    if (usuariosValidos[usuarioInput] && usuariosValidos[usuarioInput] === passInput) {
        alert("Acceso concedido. Bienvenido, " + usuarioInput);
    } else {
        alert("Usuario o contraseña no válidos.");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Acceso Denegado</h1>";
        window.stop();
    }
}

verificarAcceso();