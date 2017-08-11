import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

import { HomeService } from '../../service/home/home.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  userId: number;
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
          this.userId = params['user_id'];
    });
    console.log('Purchase Component - User_id ' + this.userId);
  }

  getAllArchievePurchaseByUserId(userId) {
    
  }

}
