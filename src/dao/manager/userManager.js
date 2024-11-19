import userModel from "../models/user.js";

export default class UsersManager {
    createUser = (params) => {
        return userModel.create(params)
    }

    getUser = (params) => {
        return userModel.findOne(params)
    }

    getUsers = (params) => {
        return userModel.find(params).lean()
    }
}