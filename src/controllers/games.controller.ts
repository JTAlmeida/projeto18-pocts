import * as gamesRepositories from "../repositories/games.repository.js";
import { Request, Response } from "express";
import { Game, GameEntity } from "../protocols/game.js";

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

export async function getSaleTotalValue(req: Request, res: Response) {
  try {
    const games = await gamesRepositories.getSaleTotalValue();

    res.send(games.rows[0]);
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function insertGame(req: Request, res: Response) {
  const newGame = req.body as Game;

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
    const gameInfo = req.body as Game;
    const id = req.params.id;

  try {
    const updatedGame = await gamesRepositories.updateGame(gameInfo, id);

    if (updatedGame.rowCount === 0){
        res.status(404).send({error: "Game not found!"});
        return;
    }

    res.status(200).send({ message: "Game updated." });
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}

export async function deleteGame(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const deletedGame = await gamesRepositories.deleteGame(id);

    if (deletedGame.rowCount === 0){
        res.status(404).send({error: "Game not found!"});
        return;
    }

    res.status(200).send({ message: "Game deleted." });
    return;
  } catch (error) {
    res.status(500).send({ error: error.message });
    return;
  }
}
