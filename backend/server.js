const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productroutes");
const userRoutes = require("./routes/userroutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://kvictor5595:kevin3621@cluster0.qpbdcgz.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0s",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", productRoutes);
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
