"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookListComponent = (function () {
    function BookListComponent(bookService, router, route) {
        this.bookService = bookService;
        this.router = router;
        this.route = route;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.booksChanged
            .subscribe(function (books) {
            _this.books = books;
        });
        this.books = this.bookService.getBooks();
    };
    BookListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        selector: 'app-book-list',
        templateUrl: 'book-list.component.html',
        styleUrls: ['book-list.component.css']
    })
], BookListComponent);
exports.BookListComponent = BookListComponent;
