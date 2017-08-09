import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { UserService } from '../../service/user.service';
import {User} from '../../models/user';
import {LoggedInResponse} from '../../models/LoggedInResponse';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  userName: string = '';
  mobileNumber: number;
  titleAlert: string = 'This field is required';
  errorMsg: string = '';
/**
 * Dependency Injection
 */
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.rForm = fb.group({
      'userName': [null, Validators.required],
      'mobileNumber' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });
   }

  ngOnInit() {
  }

  addPost(post: User) {
    let loggedUser: LoggedInResponse;
    this.userName = post.username;
    this.mobileNumber = post.mobileNumber;
    console.log('Your User Input' + JSON.stringify(post));
    loggedUser = this.userService.createUser(post);
    if (loggedUser.userId != 0) {
    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'user_id': loggedUser.userId },
      fragment: 'section_2'
    };
      // Navigate to the login page with extras
      this.router.navigate(['/otpVerification'], navigationExtras);
    } else {
      this.errorMsg = loggedUser.message;
      alert(this.errorMsg);
    }
    console.log(loggedUser);
  }
}
