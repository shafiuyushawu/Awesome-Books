import Book from './modules/Book'

class Books {
  constructor() {
    this.books = [];
  }

  add = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    return book;
  }

  set setBooks(books) {
    this.books = books;
  }

  get allBooks() {
    return this.books;
  }
}

const addButton = document.getElementById('addButton');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookItems = document.getElementById('bookItems');

const bk = new Books();
const storedBooks = JSON.parse(localStorage.getItem('books'));
if (storedBooks) {
  bk.setBooks = storedBooks;
}

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  bk.add(bookTitle.value, bookAuthor.value);
  localStorage.setItem('books', JSON.stringify(bk.allBooks));
  console.log(bookTitle.value);
});
