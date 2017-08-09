import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {LoggedInResponse} from '../models/LoggedInResponse';

@Injectable()
export class UserService {
  constructor(public http: Http) {
    console.log('UserService connected ...');
  }

  /**
   * The list of services :
   * 1. Register User
   * 2. Login User
   * 3. OTP Verification
   * 4. Get User Profile
   * 5. Forgot Password
   */

   createUser(user) {
    let loggedUser: LoggedInResponse = new LoggedInResponse();
     console.log('Creating User:');
    if (user.mobileNumber == 9688265787 ) {
      loggedUser.userId = 1;
      loggedUser.message = 'User created with ID given in the LoggedInResponse object and OTP will be sent via SMS.';
      loggedUser.verified = false;
    }else {
      loggedUser.userId = 0;
      loggedUser.message = 'Invalid mobile number.';
      loggedUser.verified = false;
    }
    // console.log(loggedUser);
     return loggedUser;
   }

   /**
    * Resource : /user/{userId}/{otpNumber}
    */
   verifyOTP(resourceParams) {
    console.log(resourceParams);
    let loggedUser: LoggedInResponse = new LoggedInResponse();
    if (resourceParams.otpNumber == 1234 &&  resourceParams.user_id == 1) {
      loggedUser.userId = 1;
      loggedUser.message = 'User verified with the given OTP.';
      loggedUser.verified = true;
    }else {
      loggedUser.userId = 1;
      loggedUser.message = 'User not verified with the given OTP.';
      loggedUser.verified = false;
    }
     return loggedUser;
   }
}
