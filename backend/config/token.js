import jwt from "jsonwebtoken"

const genToken=async (userId)=>{
try {
    // const token= jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"10d"})
    const token= jwt.sign({id: userId},process.env.JWT_SECRET,{expiresIn:"10d"}); //this
    return token
} catch (error) {
    // return res.status(500).json(`gen token error ${error}`)
    console.error("jwt generation error:", error.message);  //this
    return null;  //this
}
}

export default genToken