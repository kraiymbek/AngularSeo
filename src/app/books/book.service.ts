import {Book} from "./book.model";
import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Subject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HttpResponse} from "@angular/common/http";
import {Response} from "@angular/http";


@Injectable()
export class BookService implements OnInit{

    booksChanged = new Subject<Book[]>();

    // private books: Book[] = [
    //     new Book('The English Girl: A Novel','' +
    //         'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.',
    //         'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ',
    //         'https://author.today/content/2018/05/22/611017fbf68b42bfabdf84f17c16aaf1.jpg?width=153&height=200&mode=max',
    //         'Алексей Тихий',
    //         'action',
    //         new Date(),
    //     'the-english-girl-a-novel'),
    //     new Book('Dayz gone','' +
    //         'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время.',
    //         'Бывает, что человек рождается, опережая время, и своими изобретениями меняет мир... А бывает, что мир делает скачок вперед, и ты не успеваешь родиться в свое время. И живешь с невыносимым желанием сменить серость офисных будней на сладостный уху звон булата, рёв боевого горна и крепкое плечо соратника. ',
    //         'https://upload.wikimedia.org/wikipedia/ru/5/51/%D0%A1%D0%BE%D0%B1%D0%B0%D1%87%D1%8C%D0%B5_%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpg',
    //         'Алексей Тихий',
    //         'action',
    //         new Date(),
    //     'dayz-gone')
    // ];

    private books: Book[];
    private book: Book;


    constructor(private http: HttpClient){
        this.http.get('http://localhost:2368/ghost/api/v0.1/posts/?client_id=ghost-admin&client_secret=76cdb6269275')
            .subscribe((res: HttpResponse<Book>) => {
                // console.log("done", res.posts[0].id);
                this.setBooks(res.posts);
            })

        console.log("in service when we click",this.book);


    }

    ngOnInit(){


            // this.http.get('https://angular-books-raiym.firebaseio.com/books.json')
            //     .subscribe((res:Response) =>{
            //         const books: Book[] = res.json()
            //
            //     });





    }

    getBooks(){
        return this.books.slice();
    }

    getBook(id: number){
        return this.books.slice()[id];
    }

    getBookBySlug(slug: string){

        this.http.get('http://localhost:2368/ghost/api/v0.1/posts/slug/'+ slug +'?client_id=ghost-admin&client_secret=76cdb6269275')
            .subscribe((res: HttpResponse<Book>) => {
                this.setBook(res.posts[0]);
            });


        return this.book;

    }




    addBook(book: Book){
        this.books.push(book);
        this.booksChanged.next(this.books.slice());

    }

    updateBook(id: number, newBook: Book){
        this.books[id] = newBook;
        this.booksChanged.next(this.books.slice());
        this.http.post('https://angular-books-raiym.firebaseio.com/books.json', newBook)
            .subscribe(response => console.log(response));

    }

    deleteBook(id: number){
        this.books.splice(id,1);
        this.booksChanged.next(this.books.slice());
        }


    setBooks(books: Book[]){
            this.books = books;
            this.booksChanged.next(this.books.slice());

        }

    setBook(book: Book){
        this.book = book;
    }

}