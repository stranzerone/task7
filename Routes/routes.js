import express from 'express';
import { Calculate,all } from '../controller/bmiController.js';

const route = express.Router();


route.post("/api/bmi",Calculate);
route.get("/",all);

export default route;