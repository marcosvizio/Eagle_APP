document.querySelectorAll('.editBtn').forEach(button => {
  button.addEventListener('click', function () {
    const userId = this.getAttribute('data-id');

    // Obtener los datos del usuario
    fetch(`/api/users/modify-user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }
        return response.json();
      })
      .then(user => {
        // Rellenar el formulario con los datos del usuario
        document.getElementById('userId').value = user._id;
        document.getElementById('first_name').value = user.first_name;
        document.getElementById('last_name').value = user.last_name;
        document.getElementById('birthdate').value = user.birthdate;
        document.getElementById('email').value = user.email;

        // Mostrar el formulario
        document.getElementById('editUserForm').style.display = 'flex';
      })
      .catch(error => console.error('Error:', error));
  });
});

function closeForm() {
  const formContainer = document.getElementById('editUserForm');
  formContainer.style.display = 'none';
}