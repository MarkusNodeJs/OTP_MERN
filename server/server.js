import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";

// dotenv config
dotenv.config();
const port = process.env.PORT;

// REST OBJ
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// REST API
app.get("/", (req, res) => {
  res.send("Server is now running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
