const mongoose=require("mongoose");

const connectDB=async()=>{
  try {
    const connection=await mongoose.connect(process.env.DATABASE)
    console.log("Mongodb connected!");
  } catch (error) {
     console.log(error);
     process.exit(1);
  }
}




module.exports=connectDB
