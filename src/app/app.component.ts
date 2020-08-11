import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  hello(){
    console.log('Hello');
  }

  constructor(translate: TranslateService){
    translate.setDefaultLang(environment.language);
    translate.use(environment.language);
  }
}



