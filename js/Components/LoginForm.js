const loginFormContainer = document.getElementById("loginFormContainer");

loginFormContainer.innerHTML = `
  <form id="loginForm" class="mt-4 p-4 bg-light rounded shadow-sm">
    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico:</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña:</label>
      <input type="password" class="form-control" id="password" name="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
  </form>
`;
