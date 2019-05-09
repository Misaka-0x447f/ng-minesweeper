import {mineCount, Point} from "../interfaces";
import {pointEqual, pointIteratorAround, pointRand} from "./point";
import {getEmptyMap, mapIterator, mapIteratorAround} from "./map";
import state from "./state";
import {getTimestamp} from "./lang";

export const initMineSweeper = (p: Point) => {
  state.flag = getEmptyMap();
  state.mine = getEmptyMap();
  state.open = getEmptyMap();

  for (let i = 0; i < mineCount;) {
    const v = pointRand();
    if (!(pointEqual(v, p) || hasMine(v))) {
      // this point is safe. set mine here.
      setMine(v);
      i++;
    }
  }

  state.timeStarted = getTimestamp();
};

export const touchNode = (t: Point) => {
  if (hasMine(t)) {
    // game end
    return false;
  }

  // algorithm touch flag
  const flags = getEmptyMap();

  // define search algo: DFS recursive
  const search = (p: Point) => {
    // node "p" has no number so we search around
    flags[p.x][p.y] = true;
    pointIteratorAround(p, (pt) => {
      flags[pt.x][pt.y] = true;
      setOpened(pt);
      if (getNumberOfNode(pt) === 0 && flags[pt.x][pt.y] === false) {
        // safe, not discovered
        search(pt);
      }
    });
  };

  if (getNumberOfNode(t) === 0) {
    // no mine here, starting chain search
    search(t);
  }

};

export const timeElapsed = () => {
  const t = getTimestamp();
  if (t < state.timeStarted) {
    return 0;
  }
  return t - state.timeStarted;
};

export const hasMine = (p: Point) => {
  return state.mine[p.x][p.y] === true;
};

export const setMine = (p: Point) => {
  state.mine[p.x][p.y] = true;
};

export const hasFlag = (p: Point) => {
  return state.flag[p.x][p.y];
};

export const setOpened = (p: Point) => {
  state.open[p.x][p.y] = true;
};

export const isOpened = (p: Point) => {
  return state.open[p.x][p.y];
};

export const getNumberOfNode = (p: Point) => {
  let count = 0;
  mapIteratorAround(state.mine, p, (v) => {
    if (v === true) {
      count++;
    }
  });
  return count;
};

export const countMine = () => {
  let count = mineCount;
  mapIterator(state.flag, (b) => {
    if (b) {
      count--;
    }
  });
  return count;
};
