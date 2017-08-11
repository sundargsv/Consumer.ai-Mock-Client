import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

import {Product} from '../../models/product';
import { HomeService } from '../../service/home/home.service';

/**
 * Layouts
 * Header
 * Footer with 3 Tabs - Marketplace (Top Products), Purchase, Profile, Notifications
 * Content in the middle
 *
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number;
  products: Product[] = [];
  constructor(private route: ActivatedRoute, private homeService: HomeService, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
          this.userId = params['user_id'];
    });
    console.log('Home Component - User_id ' + this.userId);
    //this.getAllMarketPlaceByUser(this.userId);
    // this.homeService.getAllMarketPlaceByUser(this.userId).subscribe((marketPlace) => {
    //    this.marketPlace = marketPlace;
    //   });

    // this.marketPlace = this.homeService.getAllMarketPlaceByUser(this.userId);
    // this.products = this.marketPlace.products;
    // console.log(JSON.stringify(this.marketPlace.products));
    //console.log(this.products);
  }

  /**
   * Get all marketplace (products) on load - maintain the pagination
   * @params : User_id
   * @response : Based on the user's previous purchase and the current consumer's add will also be listed
   */

   private getAllMarketPlaceByUser(userId) {
       this.homeService.getAllMarketPlaceByUser(userId).subscribe(products => { this.products = products; });
   }

   callMarketPlace() {
     let navigationExtras: NavigationExtras = {
      queryParams: { 'user_id': this.userId },
      fragment: 'section_4'
    };
    // Navigate to the login page with extras
      this.router.navigate(['/marketPlace'], navigationExtras);
   }

   callPurchase() {
     let navigationExtras: NavigationExtras = {
      queryParams: { 'user_id': this.userId },
      fragment: 'section_5'
    };
    // Navigate to the login page with extras
      this.router.navigate(['/purchase'], navigationExtras);
   }

}
