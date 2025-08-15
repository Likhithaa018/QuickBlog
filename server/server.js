import express from 'express'
import dotenv from "dotenv";
// import'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

dotenv.config();


const app = express(); // creats an instance of express app

await connectDB()

//MiddleWares
// app.use(cors()) //Enables CORS for all incoming requests.
app.use(cors());

app.use(express.json()) //Tells Express to automatically parse incoming JSON in the request body.

//Routes
app.get('/', (req, res)=> res.send("API is working")) //When visited the home page or actual port, it says that msg.
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT =process.env.PORT || 3000; //First reads the port number from .env file , if not defined , then defaults to 3000

app.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT) //starts the server and listens to incoming requests.
})

export default app;