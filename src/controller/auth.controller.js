import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';

export const register = async(req, res) => {
    try{
        const {username, password} = req.body
        if(!username || !password){
            return res.status(400).json({
                error: "username and password is required!"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const existUser = await User.findOne({username})
        if(existUser){
            return res.status(400).json({
                success: false,
                message: "user already exist with this username!"
            })
        }

        const newUser = await User.create({
            username,
            password: hashedPassword,
            isMfaActive: false
        })

        await newUser.save()
        res.status(201).json({
            success: true,
            message: "New User Created! Successfully"
        })
    }
    catch(error){
        console.log("error in register controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async(req, res) => {
    try{
        console.log("user authetication successfull! here is the user: ", req.user)
        res.status(200).json({
            success: true,
            message: 'authentication done! user logged in successfully',
            name: req.user.username,
            isMfaActive: req.user.isMfaActive
        })

    }
    catch(error){
        console.log("error in login controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const logout = async(req, res) => {
    try{
        if(!req.user){
            res.status(401).json({
                success: false,
                message: "unauthorized! you are not current logged in user"
            })
        }

        req.logout((err) => {
            if(err){
                return res.status(400).json({
                    success: false,
                    message: "user is not logged in"
                })
            }
            res.status(200).json({
                success: true,
                message: "logout successfully!"
            })
        })

    }
    catch(error){
        console.log("error in logout controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const authStatus = async(req, res) => {
    try{
        if(req.user){
            res.status(200).json({
            success: true,
            message: 'authentication done! user logged in successfully',
            name: req.user.username,
            isMfaActive: req.user.isMfaActive
          })
        }
        else{
            res.status(401).json({
                success: false,
                message: "unauthorized user"
            })
        }

    }
    catch(error){
        console.log("error in authStatus controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const setup2FA = async(req, res) => {
    try{
        

    }
    catch(error){
        console.log("error in setup2FA controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const verify2FA = async(req, res) => {
    try{

    }
    catch(error){
        console.log("error in verify2FA controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const reset2FA = async(req, res) => {
    try{

    }
    catch(error){
        console.log("error in reset2FA controller!");
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
