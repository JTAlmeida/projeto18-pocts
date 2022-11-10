var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as gamesRepositories from "../repositories/games.repository.js";
export function getGames(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var games, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, gamesRepositories.getAllGames()];
                case 1:
                    games = _a.sent();
                    res.send(games.rows);
                    return [2 /*return*/];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).send({ error: error_1.message });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function getGamesOnSale(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var games, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, gamesRepositories.getGamesOnSale()];
                case 1:
                    games = _a.sent();
                    res.send(games.rows);
                    return [2 /*return*/];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).send({ error: error_2.message });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function getSaleTotalValue(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var games, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, gamesRepositories.getSaleTotalValue()];
                case 1:
                    games = _a.sent();
                    res.send(games.rows[0]);
                    return [2 /*return*/];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).send({ error: error_3.message });
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function insertGame(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newGame, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newGame = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, gamesRepositories.insertGame(newGame)];
                case 2:
                    _a.sent();
                    res.status(201).send("Game inserted");
                    return [2 /*return*/];
                case 3:
                    error_4 = _a.sent();
                    res.status(500).send({ error: error_4.message });
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function updateGame(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var gameInfo, id, updatedGame, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameInfo = req.body;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, gamesRepositories.updateGame(gameInfo, id)];
                case 2:
                    updatedGame = _a.sent();
                    if (updatedGame.rowCount === 0) {
                        res.status(404).send({ error: "Game not found!" });
                        return [2 /*return*/];
                    }
                    res.status(200).send({ message: "Game updated." });
                    return [2 /*return*/];
                case 3:
                    error_5 = _a.sent();
                    res.status(500).send({ error: error_5.message });
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function deleteGame(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, deletedGame, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, gamesRepositories.deleteGame(id)];
                case 2:
                    deletedGame = _a.sent();
                    if (deletedGame.rowCount === 0) {
                        res.status(404).send({ error: "Game not found!" });
                        return [2 /*return*/];
                    }
                    res.status(200).send({ message: "Game deleted." });
                    return [2 /*return*/];
                case 3:
                    error_6 = _a.sent();
                    res.status(500).send({ error: error_6.message });
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
