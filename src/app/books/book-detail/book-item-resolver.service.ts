import {Book} from "../book.model";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {BookService} from "../book.service";
import {Injectable} from "@angular/core";

@Injectable()

export class BookResolver implements Resolve<Book> {


    constructor(private bookService: BookService) {
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> | Promise<Book> | Book {
        return this.bookService.getBookBySlug(route.params['slug']);


    }
}