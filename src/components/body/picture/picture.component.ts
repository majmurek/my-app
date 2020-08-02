import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LostLuggage} from '../../../model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  lostLuggage: LostLuggage;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/lostluggage')
      .subscribe((value: LostLuggage) => this.lostLuggage = value);
  }

}
