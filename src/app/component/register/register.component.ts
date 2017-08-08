import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  user: User;
  userName: string = '';
  mobileNumber: number;
  titleAlert: string = 'This field is required';
/**
 * Dependency Injection
 */
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.rForm = fb.group({
      'userName': [null, Validators.required],
      'mobileNumber' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });
   }

  ngOnInit() {
  }

  addPost(post) {
    let loggedUser: LoggedInResponse;
    this.userName = post.name;
    this.mobileNumber = post.mobileNumber;
    console.log('Your User Input' + JSON.stringify(post));
    loggedUser = this.userService.createUser(post);
    console.log(loggedUser);
  }
}
