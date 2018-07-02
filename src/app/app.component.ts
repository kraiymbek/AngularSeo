import {Component, OnInit} from '@angular/core';
import {BookService} from "./books/book.service";
import {Book} from "./books/book.model";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private bookService: BookService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyATDaQ-7GNcX5yn2NtZxygwDamTL3W273w",
      authDomain: "angular-books-raiym.firebaseapp.com"
    });
  }

  onBackgroundBlue(){

  }




}
