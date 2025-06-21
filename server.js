import express from 'express';
import dotenv from "dotenv";
import { intDB } from './config/db.js';
import transactionsRoute from "./routes/transactionsRoute.js"
import job from './config/cron.js';


dotenv.config();

const app = express();

 if(process.env.NODE_ENV==="production")  job.start();

app.use(express.json());

const PORT = process.env.PORT || 5001;
app.get("/api/health" , (req , res)=>{
    res.status(200).json({status:"ok"});
})

app.use("/api/transactions", transactionsRoute);

intDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is up and running on port ${PORT}`);
    });
}); 