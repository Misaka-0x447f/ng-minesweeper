import {mineCount, Point} from "../interfaces";
import {pointEqual, pointIteratorAround, pointRand} from "./point";
import {getEmptyMap, mapIterator, mapIteratorAround} from "./map";
import state from "./state";
import {getTimestamp} from "./lang";
import {shuffle} from "lodash";

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
  theTip = randomTip();
};

export const reinitMineSweeper = () => {
  state.flag = getEmptyMap();
  state.mine = getEmptyMap();
  state.open = getEmptyMap();
  state.timeStarted = undefined;
};

export const touchNode = (t: Point) => {
  if (hasFlag(t)) {
    return;
  }

  setOpened(t);

  if (hasMine(t)) {
    // game end
    state.gameStarted = false;
    return;
  }

  // algorithm touch flag
  const flags = getEmptyMap();
  // work stack
  const stack: Array<Point> = [];

  // define search algo: BFS recursive
  const search = (p: Point) => {
    // node "p" has no number so we search around
    if (flags[p.x][p.y]) {
      return;
    }
    flags[p.x][p.y] = true;
    if (!hasFlag(t)) {
      setOpened(p);
    }
    pointIteratorAround(p, (pt) => {
      if (flags[pt.x][pt.y]) {
        return;
      }
      if (!hasFlag(pt)) {
        setOpened(pt);
      }
      if (getNumberOfNode(pt) === 0) {
        // safe, continue discover
        stack.push(pt);
      }
    });
  };

  if (getNumberOfNode(t) === 0 && !hasFlag(t)) {
    // no mine here, starting chain search
    stack.push(t);
  }

  while (stack.length > 0) {
    search(stack[0]);
    stack.shift();
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

export const toggleFlag = (p: Point) => {
  state.flag[p.x][p.y] = !state.flag[p.x][p.y];
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

const randomTip = () => {
  return shuffle([
    "失敗しました",
    "菜",
    "死",
    "この世界は意味なし。",
    "爽",
    "你死了！",
    "希望の花..."
  ])[0];
};

export let theTip = randomTip();
