import deptmodel from "../models/department.js";
import subjectmodel from "../models/subject.js";
import  jwt  from "jsonwebtoken";
export const index = async(req, res) => {
    
    const subjects = await subjectmodel.find({doctor: req.user._id},{name: 1}).lean();
    
    res.render('subjects/index',{ subjects });
};

export const create = async(req,res) => {
    const departments = await deptmodel.find().lean();
    res.render('subjects/create',{departments});
   

}

export const store = async(req,res) => {
    const {name,id,department,pre_requisite} = req.body;
    await subjectmodel.create({
        name,
        id,
        department,
        pre_requisite,
        doctor: req.user._id,
    });
    res.redirect('/subject')
};