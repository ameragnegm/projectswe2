import doctormodel from "../models/doctor.js";
import subjectmodel from "../models/subject.js";

export const index = async (req, res) => {

    const doctor = await doctormodel.find({}, { username: 1 }).lean();

    res.render('doctor/index', { doctor });
};
export const create = async (req, res) => {
    const subject = await subjectmodel.find().lean();
    res.render('doctor/create', { subject });


};
export const store = async (req, res) => {
    const {  username, password, id , subject } = req.body;

    await doctormodel.create({
        username,
        password,
        id,
        subject,

    });

    res.redirect('/doctor');
    console.log(username);

};