
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ContactsComponent} from "./contacts/contacts.component";

import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'books', loadChildren: './books/books.module#BooksModule'},
    {path: 'contacts', component: ContactsComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}



];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule{

}