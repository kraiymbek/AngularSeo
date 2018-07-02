"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var book_model_1 = require("../book.model");
var BookEditComponent = (function () {
    function BookEditComponent(route, bookService, router, authService) {
        this.route = route;
        this.bookService = bookService;
        this.router = router;
        this.authService = authService;
        this.editMode = false;
        this.changesSaved = false;
        this.bookName = "";
        this.bookDescription = "";
        this.bookImagePath = "";
        this.bookFullDescription = "";
        this.bookGenre = "";
        this.bookAuthor = "";
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    BookEditComponent.prototype.initForm = function () {
        this.book = this.bookService.getBook(this.id);
        if (this.editMode) {
            this.bookName = this.book.name;
            this.bookDescription = this.book.description;
            this.bookImagePath = this.book.imagePath;
            this.bookFullDescription = this.book.fullDescription;
            this.bookGenre = this.book.genre;
            this.bookAuthor = this.book.author;
        }
        this.bookForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.bookName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(this.bookImagePath, forms_1.Validators.required),
            'description': new forms_1.FormControl(this.bookDescription, forms_1.Validators.required),
            'fullDescription': new forms_1.FormControl(this.bookFullDescription, forms_1.Validators.required),
            'genre': new forms_1.FormControl(this.bookGenre, forms_1.Validators.required),
            'author': new forms_1.FormControl(this.bookAuthor, forms_1.Validators.required)
        });
    };
    BookEditComponent.prototype.onSubmit = function () {
        var newBook = new book_model_1.Book(this.bookForm.value['name'], this.bookForm.value['description'], this.bookForm.value['fullDescription'], this.bookForm.value['imagePath'], this.bookForm.value['author'], this.bookForm.value['genre'], new Date());
        if (this.editMode) {
            this.bookService.updateBook(this.id, newBook);
        }
        else {
            this.bookService.addBook(newBook);
        }
        this.changesSaved = true;
        this.onCancel();
    };
    BookEditComponent.prototype.onCancel = function () {
        this.router.navigate(['/'], { relativeTo: this.route });
    };
    BookEditComponent.prototype.canDeactivate = function () {
        if (!this.authService.isAuthenticated()) {
            return true;
        }
        if ((this.bookName !== this.book.name || this.bookDescription != this.book.description ||
            this.bookImagePath != this.book.imagePath || this.bookFullDescription != this.book.fullDescription ||
            this.bookGenre != this.book.genre || this.bookAuthor != this.book.author) && !this.changesSaved) {
            return confirm('Сохранить изменения?');
        }
        else {
            return true;
        }
    };
    return BookEditComponent;
}());
BookEditComponent = __decorate([
    core_1.Component({
        selector: 'app-book-edit',
        templateUrl: 'book-edit.component.html',
        styleUrls: ['book-edit.component.css']
    })
], BookEditComponent);
exports.BookEditComponent = BookEditComponent;
