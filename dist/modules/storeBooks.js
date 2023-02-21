import BookStore from "./bookStore.js";

const bookshelf = new BookStore()

export default function storeBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
        bookshelf.allBooks = storedBooks;
    }
}