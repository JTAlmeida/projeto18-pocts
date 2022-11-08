import { Router } from "express";
import { getGames, createGame, updateGame, deleteGame } from "../controllers/games.controller.js";
const router = Router();

router.get("/get-games", getGames);
router.post("/create-game", createGame);
router.put("/update-game", updateGame);
router.delete("/delete-game", deleteGame);

export default router;