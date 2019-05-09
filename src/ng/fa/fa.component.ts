import {Component, Input} from "@angular/core";
import {faBattleNet} from "@fortawesome/free-brands-svg-icons";
import {faFlag, faHourglassHalf} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "ng-fa",
  templateUrl: "./fa.component.html",
  styleUrls: ["./fa.component.styl"]
})

export class FaComponent {

  constructor() {
  }

  @Input() ico: keyof typeof icoMapping;

  private icoMapping = icoMapping;

}

export const icoMapping = {
  mine: faBattleNet,
  time: faHourglassHalf,
  flag: faFlag
};
