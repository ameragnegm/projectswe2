import { Schema , model } from "mongoose";

const subject=new Schema({
    name: {
        type: String,
        required: false,
    },
    
    id: {
    type: String,
    required: false,
},
    department: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'department'
},

    pre_requisite: {
    type: String,
    required: false,
},  
    doctor: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'doctor'
},

});


const subjectmodel = model('subject', subject);
export default subjectmodel;
