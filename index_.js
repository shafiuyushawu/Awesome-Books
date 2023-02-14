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

function displayBooks(books) {
  const bookItems = document.getElementById('bookItems');
  bookItems.innerHTML = '';

  books.forEach((book) => {
    const bookElement = document.createElement('li');
    bookElement.textContent = `${book.title} by ${book.author}`;
    bookItems.appendChild(bookElement);
  });
}

const bk = new Books();
const storedBooks = JSON.parse(localStorage.getItem('books'));
if (storedBooks) {
  bk.assignBook = storedBooks;
}

displayBooks(bk.allBooks);

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  const book = bk.add(bookTitle.value, bookAuthor.value);
  localStorage.setItem('books', JSON.stringify(bk.allBooks));
  displayBooks(bk.allBooks);
  console.log(bookTitle.value);
});
