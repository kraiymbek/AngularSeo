"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var book_list_component_1 = require("./books/book-list/book-list.component");
var book_detail_component_1 = require("./books/book-detail/book-detail.component");
var book_item_component_1 = require("./books/book-list/book-item/book-item.component");
var book_edit_component_1 = require("./books/book-edit/book-edit.component");
var contacts_component_1 = require("./contacts/contacts.component");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var books_component_1 = require("./books/books.component");
var button_component_1 = require("./button/button.component");
var signin_component_1 = require("./auth/signin/signin.component");
var signup_component_1 = require("./auth/signup/signup.component");
var auth_service_1 = require("./auth/auth.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var book_start_component_1 = require("./books/book-start/book-start.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var can_deactivate_auth_service_1 = require("./books/book-edit/can-deactivate-auth.service");
var contact_list_component_1 = require("./contacts/contact-list/contact-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            book_list_component_1.BookListComponent,
            book_detail_component_1.BookDetailComponent,
            book_item_component_1.BookItemComponent,
            book_edit_component_1.BookEditComponent,
            contacts_component_1.ContactsComponent,
            books_component_1.BooksComponent,
            button_component_1.ButtonComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
            book_start_component_1.BookStartComponent,
            page_not_found_component_1.PageNotFoundComponent,
            contact_list_component_1.ContactListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuard, can_deactivate_auth_service_1.CanDeactivateGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
