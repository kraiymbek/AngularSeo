import {Component, OnInit, Input, Inject} from '@angular/core';
import {Book} from "../../book.model";
import {BookService} from "../../book.service";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../auth/auth.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-book-item',
  templateUrl: 'book-item.component.html',
  styleUrls: ['book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;
  slugifiedName: string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService: BookService,
              public authService: AuthService,
              @Inject(DOCUMENT) private document: any
              ){

  }



  ngOnInit() {
    // this. slugifiedName = this.slugify(this.book.name);
  }

  goToUrl() {
    this.document.location.href = 'http://youtube.com';
  }


  slugify(input: string){
    return input.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
  }



  onDeleteBook(){
    this.bookService.deleteBook(this.index);

  }




}
