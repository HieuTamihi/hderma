import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items = [
    {menu: 'VỀ LANEIGE'},
    {menu: 'ƯU ĐÃI THÁNG 12'},
    {menu: 'CHĂM SÓC DA'},
    {menu: 'TRANG ĐIỂM'},
    {menu: 'SỰ KIỆN'}
  ];
}
