import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        interest: {
            type: String,
            required: true,
            maxlength: [160, "caracteres máximo admitido"],
            validate: {
                validator: (value) => {
                    return validator.isLength(value, { max: 60 })
                }
            },
        },
        carrera: {
            type: String,
            required: true
        },
        sexo: {
            type: String,
            required: true
        },
        socialNetworks: [{
            type: String,
            links: String
        }],
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

userSchema.index({ username: "text" })
const User = new mongoose.model("User", userSchema)

export default User