document.addEventListener('DOMContentLoaded', () => {
    // Escuchar clics en los botones "Eliminar"
    document.querySelectorAll('.deleteBtn').forEach(button => {
      button.addEventListener('click', async (event) => {
        const userId = event.target.getAttribute('data-id');
        const token = localStorage.getItem('authToken'); // Token de autorización
        
        
  
        if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
          try {
            const response = await fetch(`/api/users/delete-user/${userId}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            });
  
            if (!response.ok) {
              throw new Error('Error al eliminar el usuario - btn');
            }
  
            const result = await response.json();
            console.log('Usuario eliminado:', result);
  
            // Actualizar la vista eliminando la fila correspondiente
            event.target.closest('tr').remove();
          } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al intentar eliminar el usuario.');
          }
        }
      });
    });
  });