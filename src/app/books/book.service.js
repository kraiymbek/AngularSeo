"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_model_1 = require("./book.model");
var rxjs_1 = require("rxjs");
var BookService = (function () {
    function BookService() {
        this.booksChanged = new rxjs_1.Subject();
        this.books = [
            new book_model_1.Book('The English Girl: A Novel', '' +
                'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.', 'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ', 'https://author.today/content/2018/05/22/611017fbf68b42bfabdf84f17c16aaf1.jpg?width=153&height=200&mode=max', 'Алексей Тихий', 'action', new Date()),
            new book_model_1.Book('The English Girl: A Novel', '' +
                'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.', 'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ', 'https://upload.wikimedia.org/wikipedia/ru/5/51/%D0%A1%D0%BE%D0%B1%D0%B0%D1%87%D1%8C%D0%B5_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpg', 'Алексей Тихий', 'action', new Date())
        ];
    }
    BookService.prototype.getBooks = function () {
        return this.books.slice();
    };
    BookService.prototype.getBook = function (id) {
        return this.books.slice()[id];
    };
    BookService.prototype.addBook = function (book) {
        this.books.push(book);
        this.booksChanged.next(this.books.slice());
    };
    BookService.prototype.updateBook = function (id, newBook) {
        this.books[id] = newBook;
        this.booksChanged.next(this.books.slice());
    };
    BookService.prototype.deleteBook = function (id) {
        this.books.splice(id, 1);
        this.booksChanged.next(this.books.slice());
    };
    return BookService;
}());
exports.BookService = BookService;
