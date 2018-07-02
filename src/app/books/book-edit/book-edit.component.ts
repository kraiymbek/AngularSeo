// import {Component, OnInit, Output} from '@angular/core';
// import {ActivatedRoute, Params, Router} from "@angular/router";
// import {FormGroup, FormControl, Validators} from "@angular/forms";
// import {BookService} from "../book.service";
// import {Book} from "../book.model";
// import {AuthService} from "../../auth/auth.service";
// import {CanComponentDeactivate} from "./can-deactivate-auth.service";
// import {Observable} from "rxjs";
//
// @Component({
//   selector: 'app-book-edit',
//   templateUrl: 'book-edit.component.html',
//   styleUrls: ['book-edit.component.css']
// })
// export class BookEditComponent implements OnInit, CanComponentDeactivate {
//   id: number;
//   bookForm: FormGroup;
//   editMode = false;
//   changesSaved = false;
//     book: Book;
//     allowEdit = false;
//
//   bookName = "";
//   bookDescription = "";
//   bookImagePath = "";
//   bookFullDescription = "";
//   bookGenre = "";
//   bookAuthor = "";
//   bookSlug = "";
//
//
//
//
//   constructor(private route: ActivatedRoute,
//               private bookService: BookService,
//               private router: Router,
//               private authService: AuthService) { }
//
//   ngOnInit() {
//     this.route.params
//         .subscribe(
//             (params: Params) => {
//               this.id = +params['id'];
//               this.editMode = params['id'] !=null;
//               this.initForm();
//             }
//         );
//
//       this.route.queryParams
//           .subscribe(
//               (queryParams: Params) => {
//                   console.log(queryParams['allowEdit']);
//                   this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
//               }
//           )
//
//
//
//   }
//
//   private initForm(){
//       this.book = this.bookService.getBook(this.id);
//
//
//
//       if(this.editMode){
//           this.bookName = this.book.name;
//           this.bookDescription = this.book.description;
//           this.bookImagePath = this.book.imagePath;
//           this.bookFullDescription = this.book.fullDescription;
//           this.bookGenre = this.book.genre;
//           this.bookAuthor = this.book.author;
//           this.bookSlug = this.book.slug;
//       }
//
//
//
//       this.bookForm = new FormGroup({
//           'name': new FormControl(this.bookName, Validators.required),
//           'imagePath': new FormControl(this.bookImagePath, Validators.required),
//           'description': new FormControl(this.bookDescription, Validators.required),
//           'fullDescription': new FormControl(this.bookFullDescription, Validators.required),
//           'genre' : new FormControl(this.bookGenre, Validators.required),
//           'author' : new FormControl(this.bookAuthor, Validators.required),
//           'slug': new FormControl(this.bookSlug, Validators.required)
//       })
//   }
//
//     onSubmit(){
//       const newBook = new Book(
//           this.bookForm.value['name'],
//           this.bookForm.value['description'],
//           this.bookForm.value['fullDescription'],
//           this.bookForm.value['imagePath'],
//           this.bookForm.value['author'],
//           this.bookForm.value['genre'],
//           new Date(),
//           this.bookForm.value['slug']
//       );
//       if(this.editMode){
//           this.bookService.updateBook(this.id, newBook);
//       } else {
//           this.bookService.addBook(newBook);
//       }
//       this.changesSaved = true;
//
//       this.onCancel();
//     }
//
//     onCancel(){
//         this.router.navigate(['/'], {relativeTo: this.route});
//     }
//
//     canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
//         if (!this.authService.isAuthenticated()) {
//             return true;
//         }
//
//         if ((this.bookName !== this.book.name || this.bookDescription != this.book.description ||
//             this.bookImagePath != this.book.imagePath || this.bookFullDescription != this.book.fullDescription ||
//             this.bookGenre != this.book.genre || this.bookAuthor != this.book.author) && !this.changesSaved) {
//             return confirm('Сохранить изменения?');
//         }
//         else {
//             return true;
//         }
//     }
//
//
//
//
// }
