import mongoose from "mongoose";
import validator from "validator";

const PostModel = new mongoose.Schema(
    {
        titlePost: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            maxlength: [100, "máximo"],
            validate: {
                validator:(value) => {
                    return validator.isLength(value, { max: 100 })
                }
            }
        }       
    },
    { timestamps: true }
)

PostModel.index({ titlePost: "text" });
const posts = new mongoose.model("Post", PostModel);

export default posts;