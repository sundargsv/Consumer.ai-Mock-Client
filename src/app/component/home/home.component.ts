import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';


import { HomeService } from '../../service/home/home.service';

/**
 * Layouts
 * Header
 * Footer with 3 Tabs - Marketplace, Purchase, Profile, Notifications
 * Content in the middle
 *
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userId: number;
  constructor(private route: ActivatedRoute, private homeService: HomeService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
          this.userId = params['user_id'];
    });
    console.log('Home Page - User_id ' + this.userId);
    const obj: any = this.homeService.getAllMarketPlaceByUser(this.userId);
    console.log(JSON.stringify(obj));
  }

  /**
   * Get all marketplace (products) on load - maintain the pagination
   * @params : User_id
   * @response : Based on the user's previous purchase and the current consumer's add will also be listed
   */

   getAllMarketPlaceByUser() {
   }

}
