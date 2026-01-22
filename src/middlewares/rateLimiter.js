const rateLimit = require('express-rate-limit');

// General API rate limiter (for most endpoints)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limiter for chat endpoints (uses Groq API)
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 chat requests per 15 minutes
  message: 'Too many chat requests. Please wait a few minutes before trying again.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth rate limiter (prevent brute force)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 auth requests per 15 minutes
  message: 'Too many authentication attempts. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  generalLimiter,
  chatLimiter,
  authLimiter,
};
