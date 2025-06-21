import express from 'express';
import dotenv from "dotenv";
import { intDB } from './config/db.js';
import transactionsRoute from "./routes/transactionsRoute.js"

dotenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 5001;




app.use("/api/transactions",transactionsRoute);

intDB().then(()=>{

    app.listen(PORT , ()=> {

console.log(`server is up and running on port ${PORT}`);

});
})