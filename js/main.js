document.querySelector('input[name="resumen"]').addEventListener('click', function() {
    // Obtener los valores de los campos de entrada
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;

    // Calcular el descuento basado en la categoría seleccionada
    var descuento = 0;
    if (categoria === '1') {
        descuento = 0.8; // 80% de descuento para la categoría Estudiante
    } else if (categoria === '2') {
        descuento = 0.5; // 50% de descuento para la categoría Trainee
    } else if (categoria === '3') {
        descuento = 0.15; // 15% de descuento para la categoría Junior
    }

    // Calcular el total a pagar
    var total = 200 * cantidad * (1 - descuento);

    // Mostrar el total a pagar en el campo correspondiente
    document.getElementById('total-a-pagar').value = '$' + total.toFixed(2);
});