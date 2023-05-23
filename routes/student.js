import { Router } from "express";

import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import studentmodel from "../models/student.js";
const router = new Router();

router.get('/', (req , res)=>{
res.render('students/studentpage');
});
router.get('/createstudentaccount', async(req, res) => {

    const students = await studentmodel.find().lean();


    await studentmodel.create({
        username: 'Bassant',
        password: 'cs',
        id: '200205',

    });
    await studentmodel.create({
        username: 'Amera',
        password: 'cs',
        id: '200203',

    });
    await studentmodel.create({
        username: 'Sahd',
        password: 'cs',
        id: '200208',

    });    
    
    res.render('students/studentpage',{ students });
});


export default router;