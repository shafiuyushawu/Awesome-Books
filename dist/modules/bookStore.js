export default class BookStore {
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