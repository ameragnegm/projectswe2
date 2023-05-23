import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";

mongoose.connect(process.env.mongoconurl)
import {authentication} from './middleware/authentication.js'

import authroutes from './routes/auth.js';

import subjectrouter from './routes/subject.js';
import doctorrouter from './routes/doctor.js';
import departmentrouter from './routes/department.js';
import studentrouter from './routes/student.js'

const app = express();
app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/',authroutes);
app.use('/doctor',doctorrouter);
app.use('/subject',authentication,subjectrouter);
app.use('/department',authentication,departmentrouter);
app.use('/students',authentication,studentrouter);
app.listen(process.env.port, () => {

console.log(`start app on http://localhost:${process.env.port}`);


})