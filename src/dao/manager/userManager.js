import userModel from "../models/user.js";

export default class UsersManager {
    createUser = (params) => {
        return userModel.create(params)
    }

    getUser = (params) => {
        return userModel.findOne(params)
    }

    getUserAndModify = (userId, updates, options) => {
        try {
          // Asegúrate de que `updates` tenga los datos correctos
          if (!updates || typeof updates !== 'object') {
            throw new Error('No se proporcionaron datos para actualizar');
          }
    
          // Actualizar el usuario en la base de datos
          const updatedUser = userModel.findByIdAndUpdate(userId, updates, options);
    
          return updatedUser;
        } catch (error) {
          console.error('Error al actualizar el usuario:', error);
          throw error; // Relanzar el error para manejarlo en el controlador
        }
    }


    deleteUser = async (userId) => {
        try {
          // Esperar a que se complete la eliminación del usuario          
          const userDeleted = await userModel.findByIdAndDelete(userId); // Usa tu modelo de base de datos para eliminar
          
          return userDeleted;
        } catch (error) {
          console.error(error);
          throw new Error('Error al eliminar el usuario');
        }
    };

    getUsers = (params) => {
        return userModel.find(params).lean()
    }
}