const formularioLogin = document.getElementById('formularioLogin');

formularioLogin.addEventListener('submit', function(evento) {
    // 1. Prevenir el comportamiento por defecto
    evento.preventDefault();

    // 2. Capturar los datos ingresados
    const usuarioValor = document.getElementById('usuario').value;
    const contrasenaValor = document.getElementById('contrasena').value;

    // 3. Validar las credenciales (credenciales estáticas para este ejercicio)
    if (usuarioValor === 'admin' && contrasenaValor === '1234') {
        // 4. Éxito: Redirigir al dashboard
        window.location.href = 'dashboard.html';
    } else {
        // 5. Error: Mostrar mensaje
        alert('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.');
    }
});