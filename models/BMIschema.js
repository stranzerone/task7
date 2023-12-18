
import mongoose from "mongoose";

const bmiRecordSchema = new mongoose.Schema({
    weight:{
      type:Number,
      require:true


    },
    height: {
      type:Number,
      require:true
    },

    result: {
      type:String,
      require:true
    },
    name:{
      type:String,
      require:true
    }
  });
  
  export const BmiRecord = mongoose.model('BmiRecord', bmiRecordSchema);
  