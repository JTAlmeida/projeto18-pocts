import { Router } from "express";
import { getGames, getGamesOnSale, insertGame, updateGame, deleteGame } from "../controllers/games.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { gamesSchema } from "../schemas/games.schema.js";
const router = Router();

router.get("/games", getGames);
router.get("/games-sale", getGamesOnSale);
router.post("/insert-game", validateSchema(gamesSchema), insertGame);
router.put("/update-game", validateSchema(gamesSchema), updateGame);
router.delete("/delete-game", deleteGame);

export default router;