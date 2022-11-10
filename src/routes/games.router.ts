import { Router } from "express";
import { getGames, getGamesOnSale, insertGame, updateGame, deleteGame, getSaleTotalValue } from "../controllers/games.controller.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { gamesSchema } from "../schemas/games.schema.js";
const router = Router();

router.get("/games", getGames);
router.get("/games-sale", getGamesOnSale);
router.get("/sale-total-value", getSaleTotalValue)
router.post("/games", validateSchema(gamesSchema), insertGame);
router.put("/games/:id", validateSchema(gamesSchema), updateGame);
router.delete("/games/:id", deleteGame);

export default router;