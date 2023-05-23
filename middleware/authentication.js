import jwt from 'jsonwebtoken';
 export const authentication =(req,res,next)=>{
    const {token}= req.cookies;
    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next();
    }catch(error){
        return res.redirect('/login');
    }
}
 export const authpage =(permissions)=>{
    return( req,res,next)=>{
        const userrole =req.body.role;
        if(permissions.includes(userrole)){
            next();
        }else {
            return res.status(401).json(" You don't have the permission!");
        }
    }
 };