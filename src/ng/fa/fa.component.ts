import {Component, Input, OnInit} from "@angular/core";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "ng-fa",
  templateUrl: "./fa.component.html",
  styleUrls: ["./fa.component.styl"]
})

export class FaComponent implements OnInit {

  constructor() {
  }

  @Input() ico: keyof typeof icoMapping;

  private icoMapping = icoMapping;

  ngOnInit() {
  }

}

export const icoMapping: IOfIco = {
  mine: "battle-net"
};

interface IOfIco {
  [T: string]: IconProp;
}
