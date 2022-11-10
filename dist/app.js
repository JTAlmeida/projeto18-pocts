import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import gamesRoute from "./routes/games.router.js";
dotenv.config();
var app = express();
app.use(express.json());
app.use(cors());
app.use(gamesRoute);
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
