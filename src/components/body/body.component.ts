import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() numerBagazu;
  @Output()
  change = new EventEmitter();
  number = 23;
  arrayValue = [1, 3, 4, 5];
  buyNow = 124;
  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

  wyslij(): void {
    this.change.emit();
  }

  get actualPrize(): number {
    return 154;
  }

  get prizeBuyNow(): number {
    return this.buyNow;
  }

  amount(): number  {
    return this.number;
  }

}

