class BookStore {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const book = {
      title: title,
      author: author
    };
    this.books.push(book);
    return book;
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  get allBooks() {
    return this.books;
  }

  set allBooks(books) {
    this.books = books;
  }
}

const addButton = document.getElementById('addButton');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookItems = document.getElementById('bookItems');

const bookshelf = new BookStore();

function displayBooks(books) {
  bookItems.innerHTML = '';

  books.forEach((book, index) => {
    const itemDiv = document.createElement('ul')
    const bookItem = document.createElement('li');
    const remLi = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Remove"
    bookItem.textContent = `${book.title} by ${book.author}`;
    
    bookItems.appendChild(itemDiv);
    itemDiv.appendChild(bookItem);
    itemDiv.appendChild(remLi);
    remLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
      bookshelf.removeBook(index);
      localStorage.setItem('books', JSON.stringify(bookshelf.allBooks));
      displayBooks(bookshelf.allBooks);
    });
  });
}

const storedBooks = JSON.parse(localStorage.getItem('books'));
if (storedBooks) {
  bookshelf.allBooks = storedBooks;
}

displayBooks(bookshelf.allBooks);

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  bookshelf.addBook(bookTitle.value, bookAuthor.value);
  localStorage.setItem('books', JSON.stringify(bookshelf.allBooks));
  displayBooks(bookshelf.allBooks);
  bookTitle.value = '';
  bookAuthor.value = '';
});
