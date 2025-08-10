import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected', ()=> console.log //once db is connected, this will show up in terminal.
        ("Database Connected")
    )
        await mongoose.connect(`${process.env.MONGODB_URI}/ 
            quickblog`)                                       // connects to databse. Appends quickblog to the connection string, 
                                                             // this becomes my database name. (Quickblog database)
    }catch (error){
    console.log(error.message);
    }
}

export default connectDB;

/* 
How to connect to database??
stored my database connection string in .env file. 
In db.js, written a function to connect to database using mongoose.

*/
