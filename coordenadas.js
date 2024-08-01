function convertirCartesianasAPolares() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var r, theta;

    if (!isNaN(x) && !isNaN(y)) {
        r = Math.sqrt(x * x + y * y);
        theta = Math.atan2(y, x) * (180 / Math.PI); // Convertir radianes a grados
        
        // Mostrar el resultado en la sección de resultados
        document.getElementById('resultado').textContent = `R: ${r.toFixed(2)}, Theta: ${theta.toFixed(2)}°`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingrese valores válidos para X y Y.';
    }
}

function convertirPolaresACartesianas() {
    var r = parseFloat(document.getElementById('r').value);
    var theta = parseFloat(document.getElementById('theta').value);
    var x, y;

    if (!isNaN(r) && !isNaN(theta)) {
        var radianes = theta * (Math.PI / 180); // Convertir grados a radianes
        x = r * Math.cos(radianes);
        y = r * Math.sin(radianes);
        
        // Mostrar el resultado en la sección de resultados
        document.getElementById('resultado').textContent = `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, ingrese valores válidos para R y Theta.';
    }
}