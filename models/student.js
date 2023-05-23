import { Schema , model} from "mongoose";

const student=new Schema({
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
    role: {
    type: String,
    required: true,
    },
});


const studentmodel = model('student', student);
export default studentmodel;