import Books from './Books.js'

export default class BookStore {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const book = new Books()
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