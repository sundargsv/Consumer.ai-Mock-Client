import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

import {Product} from '../../models/product';
import { HomeService } from '../../service/home/home.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {
  userId: number;
  products: Product[] = [];
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
          this.userId = params['user_id'];
    });
    console.log('MarketPlace Component - User_id  ' + this.userId);
    this.getAllMarketPlaceByUserId(this.userId);
  }

  private getAllMarketPlaceByUserId(userId) {
       this.homeService.getAllMarketPlaceByUser(userId).subscribe(products => { this.products = products; });
   }

}
