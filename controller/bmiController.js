
import { BmiRecord } from "../models/BMIschema.js";
    
    export const Calculate = async(req,res)=>{
    
    
    try {
      const { weight, height,name } = req.body;
  
      // Validate input
      if (!weight || !height || weight <= 0 || height <= 0) {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      // Calculate BMI
      const bmi = (weight / (height * height)).toFixed(2);
  
      // Determine result
      let result;
      if (bmi < 18.5) {
        result = 'Underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Normal weight';
      } else {
        result = 'Overweight';
      }
  
      // Save to MongoDB
      const newRecord = new BmiRecord({
        weight,
        height,
        name,
        result,
      });
  
      await newRecord.save();
  
      res.json({ bmi, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }

}


export const all = async(req,res)=>{
  
  try{

    const response =await BmiRecord.find({})

    if(response){
      res.status(200).json(response);

    }else{
      res.status(404)
    }
  }catch(error){
    res.send(error);
  }
  


}