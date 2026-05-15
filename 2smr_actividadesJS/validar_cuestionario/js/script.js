let form = document.getElementById('mi-formulario');
 
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático
 
  let usuario = document.getElementById('usuario').value.trim();
  let email   = document.getElementById('email').value.trim();
  let pass    = document.getElementById('pass').value;
  let errorDiv = document.getElementById('error');
 
  // Validaciones
  if (usuario === '') {
    errorDiv.textContent = 'El nombre de usuario no puede estar vacío.';
    return; // Paramos aquí
  }
 
  if (!email.includes('@')) {
    errorDiv.textContent = 'El email no tiene formato válido.';
    return;
  }
 
  if (pass.length < 6) {
    errorDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    return;
  }
 
  // Si todo está bien:
  errorDiv.textContent = '';
  alert('¡Registro completado con éxito, ' + usuario + '!');
});
 