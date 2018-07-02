import { WindowModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { ButtonComponent } from './button/button.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CanDeactivateGuard} from "./books/book-edit/can-deactivate-auth.service";
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import {BookResolver} from "./books/book-detail/book-item-resolver.service";
import {BookService} from "./books/book.service";
import { HomeComponent } from './home/home.component';
import {BooksModule} from "./books/books.module";
import {ContactsComponent} from "./contacts/contacts.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      ContactsComponent,
      ButtonComponent,
      SigninComponent,
      SignupComponent,
      PageNotFoundComponent,
      ContactListComponent,
      HomeComponent
  ],
  imports:[
      BrowserModule,
      WindowModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService,AuthService, AuthGuard,CanDeactivateGuard,BookResolver],
})
export class AppModule { }
