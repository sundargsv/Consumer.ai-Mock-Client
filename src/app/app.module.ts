import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserService } from './service/user.service';
import { HomeService } from './service/home/home.service';
import { OTPComponent } from './component/otp/otp.component';
import { HomeComponent } from './component/home/home.component';
import { MarketPlaceComponent } from './component/market-place/market-place.component';
import { PurchaseComponent } from './component/purchase/purchase.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OTPComponent,
    HomeComponent,
    MarketPlaceComponent,
    PurchaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
     RouterModule.forRoot([
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'otpVerification', component: OTPComponent},
      {path: 'home', component: HomeComponent},
      {path: 'marketPlace', component: MarketPlaceComponent},
      {path: 'purchase', component: PurchaseComponent}

    ])
  ],
  providers: [UserService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
