import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { LanDaToaSangComponent } from './lan-da-toa-sang/lan-da-toa-sang.component';
import { LamDepVaCuocSongComponent } from './lam-dep-va-cuoc-song/lam-dep-va-cuoc-song.component';
import { SanPhamChinhComponent } from './san-pham-chinh/san-pham-chinh.component';
import { LaneigeLifeComponent } from './laneige-life/laneige-life.component';
import { SloganComponent } from './slogan/slogan.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LanDaToaSangComponent,
    LamDepVaCuocSongComponent,
    SanPhamChinhComponent,
    LaneigeLifeComponent,
    SloganComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
