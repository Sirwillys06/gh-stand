  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Número de WhatsApp destino (con código de país)
    const numeroDestino = '573105109125';

    // Texto del mensaje
    const texto = `Hola, soy ${nombre}.\nMi correo es: ${correo}.\nMi número es: ${telefono}.\nMensaje: ${mensaje}`;

    // Construcción del enlace a WhatsApp
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  });