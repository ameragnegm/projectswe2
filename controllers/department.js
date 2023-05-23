import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import  jwt  from "jsonwebtoken";

export const index = async(req, res) => {
    console.log(req.user);
    
    const department = await deptmodel.find({},{name: 1}).lean();
    
    res.render('departments/index',{ department });
};
 export const create = async (req,res) => {
    //const department =await deptmodel.find().lean();
    res.render('departments/create');
  //  console.log(department);
};
export const store =async (req,res) =>{
    const {name, code } = req.body;
    
    await deptmodel.create({
        name,
        code,
    });
    res.redirect('/department')}
