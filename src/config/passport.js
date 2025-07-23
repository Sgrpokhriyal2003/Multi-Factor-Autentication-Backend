import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";


passport.use(new LocalStrategy(
    async(username, password, done) => {
        try{
            const user = await User.findOne({username})
            if(!user){
                return done(null, false, {message: "user not found!"})
            }

            const isMatchedPassword = await bcrypt.compare(password, user.password)
            if(isMatchedPassword){
                return done(null, user);
            }
            else{
                return done(null, false, {message: "incorrect username or password"})
            }

        }
        catch(error){
            console.log('error in passport.js file', error.message)
        }
    }
))

passport.serializeUser((user, done) => {
    console.log("we are inside serialize user")
    done(null, user._id)
})

passport.deserializeUser(async(_id, done) => {
    try{
        console.log("we are inside deserialize user")
        const user = await User.findById(_id)
        done(null, user)
    }
    catch(error){
        done(error)
    }
})