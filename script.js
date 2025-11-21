document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const codigo = document.getElementById('codigo').value.toUpperCase().trim();
            const apellido = document.getElementById('apellido').value.toUpperCase().trim();
            
            // Validar que ambos campos tengan valores
            if (!codigo || !apellido) {
                alert('Por favor, complete ambos campos.');
                return;
            }
            
            // Validar código de reservación
            if (codigo === 'LOUKCL' && apellido === 'AGUILAR') {
                // Redirigir a la página de detalles de la reservación
                window.location.href = 'reservacion.html';
            } else if (codigo === 'ISYCNQ') {
                // Validar apellido (acepta "GOMEZ ESQUEDA" o solo "GOMEZ")
                const apellidoNormalizado = apellido.replace(/\s+/g, ' ').trim();
                if (apellidoNormalizado === 'GOMEZ ESQUEDA' || apellidoNormalizado === 'GOMEZ') {
                    // Redirigir a la página de detalles de la reservación 2
                    window.location.href = 'reservacion2.html';
                } else {
                    alert('No se encontró ninguna reservación con los datos proporcionados.\n\nPor favor, verifique el código de reservación y el apellido.');
                }
            } else {
                alert('No se encontró ninguna reservación con los datos proporcionados.\n\nPor favor, verifique el código de reservación y el apellido.');
            }
        });
        
        // Convertir código a mayúsculas mientras se escribe
        const codigoInput = document.getElementById('codigo');
        if (codigoInput) {
            codigoInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.toUpperCase();
            });
        }
        
        // Convertir apellido a mayúsculas mientras se escribe
        const apellidoInput = document.getElementById('apellido');
        if (apellidoInput) {
            apellidoInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.toUpperCase();
            });
        }
    }
});


