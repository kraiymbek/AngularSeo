"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookDetailComponent = (function () {
    function BookDetailComponent(booService, route, router) {
        this.booService = booService;
        this.route = route;
        this.router = router;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.book = _this.booService.getBook(_this.id);
        });
    };
    BookDetailComponent.prototype.onEditBook = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-book-detail',
        templateUrl: 'book-detail.component.html',
        styleUrls: ['book-detail.component.css']
    })
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
