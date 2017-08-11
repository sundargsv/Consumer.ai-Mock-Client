import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { UserService } from '../../service/user.service';
import {LoggedInResponse} from '../../models/LoggedInResponse';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {
  rForm: FormGroup;
  private otpNumber: number; 
  private userId: number;
  private errorMsg: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService, private router: Router) {    
   this.rForm = fb.group({
      'otpNumber': [null, Validators.compose([ Validators.required, Validators.minLength(4), Validators.maxLength(4)]) ],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
          this.userId = params['user_id'];
    });
    
    console.log('OTP Verification - User_id ' + this.userId);
      // 9688265787
  }

  verifyOTP(post) {
    let resourceParams: any = {
      'user_id': this.userId,
      'otpNumber': post.otpNumber
    };
    let loggedUser: LoggedInResponse; 
    loggedUser = this.userService.verifyOTP(resourceParams);
    if (loggedUser.verified) {
      let navigationExtras: NavigationExtras = {
      queryParams: { 'user_id': loggedUser.userId },
      fragment: 'section_3'
    };
    // Navigate to the login page with extras
      this.router.navigate(['/home'], navigationExtras);
    }else {
      this.errorMsg = loggedUser.message;
      alert(this.errorMsg);
    }
  }

}
