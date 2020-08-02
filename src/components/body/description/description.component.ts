import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LostLuggage} from '../../../model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  lostLuggage: LostLuggage;

  constructor(private http: HttpClient) {
    this.http.get('/api/lostluggage')
      .subscribe((value: any) => this.lostLuggage = value);

  }

  ngOnInit(): void {
  }

  get deliveryPrice(): number {
    return this.lostLuggage ? this.lostLuggage.delivery_price : null;
  }

  get dateEndAuction(): string {
    return this.lostLuggage ? this.lostLuggage.date_end_auction : '';
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

}

