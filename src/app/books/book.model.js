"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(name, descr, fullDescr, imagePath, author, genre, addedTime) {
        this.name = name;
        this.description = descr;
        this.fullDescription = fullDescr;
        this.imagePath = imagePath;
        this.author = author;
        this.genre = genre;
        this.addedTime = addedTime;
    }
    return Book;
}());
exports.Book = Book;
