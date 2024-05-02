const clearBtn = document.getElementById("clear");
const addBookBtn = document.querySelector(".inital_display");
const books = document.querySelector(".books");
const modal = document.querySelector(".modal");

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function getBook() {
    const inputTitle = document.getElementById("input_Title").value;
    const inputAuthor = document.getElementById("input_Author").value;
    const inputPages = document.getElementById("input_Pages").value;
    const isChecked = document.getElementById("read").checked;
    return new Book(inputTitle, inputAuthor, inputPages, isChecked);
}

function addBook() {
    addBookBtn.addEventListener('click', () => {
        modal.style.display = "block";
    });
}
function submit() {
    const submitBookBtn = document.querySelector("#submit");
    submitBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitBookReport = getBook();
        myLibrary.push(submitBookReport);
        modal.style.display = "none";
        render();
    });
}

function render() {
    bookElements = myLibrary[myLibrary.length - 1];

    const book = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");

    title.textContent = bookElements.title;
    author.textContent = bookElements.author;
    pages.textContent = bookElements.pages + " pages";

    book.classList.add("book");

    books.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);

    const readBtn = document.createElement("button");
    readBtn.type = "button";
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    if (bookElements.isRead == true) {
        readBtn.classList.add("is-read");
        readBtn.textContent = "Read";
    }
    else {
        readBtn.classList.add("not-read");
        readBtn.textContent = "Not Read";
    }
    removeBtn.classList.add("remove-button");
    removeBtn.textContent = "Remove";

    book.appendChild(readBtn);
    book.appendChild(removeBtn);

    readBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (readBtn.textContent == 'Not Read') {
            readBtn.textContent = "Read";
            readBtn.classList.remove("not-read");
            readBtn.classList.add("is-read");
        }
        else {
            readBtn.classList.remove("is-read");
            readBtn.classList.add("not-read");
            readBtn.textContent = "Not Read";
        }
    });

    toggleRemove(book, removeBtn);
}

function toggleRemove(b, button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        b.replaceChildren();
        b.remove();
    });
}

function clear() {
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        books.replaceChildren();
    });
}



addBook();
getBook();
submit();
clear(); 