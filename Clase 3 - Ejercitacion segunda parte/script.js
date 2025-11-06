// 1- Crea un botón que muestre un mensaje en consola al hacer clic.
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
    alert('¡Botón clickeado!');
});

// 2- Haz que un campo de texto cambie su color de fondo al escribir en él.
const campo = document.getElementById('cambiaColor');

  campo.addEventListener('input', () => {
    if (campo.value === '') {
      campo.style.backgroundColor = 'red';
    } else {
      campo.style.backgroundColor = 'green';
    }
  });

// Color inicial
campo.style.backgroundColor = campo.value === '' ? 'red' : 'green';



// 3- Implementa un contador que aumente cada vez que se haga clic en un botón.

  let suma = 0;
const button = document.getElementById('button');
const contador = document.getElementById('contador');

button.addEventListener('click', () => {
  suma++;
  contador.textContent = suma;
});

// 4- Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.
const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');  

  form.addEventListener('submit', function(event) {
      if (emailInput.value === '') {
          event.preventDefault(); // Evita el envío del formulario  
          errorMessage.textContent = 'El campo de correo electrónico no puede estar vacío.';
      }
  }) ;

// 5- Cambia la posición de un elemento cuando se pase el ratón sobre él.
const boxHover = document.getElementById('boxHover');

  boxHover.addEventListener('mouseover', function() {
    // Mover el elemento 100px a la derecha y 50px hacia abajo
    boxHover.style.transform = 'translate(100px, 50px)';
    boxHover.style.transition = 'transform 0.3s ease';
  });

  boxHover.addEventListener('mouseout', function() {
    // Volver a la posición original
    boxHover.style.transform = 'translate(0, 0)';
  });

// 6- Detecta y muestra en la consola la tecla presionada por el usuario.
// Muestra en consola la tecla presionada
      document.getElementById('inputKeydown').addEventListener('keydown', function(e) {
        console.log('Tecla presionada:', e.key);
      });

// 7- Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).
  document.addEventListener('DOMContentLoaded', () => {
      const boxHover1 = document.getElementById('boxHover1');
      const toggleBtn = document.getElementById('toggleBtn');

      // Al hacer clic, alternamos la clase "moved"
      toggleBtn.addEventListener('click', () => {
        boxHover1.classList.toggle('moved');
      });
    });
// 8- Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.
const dropdown = document.getElementById('dropdown');
const selectedOption = document.getElementById('selectedOption');

dropdown.addEventListener('change', function() {
    selectedOption.textContent = dropdown.value || 'ninguna';
});

// 9- Implementa un formulario con validación para correos electrónicos.
const formSubmit = document.getElementById('myForm');
const email = document.getElementById('email');
  document.getElementById('formSubmit').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado correctamente');
      });

// 10- Haz un evento que cambie el texto de un botón al hacer clic en él.
  const cambiaTexto = document.getElementById('cambiaTexto');
      cambiaTexto.addEventListener('click', function() {
        cambiaTexto.textContent = '¡Clickeado!';
      });
