
import mongoose from "mongoose";

const Connection = async(URL) =>{
    
    try{
     mongoose.set('strictQuery', true);
     await mongoose.connect(URL,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    })
     console.log(`connection established`)
    }catch(error){
        console.log(`there is an error`,error)
    }
}

export default Connection;































