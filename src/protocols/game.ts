export type GameEntity = {
    id: number,
    title: string,
    price: number,
    isOnSale: boolean,
    saleUntil: Date
};

export type Game = Omit<GameEntity, "id">;

export type NewGame = Partial<GameEntity>;