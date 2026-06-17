import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";



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

        res.json({
            success:true , userData:newUser , token , message:"Account created successfully..."
        });
     
    } catch (error) {

        console.log(error.message);

        res.json({
            success:false , message:error.message
        });
    }
}



//Controller to login user

export const login = async (req,res) => {

    try {
        
         const {email , password} = req.body;         
         const userData = await User.findOne({email});
         const isPasswordCorrect = await bcrypt.compare(password, userData.password);

         if (!isPasswordCorrect){
            return res.json({success:false, message:'Invalid credentials'})
         }

        const token = generateToken(userData._id);

        res.json({
            success:true , userData, token , message:"Successful Login.."
        });

    } catch (error) {
        
          console.log(error.message);

        res.json({
            success:false , message:error.message
        });

    }

}



// Controller to check if User Authenticated

export const checkAuth = (req,res) => {
    res.json({
        success:true , user:req.user
    });
}




// Controller to update user profile details

export const updateProfile = async (req,res) => {

    try {
        const { profilePic, bio, fullName, currentPassword, newPassword } = req.body;
        const userId = req.user._id;

        const updateData = { bio, fullName };

        if (newPassword) {
            if (!currentPassword) {
                return res.json({ success: false, message: "Current password is required to change password." });
            }
            const user = await User.findById(userId);
            const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
            if (!isPasswordCorrect) {
                return res.json({ success: false, message: "Current password is incorrect." });
            }
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(newPassword, salt);
        }

        if (profilePic) {
            const upload = await cloudinary.uploader.upload(profilePic);
            updateData.profilePic = upload.secure_url;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select("-password");

        res.json({
            success: true,
            user: updatedUser
        });

    } catch (error) {
        console.log(error.message);

        res.json({
            success: false,
            message: error.message
        });
    }

} 