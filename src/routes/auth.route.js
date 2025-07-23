import express from 'express'
import passport from 'passport'

const router = express.Router()

import {
    register,
    login,
    authStatus,
    logout,
    setup2FA,
    verify2FA,
    reset2FA
} from '../controller/auth.controller.js'

router.post("/register", register)
router.post("/login",  passport.authenticate("local"), login)
router.get("/status", authStatus)
router.post("/logout", logout)


//2fa setup
router.post("/2fa/setup", (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.status(401).json({
        message: "unauthorized"
    })

}, setup2FA)

router.post("/2fa/verify", (req, res, next) => {
    if(req.isAuthenticated()) return next()
    res.status(401).json({
        message: "unauthorized"
    })
} , verify2FA)

router.post("/2fa/reset", (req, res, next) =>{
    if(req.isAuthenticated()) return next()
    res.status(401).json({
        message: "unauthorized"
    })
} , reset2FA)

export default router