// map of minesweeper. true=has mine.
export type MineMap = Array<Array<boolean>>;
// map of disclosed node. true=disclosed.
export type OpenedMap = Array<Array<boolean>>;
// map of flagged node. true=flagged.
export type FlaggedMap = Array<Array<boolean>>;

export type UnixTimeStamp = number;

export interface Point {
  x: number;
  y: number;
}

// tslint:disable-next-line:no-empty-interface
export interface Location extends Point {
}

// size of map.
export const sizeOf: Location = {x: 10, y: 10};

export const mineCount = 10;
