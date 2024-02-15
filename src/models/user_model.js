import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    id: {
        type: String,
        required: true,
        unique: true,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Vedio",
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    fullname: {
        type: String,
        required: true,
        lowercase: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    refreshToken: {
        type: String,
    },


}, { timestamps: true });

export const User = mongoose.model("User", userSchema);