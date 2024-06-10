import express from "express";
import mongoose from "mongoose";
  import str from "./route/produit.js";
import Produit from "./models/produit.js";
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors());

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  };
 
  app.use(cors(corsOptions));

const PORT = 5000;


app.use('/produits', str);
  
const dburi = "mongodb://mongo_db:27017/info"
// ctreat db if not exist
mongoose.set('strictQuery',true)
mongoose.connect(dburi).then(()=>{
    // console.log("db conneted") 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log(err)
})


