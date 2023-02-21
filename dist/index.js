import BookStore from "./modules/bookStore.js";
import addBook from "./modules/addBook.js";
import Navigation from "./modules/Navigation.js";
import displayBooks from "./modules/displayBooks.js";
import storeBooks from "./modules/storeBooks.js";
import showDate from "./modules/showDate.js";

const bookItems = document.getElementById('bookItems');
const bookshelf = new BookStore();

showDate()
storeBooks()
displayBooks(bookshelf, bookItems);
addBook()
Navigation()