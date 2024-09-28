import jwt from "jsonwebtoken"

const verifyUser = (req, res, next)=>{

    const token = req.header("authToken")
    if(!token) return res.status(400).json({message: "Authenticate using valid Token"})

   try {
     const data = jwt.verify(token, process.env,JWT_SECERET)
     req.user = data.user 
     
     next() 
   } catch (error) {
    console.log(error.message);
   }  

}

export default verifyUser