import {fill} from "lodash";
import {FlaggedMap, MineMap, OpenedMap, Point, sizeOf} from "../interfaces";
import {pointIterator, pointIteratorAround} from "./point";

export const getEmptyMap = () => {
  const r = [];
  for (let i = 0; i < sizeOf.x; i++) {
    const n = [];
    fill(n, false);
    r.push(n);
  }
  return r;
};

type AllMaps = OpenedMap | MineMap | FlaggedMap;

export const mapIterator = (map: AllMaps, cb: (v: boolean) => void) => {
  pointIterator((p) => {
    cb(map[p.x][p.y]);
  });
};

export const mapIteratorAround = (map: AllMaps, point: Point, cb: (v: boolean) => void) => {
  pointIteratorAround(point, (p) => {
    cb(map[p.x][p.y]);
  });
};
