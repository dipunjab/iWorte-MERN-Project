import 'dotenv/config'
import connectDB from './dataBase.js';

console.log("Welcome to backend");



connectDB().catch(err => console.log(err))

