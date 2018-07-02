import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Params, Router, Data} from "@angular/router";
import {Book} from "../book.model";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;


  constructor(private booService: BookService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    // this.route.params
    //     .subscribe(
    //         (params: Params) => {
    //           this.id = +params['id'];
    //           this.book = this.booService.getBook(this.id);
    //         }
    //     )



      this.route.data
          .subscribe(
              (data: Data) => {
                  console.log("dadadadad",data);
                  this.book = data['book'];

              }
          );



  }

  onEditBook(){
      this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});
  }


}
