import jwt from 'jsonwebtoken';

// Middleware para verificar el token JWT y el rol del usuario
export const authMiddleware = (req, res, next) => {
  // Obtener el token de los encabezados
  const token = req.headers['authorization']?.split(' ')[1]; // El token se pasa como 'Bearer <token>'

  if (!token) {
    return res.status(401).send('No se proporcionó token de autenticación');
  }

  // Verificar el token
  jwt.verify(token, 'tu_secreto', (err, decoded) => {
    if (err) {
      return res.status(403).send('Token inválido o expirado');
    }

    // Guardar la información del usuario decodificada en el objeto `req.user`
    req.user = decoded;

    // Verificar si el usuario tiene el rol adecuado (en este caso, 'admin')
    if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
      return res.status(403).send('No tienes permisos para realizar esta acción');
    }

    // Continuar con la ejecución del siguiente middleware o ruta
    next();
  });
};