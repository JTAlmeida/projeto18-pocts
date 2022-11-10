export type GameEntity = {
    id: number,
    title: string,
    price: number,
    isOnSale: boolean,
    salePrice: number,
    saleUntil: Date
};

export type Game = Partial<GameEntity>;