import {Component, Input, OnInit} from '@angular/core';
import {RecommendedItems} from '../../../model';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() detalis: RecommendedItems = null;

  constructor() { }

  ngOnInit(): void {
  }
}
