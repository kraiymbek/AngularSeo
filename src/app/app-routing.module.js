"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contacts_component_1 = require("./contacts/contacts.component");
var book_detail_component_1 = require("./books/book-detail/book-detail.component");
var book_edit_component_1 = require("./books/book-edit/book-edit.component");
var books_component_1 = require("./books/books.component");
var signup_component_1 = require("./auth/signup/signup.component");
var signin_component_1 = require("./auth/signin/signin.component");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var book_start_component_1 = require("./books/book-start/book-start.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var can_deactivate_auth_service_1 = require("./books/book-edit/can-deactivate-auth.service");
var appRoutes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: books_component_1.BooksComponent, children: [
            { path: '', component: book_start_component_1.BookStartComponent },
            { path: 'new', component: book_edit_component_1.BookEditComponent, canActivate: [auth_guard_service_1.AuthGuard] },
            { path: ':id', component: book_detail_component_1.BookDetailComponent },
            { path: ':id/edit', component: book_edit_component_1.BookEditComponent, canActivate: [auth_guard_service_1.AuthGuard], canDeactivate: [can_deactivate_auth_service_1.CanDeactivateGuard] }
        ] },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
