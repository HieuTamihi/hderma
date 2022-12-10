import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-san-pham-chinh',
  templateUrl: './san-pham-chinh.component.html',
  styleUrls: ['./san-pham-chinh.component.scss']
})
export class SanPhamChinhComponent {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
  };
}
