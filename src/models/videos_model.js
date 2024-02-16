import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    id: {
        type: String,
        required: true,
        unique: true,
    },
    videoFile: {
        type: String,
        required:true,
    },
    thumbnail: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "",
    },
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default:0,
    },
    isPublished: {
        type: Boolean,
        default: false
    },


}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

export const Vedio = mongoose.model("Vedio", videoSchema);