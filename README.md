Uses Cases : 

1) Diseño minimalista:
Carga rápida : las páginas minimalistas suelen tener menos elementos gráficos, lo que permite tiempos de carga más rápidos.
Usabilidad mejorada: una interfaz sencilla facilita la navegación y mejora la experiencia de usuario.
Foco al contenido: al eliminar distracciones, se permite que el contenido principal reciba la atención adecuada.


2) Registro de Usuario
Resumen: El usuario se registra en el sistema proporcionando información básica para crear una cuenta.
Actor principal: Usuario
Precondiciones: El usuario debe tener acceso a Internet y acceder al formulario de registro.
Flujo principal:
El usuario accede a la página de registro.
El usuario ingresa su nombre, email y contraseña.
El sistema valida la información y crea una cuenta.
El sistema envía un email de confirmación.
Resultado esperado: La cuenta se crea exitosamente, y el usuario recibe un email de confirmación.
Escenario alternativo: Si el email ya está registrado, se muestra un mensaje de error.



3) Inicio de Sesión de Usuario
Resumen: Permite que el usuario acceda a su cuenta con sus credenciales.
Actor principal: Usuario
Precondiciones: El usuario debe estar registrado en el sistema.
Flujo principal:
El usuario accede a la página de inicio de sesión.
El usuario ingresa su email y contraseña.
El sistema valida las credenciales.
Si las credenciales son correctas, el usuario accede a su perfil.
Resultado esperado: El usuario inicia sesión exitosamente.
Escenario alternativo: Si las credenciales son incorrectas, el sistema muestra un mensaje de error.

4) Visualización de Productos o Servicios
Resumen: Permite al usuario navegar y visualizar los productos o servicios ofrecidos en la web.
Actor principal: Usuario
Precondiciones: El usuario debe estar en la página de productos o servicios.
Flujo principal:
El usuario selecciona una categoría de productos o servicios.
El sistema muestra una lista de productos con información básica (nombre, imagen, precio).
El usuario puede hacer clic en un producto para ver más detalles.
Postcondiciones: El usuario visualiza los productos o servicios con sus detalles.
Escenario alternativo: Si no hay productos en la categoría seleccionada, se muestra un mensaje de “No hay productos disponibles”.

Realizar una Compra o Solicitud de Servicio
Resumen: Permite al usuario adquirir un producto o solicitar un servicio.
Actor principal: Usuario
Precondiciones: El usuario debe haber iniciado sesión y tener al menos un producto en su carrito.
Flujo principal:
El usuario agrega productos al carrito.
El usuario accede a la página de “Revisar Pedido”.
El usuario ingresa los datos de pago y dirección de envío.
El sistema procesa el pago.
El sistema genera una confirmación de pedido y envía un email de confirmación.
Postcondiciones: La compra se realiza exitosamente y se genera una confirmación de pedido.
Escenario alternativo: Si el pago falla, el sistema muestra un mensaje de error y permite al usuario intentar nuevamente.

5) Búsqueda de Productos o Servicios
Resumen: Permite al usuario buscar productos o servicios mediante palabras clave.
Actor principal: Usuario
Precondiciones: El usuario debe estar en cualquier página con acceso a la barra de búsqueda.
Flujo principal:
El usuario ingresa una palabra clave en la barra de búsqueda.
El sistema busca productos o servicios que coincidan con la palabra clave.
El sistema muestra los resultados de búsqueda.
Postcondiciones: El usuario visualiza una lista de productos o servicios relacionados con su búsqueda.
Escenario alternativo: Si no hay resultados, se muestra un mensaje de “No se encontraron productos o servicios”.

6) Administrar Perfil de Usuario
Resumen: Permite al usuario ver y editar su información de perfil.
Actor principal: Usuario
Precondiciones: El usuario debe haber iniciado sesión.
Flujo principal:
El usuario accede a su perfil.
El usuario puede ver su información (nombre, email, dirección, etc.).
El usuario selecciona “Editar” y realiza cambios en su información.
El sistema guarda los cambios.
Postcondiciones: Los datos del perfil del usuario se actualizan correctamente.
Escenario alternativo: Si los datos no son válidos, el sistema muestra un mensaje de error.

7) Contacto y Soporte
Resumen: Permite al usuario enviar un mensaje al equipo de soporte o contactar al servicio al cliente.
Actor principal: Usuario
Precondiciones: El usuario debe tener acceso a la página de contacto o soporte.
Flujo principal:
El usuario accede al formulario de contacto o soporte.
El usuario ingresa su nombre, email y mensaje.
El sistema envía el mensaje al equipo de soporte.
El sistema muestra una confirmación de que el mensaje fue enviado.
Postcondiciones: El usuario recibe una confirmación y el mensaje llega al equipo de soporte.
Escenario alternativo: Si el mensaje no se puede enviar, se muestra un mensaje de error.
