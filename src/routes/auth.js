const express = require('express');
const router = express.Router();
const { registerUser, loginUser , getMe } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const {updatePreferences} = require('../controllers/userController');
const { authLimiter } = require('../middlewares/rateLimiter');

// POST /auth/register
router.post('/register', authLimiter, registerUser );

// POST /auth/login
router.post('/login', authLimiter, loginUser );

// Protected route to get user info
// GET /auth/me
router.get('/me', authMiddleware, getMe );

// preference update route
router.put('/me/preferences', authMiddleware, updatePreferences);

module.exports = router;