const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware (code that runs between request & response)
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());   // body parser
// Middleware

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, ()=>{
  console.log("BE running on port 5000");
});