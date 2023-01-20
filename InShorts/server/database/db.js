
import mongoose from "mongoose";

const user='user';
const pass='54321';
const Connection= async()=>{

    const URL=`mongodb+srv://${user}:${pass}@cluster0.kfkgaye.mongodb.net/?retryWrites=true&w=majority`;


    try {

        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('database connected sucessfully');
        
    } catch (error) {
        console.log('Error while connecting database',error);
    }
}

export default Connection;