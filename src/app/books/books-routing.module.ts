
import {Routes, RouterModule} from "@angular/router";
import {BooksComponent} from "./books.component";
import {BookStartComponent} from "./book-start/book-start.component";
// import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookResolver} from "./book-detail/book-item-resolver.service";
import {NgModule} from "@angular/core";
import {CanDeactivateGuard} from "./book-edit/can-deactivate-auth.service";
import {AuthGuard} from "../auth/auth-guard.service";
import {CommonModule} from "@angular/common";


const booksRoutes: Routes = [
    {path: '', component: BooksComponent, children: [
        {path: '', component: BookStartComponent},
        // {path:'new', component: BookEditComponent, canActivate: [AuthGuard]},
        {path:':slug', component: BookDetailComponent, resolve: {book: BookResolver}}
        // {path:':id/edit', component: BookEditComponent, canDeactivate: [CanDeactivateGuard]}

    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(booksRoutes),
    ],
    exports: [RouterModule]
})

export class BooksRoutingModule{}