import {Component, Input} from "@angular/core";

@Component({
  selector: "ng-square",
  templateUrl: "./square.component.html",
  styleUrls: ["./square.component.styl"]
})
export class SquareComponent {

  constructor() {
  }

  @Input() d: dInput;

  isNumberBlock() {
    return typeof this.d === "number" && this.d !== 0;
  }

  is(s: string) {
    return this.d === s;
  }

}

export type dInput = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | "flag" | "blank" | "mine" | "mine-clicked";
