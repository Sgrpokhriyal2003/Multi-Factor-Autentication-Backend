import express from 'express'
const router = express.Router

router.post("/register", register)
router.post("/login", login)
router.get("/status", authStatus)
router.post("/logout", logout)


//2fa setup
router.post("/2fa/setup", setup2FA)
router.post("/2fa/verify", verify2FA)
router.post("/2fa/reset", reset2FA)

export default router