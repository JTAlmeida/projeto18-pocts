# projeto18-pocts

## About

Pocts is a proof of concept for typescript. It's a game wishlist where you can add, update, remove and read data about wished games, including: price, games on sale, sale price and until when the game is on sale. The following routes and functionalities can be found in this project:

```bash
1. GET: /games
- Gets all wished games.

2. GET: /games-sale
- Gets all wished games that are on sale.

3. GET: /sale-total-value
- Gets the sum of salePrice for all games on sale.

4. POST: /games
- Insert a new game to your wishlist (there can't be games with the same title).
Example:

Body: {
   "title": "God of War Ragnarok",
   "price": 29999,
   "isOnSale": true,
   "salePrice": 24999,
   "saleUntil": "2022-11-25"
   }

* "salePrice" and "saleUntil" should only be sent if "isOnSale" is true, otherwise they're forbidden. *

5. PUT: /games/:id
- Updates the game that matches the inserted id.
Example:

Body: {
   "title": "God of War Ragnarok",
   "price": 29999,
   "isOnSale": true,
   "salePrice": 24999,
   "saleUntil": "2022-11-25"
   }

*"salePrice" and "saleUntil" should only be sent if "isOnSale" is true, otherwise they're forbidden.

6. DELETE: /games/:id
- Deletes the game that matches inserted id.

```

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want (there's a 'dump.sql' file that you can use to create tables).
4. Create and configure the `.env` file using the `.env.example` as example.
