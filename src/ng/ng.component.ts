import {Component, OnDestroy, OnInit} from "@angular/core";
import {countMine, getNumberOfNode, hasFlag, hasMine, initMineSweeper, isOpened, timeElapsed, touchNode} from "../utils/mine";
import {sizeOf} from "../interfaces";
import {range} from "lodash";
import {dInput} from "./square/square.component";
import {point} from "../utils/point";

@Component({
  selector: "ng-root",
  templateUrl: "./ng.component.html",
  styleUrls: ["./ng.component.styl"]
})
export class NgComponent implements OnInit, OnDestroy {
  time = NaN;
  timer = undefined;
  sizeOf = sizeOf;
  range = range;
  started = false;

  countMine = countMine;

  clickHandler(x: number, y: number) {
    const p = point(x, y);
    if (!this.started) {
      initMineSweeper(p);
      this.started = true;
    } else {
      touchNode(p);
    }
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

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = Math.floor(timeElapsed() / 1000);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
