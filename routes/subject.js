import { Router } from "express";


import { create, index,store } from "../controllers/subject.js";
const router = new Router();



router.get('/', index);
router.get('/create', create);

router.post('/',store);
export default router;