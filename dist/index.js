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

const viewList = document.getElementById('viewList')
const addNew = document.getElementById('addNew')
const Contact = document.getElementById('Contact')


const bookCont = document.getElementById('bookCont')
const addForm = document.getElementById('addForm')
const ContactMe = document.getElementById('ContactMe')
let today = new Date()
const dateDiv = document.getElementById('date')
const datetime = today.toLocaleDateString('en-US', {
  dateStyle: 'long',
});

const time = today.toLocaleTimeString('en-US', {
  timeStyle: 'medium',
});

dateDiv.innerHTML = `${datetime}, ${time}`

const bookshelf = new BookStore();



function displayBooks(books) {
  bookItems.innerHTML = '';

  books.forEach((book, index) => {
    const itemDiv = document.createElement('ul')
    itemDiv.className = ""
    itemDiv.className = "flex justify-between  my-1 even:bg-slate-200"
    const bookItem = document.createElement('li');
    bookItem.className = "px-5"
    const remLi = document.createElement('li');
    remLi.className = "px-5"
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-sm btn-outline"
    deleteBtn.innerHTML = "Remove"
    bookItem.textContent = `"${book.title}" by ${book.author}`;
   
    bookItems.appendChild(itemDiv)
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
  if (bookTitle.value !== '' & bookAuthor.value !== ""){
    bookshelf.addBook(bookTitle.value, bookAuthor.value);
    localStorage.setItem('books', JSON.stringify(bookshelf.allBooks));
    displayBooks(bookshelf.allBooks);
    bookTitle.value = '';
    bookAuthor.value = '';
  }
});

viewList.addEventListener('click', () => {
  bookCont.className = 'block'
  addForm.className = 'hidden'
  ContactMe.className = 'hidden'
})

addNew.addEventListener('click', () => {
  bookCont.className = 'hidden'
  addForm.className = 'block'
  ContactMe.className = 'hidden'
})

Contact.addEventListener('click', () => {
  bookCont.className = 'hidden'
  addForm.className = 'hidden'
  ContactMe.className = 'block'
})