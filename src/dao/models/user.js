import mongoose from "mongoose";

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    birthdate: String,
    email: String,
    role: {
        type: String,
        default: "usuario"
    }
}, {timestamps: {createdAt: 'created_at', updated_at: 'updated_at'}});

const participantModel = mongoose.model(collection, schema);

export default participantModel;