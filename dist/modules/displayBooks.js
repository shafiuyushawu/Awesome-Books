

const displayBooks = (bookshelf, bookItems) => {
    bookItems.innerHTML = '';

    bookshelf.allBooks.forEach((book, index) => {
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
            displayBooks(bookshelf, bookItems);
        });
    });
}

export default displayBooks;