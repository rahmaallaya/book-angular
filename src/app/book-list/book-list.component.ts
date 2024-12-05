import { CommonModule, NgClass } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../Models/Book';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  bks: any[] = [];
  fBks: any[] = [];
  cat: string = 'Toutes';
  constructor(private bksrv: BookService) {}
  ngOnInit() {
    this.bks = this.bksrv.getBook();
    this.fBks = this.bks;
  }
  filter() {
    if (this.cat === 'Toutes') {
      this.fBks = this.bks;
    } else {
      this.fBks = this.bks.filter(b => b.categorie === this.cat);
    }
  }
  getRowColor(book:any):string {
    if (book.prix > 25) return 'red';
    else if (book.prix > 10) return 'orange';
    else return 'yellow';
  }
  
  
}
