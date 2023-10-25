const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://docs.google.com/spreadsheets/d/1084Oug8HH-9Cf_ecagMzhwe-TZWh78OqvnB_P6uzllM/edit?usp=sharing', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value
        })
    });
});
