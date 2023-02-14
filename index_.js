class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Books {
  constructor() {
    this.books = [];
  }

  add = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    return book;
  }

  remove = (index) => {
    this.books = this.books.filter((book, i) => i !== index);
  }

  set assignBook(books) {
    this.books = books;
  }

  get allBooks() {
    return this.books;
  }
}

const addButton = document.getElementById('addButton');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookList = document.getElementById('bookList');

const bk = new Books();
const books = bk.allBooks;

const booksStore = JSON.parse(localStorage.getItem('books'));
if (booksStore) {
  bk.assignBook = booksStore;
}

function handleAddClick(event) {
  event.preventDefault();
  const book = bk.add(bookTitle.value, bookAuthor.value);
  localStorage.setItem('books', JSON.stringify(bk.allBooks));
  displayBooks(bk.allBooks);
  bookTitle.value = '';
  bookAuthor.value = '';
}

function handleDeleteClick(event) {
  const bookIndex = event.target.dataset.index;
  bk.remove(bookIndex);
  localStorage.setItem('books', JSON.stringify(bk.allBooks));
  displayBooks(bk.allBooks);
}

function displayBooks(books) {
  // bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = document.createElement('li');
    const bookTitle = document.createElement('span');
    const bookAuthor = document.createElement('span');
    const deleteButton = document.createElement('button');
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    deleteButton.textContent = 'Remove';
    deleteButton.dataset.index = index;
    deleteButton.addEventListener('click', handleDeleteClick);
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(deleteButton);
    bookList.appendChild(bookItem);
  });
}

displayBooks(bk.allBooks);

addButton.addEventListener('click', handleAddClick);
