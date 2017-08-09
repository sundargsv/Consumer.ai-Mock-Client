import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {LoggedInResponse} from '../models/LoggedInResponse';

import {User} from '../models/user';

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

   /**
    * Create user
    * @params: User Object
    * @description: username, mobileNumber as an input - required Fields
    * @response: LoggedInResponse
    * @error's : Check with the header status and send the error msg
    */

   createUser(user: User) {
     console.log('Creating User:');
    let loggedUser: LoggedInResponse = new LoggedInResponse();
    if (user.mobileNumber == 9688265787 ) {
      loggedUser.userId = 1;
      loggedUser.message = 'User created with ID given in the LoggedInResponse object and OTP will be sent via SMS.';
    }else {
      loggedUser.userId = 0;
      loggedUser.message = 'Invalid mobile number/ Mobile number already exists.';
    }
    loggedUser.verified = false;
    // console.log(loggedUser);
     return loggedUser;
   }

   /**
    * Login user
    * @params: mobileNumber
    * @description: only send mobileNumber as an input
    * @response: LoggedInResponse
    */

    loginUser(mobileNumber) {
      console.log('Logging in User:');
      let loggedUser: LoggedInResponse = new LoggedInResponse();
      console.log(mobileNumber);
      if (mobileNumber == 9688265787) {
        loggedUser.userId = 1;
        loggedUser.message = 'User exists with ID given in the LoggedInResponse object and OTP will be sent via SMS';
      }else {
         loggedUser.userId = 0;
        loggedUser.message = 'This mobile Number does not exists with us, please register.';
      }
      loggedUser.verified = false;
      return loggedUser;
    }

   /**
    * Resource : /user/{userId}/{otpNumber}
    */
   verifyOTP(resourceParams: any) {
    console.log(resourceParams);
    let loggedUser: LoggedInResponse = new LoggedInResponse();
    loggedUser.userId = 1;
    if (resourceParams.otpNumber == 1234 &&  resourceParams.user_id == 1) {
      loggedUser.message = 'User verified with the given OTP.';
      loggedUser.verified = true;
    }else {
      loggedUser.message = 'User not verified with the given OTP.';
      loggedUser.verified = false;
    }
     return loggedUser;
   }
}
