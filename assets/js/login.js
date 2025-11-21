
// Manejo del formulario
const loginForm = document.getElementById('loginForm');
const btnLogin = loginForm.querySelector('.btn-login');
const alertError = document.getElementById('alertError');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Añadir clase de loading
    btnLogin.classList.add('loading');
    alertError.style.display = 'none';

    // Simular llamada al servidor
    setTimeout(() => {
        btnLogin.classList.remove('loading');

        // Simular error (comentar para producción)
        // alertError.style.display = 'flex';

        // Redirigir al dashboard (descomentar para producción)
        window.location.href = 'dashboard.html';
    }, 1500);
});

// Animación de entrada suave
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de ripple en el botón
btnLogin.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('div');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});
