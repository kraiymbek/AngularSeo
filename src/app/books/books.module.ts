
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksComponent} from "./books.component";
import {BooksRoutingModule} from "./books-routing.module";
import {BookStartComponent} from "./book-start/book-start.component";
import {BookListComponent} from "./book-list/book-list.component";
// import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookItemComponent} from "./book-list/book-item/book-item.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        BooksComponent,
        BookStartComponent,
        BookListComponent,
        BookDetailComponent,
        BookItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BooksRoutingModule
    ]
})
export class BooksModule {}