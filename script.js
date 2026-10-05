// Funcionalidad para el botón principal "Iniciar Trámite General"
document.getElementById('btn-iniciar').addEventListener('click', function() {
    alert("¡Bienvenido al sistema! Redirigiendo al catálogo de trámites disponibles.");
    window.location.href = "#tramites";
});

// Funcionalidad para los botones de las tarjetas ("Solicitar", "Consultar", "Reportar")
const botonesTramite = document.querySelectorAll('.btn-secondary');

botonesTramite.forEach(boton => {
    boton.addEventListener('click', function() {
        const nombreTramite = this.getAttribute('data-tramite');
        const folioAleatorio = Math.floor(100000 + Math.random() * 900000); // Genera un número de folio de 6 dígitos
        
        alert(`Has seleccionado: "${nombreTramite}".\nTu solicitud ha sido registrada con éxito en el sistema del COPACI.\nNúmero de Folio asignado: #${folioAleatorio}\n\nEn breve un representante se pondrá en contacto.`);
    });
});