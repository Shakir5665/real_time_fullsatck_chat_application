import { generateToken } from "../lib/utils";
import User from "../models/User.js";
import bcrypt from "bycryptjs";



// signup New user
export const signup = async (req,res) =>{
    const {fullName , email , password , bio} = req.body;

    try {
        if(!fullName || !email || !password || !bio) {
            return res.json({success:'false', message:'Missing Details'})
        }

        const user = await User.findOne({email});
        
        if(user){
             return res.json({success:'false', message:'Account Already exist'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            fullName , email , password:hashedPassword , bio
        })

        const token = generateToken(newUser._id);

        res.jason({
            success:true , userData:newUser , token , message:"Account created successfully..."
        });
     
    } catch (error) {

        console.log(error.message);

        res.jason({
            success:false , message:error.message
        });
    }
}



//Controller to login user

export const login = async (eq,res) => {

    try {
        
         const {email , password} = req.body;
         const userData = await User.findOne({email});

         const isPasswordCorrect = await bcrypt.compare(password, userData.password);

         if (!isPasswordCorrect){
            return res.json({success:'false', message:'Invalid credintials'})
         }

        const token = generateToken(userData._id);

        res.jason({
            success:true , userData, token , message:"Successful Login.."
        });

    } catch (error) {
        
          console.log(error.message);

        res.jason({
            success:false , message:error.message
        });

    }

}



// Controller to check if User Authenticated

export const checkAuth = (req,res) => {
    res.jason({
        success:true , user:req.user
    });
}