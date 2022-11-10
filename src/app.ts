import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import gamesRoute from "./routes/games.router.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(gamesRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})