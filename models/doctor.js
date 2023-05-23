import { Schema, model } from "mongoose";

const doctor = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    subject: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "subject"
    },
    role: {
    type: String,
    required: true,
    },
});


const doctormodel = model('doctor', doctor);
export default doctormodel;
