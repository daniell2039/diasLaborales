const esDiaLaboral = (dia) => { 
    switch (dia) {
        case 0:
        case 1: 
        case 2: 
        case 3: 
        case 4: 
            return "Hoy si hay chamba";
        case 5: 
        case 6:
            return "Hoy no se chambea"; 
        default:
            return "Dia invalido";
}
}

const verificarDiaLaboral = () => {
    const fechaInput = document.getElementById("date").value;
    const fechaSeleccionada = new Date(fechaInput);
    const diaSemana = fechaSeleccionada.getDay();

    const resultado = esDiaLaboral(diaSemana);
    const resultadoFecha = document.getElementById("resultadoChamba");
    
    resultadoFecha.textContent = resultado;
}