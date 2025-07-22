import User from '../models/user.model.js'

export const register = async(req, res) => {
    try{

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
