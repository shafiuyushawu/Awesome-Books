import BookStore from "./bookStore.js";
import displayBooks from "./displayBooks.js";

const addButton = document.getElementById('addButton');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');

const bookshelf = new BookStore()

export default function addBook() {
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (bookTitle.value !== '' & bookAuthor.value !== "") {
            bookshelf.addBook(bookTitle.value, bookAuthor.value);
            localStorage.setItem('books', JSON.stringify(bookshelf.allBooks));
            displayBooks(bookshelf, bookItems);
            bookTitle.value = '';
            bookAuthor.value = '';
        }
    });
}