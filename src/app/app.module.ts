import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from '../components/header/header.component';
import {BodyComponent} from '../components/body/body.component';
import {FooterComponent} from '../components/footer/footer.component';
import {MenuComponent} from '../components/header/menu/menu.component';
import {ReservationComponent} from '../components/header/reservation/reservation.component';
import {InformationComponent} from '../components/footer/information/information.component';
import {OfferComponent} from '../components/footer/offer/offer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    ReservationComponent,
    InformationComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
