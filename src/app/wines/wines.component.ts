import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'vow-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {
  public wineList = [];
  constructor(public service: WineService) { }

  ngOnInit() {
    this.wineList = this.service.getWines();
  }

}
