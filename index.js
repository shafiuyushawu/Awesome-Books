var bookStore = []
var bookItems = document.getElementById('bookItems');
var bookTitle = document.getElementById('bookTitle');
var bookAuthor = document.getElementById('bookAuthor');
var addButton = document.getElementById('addButton');
var removeBtn = document.getElementById('removeBtn')


addButton.addEventListener('click', (event) => {
    event.preventDefault()

    // add book to browser local storage
    const addBook = (title, author) => {
        const newBook = {
            title: title,
            author: author
        }
        bookStore.push(newBook)
        localStorage.setItem('bookStore', JSON.stringify(bookStore))
       
    }
    addBook(bookTitle.value, bookAuthor.value)

   const removeBook = (title) => {
        bookItems = bookItems.filter(book => book.title !== title);
        bookItems.setItem("bookItems", JSON.stringify(bookItems));
    };

    // display
    const displayBooks = () => {
        for(let book = 0; book < bookStore.length; book += 1) {
            const booksDiv = document.createElement('div')
            const bookTitle = document.createElement('p')
            bookTitle.innerHTML = book.title

            const bookAuthor = document.createElement('p')
            bookAuthor.innerHTML = book.author

            const removeBook = document.createElement('button');
            removeBook.id = 'removeBtn'
            removeBook.innerHTML = 'Remove'

            bookItems.appendChild(booksDiv)
            booksDiv.appendChild(bookTitle)
            booksDiv.appendChild(bookAuthor)
            bookItems.appendChild(removeBook)
        }

    }

    if(localStorage.getItem('bookStore')) {
        bookStore = JSON.parse(localStorage.getItem('bookStore'))
    }
    displayBooks()
     
});
