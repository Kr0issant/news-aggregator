import express from "express";
import cors from "cors";
import "dotenv/config";

const apiKey = process.env.apiKey;

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    res.send({"apiKey": apiKey});
});

app.listen(3000, () => {
    console.log("Server listening on port 3000...");
});