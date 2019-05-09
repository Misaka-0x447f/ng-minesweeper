import {Point, sizeOf} from "../interfaces";
import {random} from "lodash";

export const point = (x: number, y: number): Point => {
  return {x, y};
};

export const pointRand = (): Point => {
  return point(random(0, sizeOf.x - 1), random(0, sizeOf.y - 1));
};

export const pointEqual = (p1: Point, p2: Point) => {
  return p1.x === p2.x && p1.y === p2.y;
};

export const pointIterator = (cb: (v: Point) => void) => {
  for (let i = 0; i < sizeOf.x; i++) {
    for (let j = 0; j < sizeOf.y; j++) {
      cb(point(i, j));
    }
  }
};

export const pointIteratorAround = (p: Point, cb: (v: Point) => void) => {
  // 8 point iterator
  if (p.x > 0 && p.y > 0) {
    cb(point(p.x - 1, p.y - 1));
  }
  if (p.y > 0) {
    cb(point(p.x, p.y - 1));
  }
  if (p.x < sizeOf.x - 1 && p.y > 0) {
    cb(point(p.x + 1, p.y - 1));
  }
  if (p.x < sizeOf.x - 1) {
    cb(point(p.x + 1, p.y));
  }
  if (p.x < sizeOf.x - 1 && p.y < sizeOf.y - 1) {
    cb(point(p.x + 1, p.y + 1));
  }
  if (p.y < sizeOf.y - 1) {
    cb(point(p.x, p.y + 1));
  }
  if (p.x > 0 && p.y < sizeOf.y - 1) {
    cb(point(p.x - 1, p.y + 1));
  }
  if (p.x > 0) {
    cb(point(p.x - 1, p.y));
  }
};

