const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes"); 
const path = require('path');
const _dirname=path.resolve();
require("dotenv").config();


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);  

app.use(express.static(path.join(_dirname,"/grilliz/dist")))
app.get(('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"grilliz","dist","index.html"))
}))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

