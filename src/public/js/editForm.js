document.getElementById('editForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar el envío estándar del formulario
  
    const token = localStorage.getItem('authToken'); // Obtener el token
    const userId = document.getElementById('userId').value;
  
    const userData = {
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      birthdate: document.getElementById('birthdate').value,
    };
  
    try {
      const response = await fetch(`/api/users/modify-user/${userId}`, {
        method: 'PUT', // O el método que uses para actualizar
        headers: {
          'Authorization': `Bearer ${token}`, // Agregar el token
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar los datos del usuario');
      }
  
      const result = await response.json();
      console.log('Usuario actualizado:', result);
  
      // Cerrar el formulario o actualizar la vista según sea necesario
      document.getElementById('editUserForm').style.display = 'none';
      window.location.replace('/')
    } catch (error) {
      console.error('Error:', error);
    }
  });