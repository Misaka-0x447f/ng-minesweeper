import {Component, OnDestroy, OnInit} from "@angular/core";
import {
  countMine,
  getNumberOfNode,
  hasFlag,
  hasMine,
  initMineSweeper,
  isOpened,
  reinitMineSweeper,
  theTip,
  timeElapsed,
  toggleFlag,
  touchNode
} from "../utils/mine";
import {sizeOf} from "../interfaces";
import {range} from "lodash";
import {dInput} from "./square/square.component";
import {point} from "../utils/point";
import state from "../utils/state";

@Component({
  selector: "ng-root",
  templateUrl: "./ng.component.html",
  styleUrls: ["./ng.component.styl"]
})
export class NgComponent implements OnInit, OnDestroy {
  time: number | string = NaN;
  timer = undefined;
  sizeOf = sizeOf;
  range = range;

  countMine = countMine;

  theTip = theTip;

  cl(x: number, y: number) {
    const p = point(x, y);
    if (state.view === "title") {
      initMineSweeper(p);
      state.view = "play";
    }
    touchNode(p);
  }

  fl(x: number, y: number) {
    const p = point(x, y);
    if (state.view === "title") {
      initMineSweeper(p);
      state.view = "play";
    }
    toggleFlag(p);
    return false;
  }

  reset() {
    state.view = "title";
    reinitMineSweeper();
  }

  getStatus(x: number, y: number): dInput {
    const p = point(x, y);
    if (isOpened(p)) {
      if (hasMine(p)) {
        return "mine";
      }
      return getNumberOfNode(p) as Extract<dInput, number>;
    }
    if (hasFlag(p)) {
      return "flag";
    }
    return "blank";
  }

  fail() {
    return state.view === "failed";
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      if (state.view === "play") {
        this.time = Math.floor(timeElapsed() / 1000);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
