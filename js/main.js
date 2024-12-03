// Detectar si el usuario ya tiene un tema preferido en localStorage
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    // Cambiar el icono a luna cuando el tema es oscuro
    document.getElementById('toggle-mode').querySelector('i').classList.replace('fa-sun', 'fa-moon');
} else {
    // Cambiar el icono a sol cuando el tema es claro
    document.getElementById('toggle-mode').querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Botón para cambiar el modo
document.getElementById('toggle-mode').addEventListener('click', function() {
    // Alternar entre los modos claro y oscuro
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el icono entre sol y luna
    const icon = document.getElementById('toggle-mode').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


