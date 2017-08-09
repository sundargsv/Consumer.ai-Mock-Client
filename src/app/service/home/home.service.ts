import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import {MarketPlace} from '../../models/marketPlace';
import {Product} from '../../models/product';
import {Merchant} from '../../models/merchant';

// import * as data from './marketplaceData.json';

@Injectable()
export class HomeService {
   /**
   *
   *Injecting http
   */
  constructor(public http: Http) {
   }

    /**
   * The list of home services :
   * 1. Get all marketplace list relevant to the user (User_id)
   * 2. Get all current products
   * 3. Get all archieve products
   * 4. Get the user Notification
   */

   /**
    * Get all marketplace list
    * @params: Number
    * @description: userId
    * @response: Marketplace
    * @error's : Check with the header status and send the error msg
    */
   getAllMarketPlaceByUser(userId) {
      let marketPlace: MarketPlace = new MarketPlace();
      let product_1: Product = new Product();
      let merchant_1: Merchant = new Merchant();
      merchant_1 = {
        id: 10,
        name: 'Apple Inc',
        merchantType: 'Computer'
      };
      let merchant_2: Merchant = new Merchant();
      merchant_2 = {
        id: 20,
        name: 'One Plus',
        merchantType: 'Phone'
      };
      product_1.id = 123; product_1.name = 'mac book pro'; product_1.merchant = merchant_1;
      let product_2: Product = new Product();
      product_2.id = 124; product_2.name = 'One plus 3T'; product_2.merchant = merchant_2;
      marketPlace.userId = 1;
      marketPlace.products = [product_1, product_2];
      return marketPlace;

  }
}

