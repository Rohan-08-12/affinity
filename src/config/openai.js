// OpenAI configuration (currently unused - using Groq instead)
// const OpenAI = require('openai');
// 
// if (!process.env.OPENAI_API_KEY) {
//   console.error('OPENAI_API_KEY not found in environment variables');
//   throw new Error('OPENAI_API_KEY is required');
// }
// 
// if (!process.env.OPENAI_API_KEY.startsWith('sk-')) {
//   console.error('OPENAI_API_KEY should start with "sk-"');
//   throw new Error('Invalid OPENAI_API_KEY format');
// }
// 
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// 
// module.exports = openai;