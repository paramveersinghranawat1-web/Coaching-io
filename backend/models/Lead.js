import mongoose from  "mongoose";

const leadSchema = new mongoose.Schema(
  {
     name: { type: String, required: true },
       phone : {type: String , required: true},
      email : {type: String , required: true},
      className : {type: String , required: true},
      board : {type: String , required: true},
      mode : {type: String , required: true},
      city : {type: String },
      message : {type: String },
      source : {type: String },



  },{timestamps:true}

)

export const Lead = mongoose.model("Lead",leadSchma);


export default mongoose.model("Lead", leadSchema);


