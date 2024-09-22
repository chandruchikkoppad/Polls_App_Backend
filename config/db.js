const mongoose=require('mongoose')


const configureDB=async()=>{ 
    try {
        const db=await mongoose.connect(
          `mongodb+srv://chandruchikkoppa:admin@cluster0.95m530r.mongodb.net/pollUser?retryWrites=true&w=majority`
        );
        console.log("Server connected to MongoDB","=>",db.connection.host,"=>",db.connection.name);
    } catch (error) {
        console.log(error);
    }
}
module.exports=configureDB;