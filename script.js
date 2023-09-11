document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('registro-form');

  formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;

      const data = {
          name: nombre,
          surname: apellido,
          birthdate: fechaNacimiento
      };

      fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Respuesta del servidor:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });
});