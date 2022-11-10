import { QueryResult } from "pg";
import db from "../database/database.js";
import { GameEntity, Game, NewGame } from "../protocols/game.js";

export async function getAllGames(): Promise<QueryResult<GameEntity>> {
  return db.query(`SELECT * FROM games;`);
}

export async function getGamesOnSale(): Promise<QueryResult<GameEntity>> {
  return db.query(`SELECT * FROM games WHERE "isOnSale" = TRUE;`);
}

export async function getSaleTotalValue(): Promise<QueryResult<GameEntity>> {
  return db.query(`SELECT SUM("salePrice")::int as total FROM games WHERE "isOnSale" = TRUE;`);
}


export async function insertGame(game: NewGame): Promise<QueryResult<GameEntity>> {
  return db.query(
    `INSERT INTO games (title, price, "isOnSale", "salePrice", "saleUntil") VALUES ($1, $2, $3, $4, $5);`,
    [game.title, game.price, game.isOnSale, game.salePrice, game.saleUntil]
  );
}
