import BookStore from "./bookStore.js";

const bookshelf = new BookStore()

const storeBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
        bookshelf.allBooks = storedBooks;
    }
}

export default storeBooks;