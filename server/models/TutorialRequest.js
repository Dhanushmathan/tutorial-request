import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutRequest = new Schema({
    technology: {
        type: String,
        requried: true,
        minLength: 2,
        maxLength: 10,
    },
    title: {
        type: String,
        requried: true,
        minLength: 10,
        maxLength: 100,
    },
    desc: {
        type: String,
        requried: true,
        minLength: 50,
        maxLength: 2000,
    },
    creater_at: {
        type: Date,
        required: true,
    },
});

const tutRequestModel = mongoose.model("tutorial-request", tutRequest);

export default tutRequestModel;