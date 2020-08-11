import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LostLuggage} from '../../../model';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  lostLuggage: LostLuggage;

  constructor(private api: ApiService) {
    api.lostLuggage().subscribe(value => this.lostLuggage = value);
  }

  ngOnInit(): void {
  }

  get deliveryPrice(): number {
    return this.lostLuggage ? this.lostLuggage.delivery_price : null;
  }

  get dateEndAuction(): string {
    return this.lostLuggage ? this.lostLuggage.date_end_auction : '';
  }

  get countDays(): number {
    const now = new Date();
    const end = this.dateEndAuction ? new Date(this.dateEndAuction) : new Date();
    const diff = Math.abs(Number(end) - Number(now));
    if (diff !== 0) {
      const days = (diff / (60 * 60 * 24 * 1000));
      return Math.floor(days);
    } else {
      return 0;
    }
  }

  get actualPrice(): number {
    return this.lostLuggage ? this.lostLuggage.actual_price : null;
  }

  get buyNowPrice(): number {
    return this.lostLuggage ? this.lostLuggage.buy_now_price : null;
  }

  get description(): string {
    return this.lostLuggage ? this.lostLuggage.description : '';
  }

  get additionalInfo(): string {
    return this.lostLuggage ? this.lostLuggage.additional_info : '';
  }

  get deliveryTerm(): string {
    return this.lostLuggage ? this.lostLuggage.delivery_term : '';
  }

}

