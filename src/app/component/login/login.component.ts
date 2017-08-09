import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { UserService } from '../../service/user.service';
import {User} from '../../models/user';
import {LoggedInResponse} from '../../models/LoggedInResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    rForm: FormGroup;
    mobileNumber: number;
    errorMsg: string = '';
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.rForm = fb.group({
      'mobileNumber' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });
   }

  ngOnInit() {
  }

  login(post: User) {
    let loggedInResponse: LoggedInResponse = new LoggedInResponse();
    console.log('The mobileNumber - Login component' + post);
    this.mobileNumber = post.mobileNumber;
    loggedInResponse = this.userService.loginUser(this.mobileNumber);
     if (loggedInResponse.userId != 0) {
    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'user_id': loggedInResponse.userId },
      fragment: 'section_3'
    };
      // Navigate to the login page with extras
      this.router.navigate(['/otpVerification'], navigationExtras);
    } else {
      this.errorMsg = loggedInResponse.message;
      alert(this.errorMsg);
    }
    console.log(loggedInResponse);
  }
}
