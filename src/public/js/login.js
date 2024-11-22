const form = document.getElementById('loginForm')


form.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(form)
    const obj = {};
    data.forEach((value, key) => (obj[key] = value))
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type":"application/json"
        }
    })
    
    const responseData = await response.json()

    if (responseData.status==='success') {
        const token = responseData.token; // Asegúrate de que el servidor devuelve un token
        localStorage.setItem('authToken', token);
        window.location.replace('/')
    }
})
