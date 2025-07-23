# 🔐 Multi Factor Authentication REST API


---

## 🚀 Features

- ✅ Users can register with email, password, and optional 2FA setup.
- ✅ Password is hashed securely using bcryptjs before saving to MongoDB.
- ✅ Users can log in using email and password.
- ✅ Credentials are validated using bcryptjs.
- ✅ If the user has 1FA enabled, login proceeds to MFA step

## 2FA Setup with Speakeasy
---
  - On account settings, users can enable 2FA.
  - Speakeasy generates a unique secret key for the user.
  - A QR code or secret key is shared to be scanned in an authenticator app (like Google Authenticator).
  - The user must verify the 2FA code once to activate 2FA.
---

##  2FA Verification 
---
  - After successful password login, if 2FA is enabled:
  - API expects a time-based one-time password (TOTP).
  - Uses speakeasy to verify the provided 6-digit TOTP against the stored secret.  
  - On success, issues a signed JWT token.
  - On failure, access is denied.
---

## JWT Token Issuance
---
  - On successful login + 2FA (if applicable), a JWT is signed and returned.
  - JWT contains user ID, email, and 2FA status.
  - Token expiration (e.g., 1h) can be configured.
---
## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **passportjs** for authentication using username and password
- **speakeasy** for enabling 2 factor authentication 
- **dotenv** for environment configuration
- **qrcode** for generating qrcode to enable user to scan and get one time passcode
---

## API Endpoints
- **user** : api/auth

## User End Points 
- api/auth/register
- api/auth/login
- api/auth/status
- api/auth/logout

## 2FA Endpoints
- api/auth/2fa/setup
- api/auth/2fa/verify
- api/auth/2fa/reset

# Clone repo
`git clone https://github.com/your-username/Multi-Factor-Authentication-Backend.git`

# Install dependencies
`npm install`

# Set up your .env file
`jwt_secret`
`port`
`mongo_url`

# Run the server
`npm run dev`


