const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const env = require('dotenv');
const app = express();

//routes
// const adminRoutes = require('./routes/admin/auth');
// const authRoutes = require('./routes/auth');
// const categoryRoutes= require("./routes/category");
// const productRoutes= require("./routes/product");
// const initialDataRoutes = require('./routes/admin/initialData');
// const cartRoutes = require('./routes/cart');
// const  addressRouters = require("./routes/address")
// const  orderRouters = require("./routes/order")
// const  adminOrderRouters = require("./routes/admin/order")

//environment variable or you can say  constants
env.config();


//mongoose connect
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kmenthp.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log("data connected")
})

app.use(cors());
app.use("/public", express.static(path.join(__dirname, 'uploads')));
app.use(express.json());

// app.use("/api",authRoutes);
// app.use("/api",adminRoutes);
// app.use("/api",categoryRoutes);
// app.use("/api",productRoutes);
// app.use("/api",initialDataRoutes);
// app.use("/api",cartRoutes);
// app.use("/api",addressRouters);
// app.use("/api",orderRouters);
// app.use("/api",adminOrderRouters);



app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})