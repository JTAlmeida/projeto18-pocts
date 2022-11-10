import * as gamesRepositories from "../repositories/games.repository.js";
import { Request, Response } from "express";
import { Game, GameEntity, NewGame } from "../protocols/game.js";

export async function getGames(req: Request, res: Response) {
  try {
    const games = await gamesRepositories.getAllGames();

    res.send(games.rows);
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function getGamesOnSale(req: Request, res: Response) {
  try {
    const games = await gamesRepositories.getGamesOnSale();

    res.send(games.rows);
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function insertGame(req: Request, res: Response) {
  const newGame = req.body as NewGame;

  try {
    await gamesRepositories.insertGame(newGame);

    res.status(201).send(`Game inserted`);
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function updateGame(req: Request, res: Response) {
  try {
    res.send("OK");
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function deleteGame(req: Request, res: Response) {
  try {
    res.send("OK");
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}
