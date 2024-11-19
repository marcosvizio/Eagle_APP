const form = document.getElementById('registerForm');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => (obj[key] = value))
    const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const responseData = await response.json()
    if (responseData.status === 'success') {
        window.location.replace('/')
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'El email ingresado ya existe en otro participante. En el caso de que quieras modificar tus datos. Comunicate con nosotros en nuestras redes.'
        });
    };
});