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
        books.style.display = "grid";
    });
}
function submit() {
    const submitBookBtn = document.querySelector("#submit");
    submitBookBtn.addEventListener('click', () => {
        submitBookReport = getBook();
        myLibrary.push(submitBookReport);
        modal.style.display = "none";
        render();
    });
}

function render() {
    console.log("Hello World");
    bookElements = getBook();

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
    const removeBtn = document.createElement("button");

    readBtn.classList.add("is-read");
    removeBtn.classList.add("remove-button");

    book.appendChild(readBtn);
    book.appendChild(removeBtn);

    book.appendChild(readBtn);
    book.appendChild(removeBtn);

    readBtn.addEventListener('click',() => 
    {
        if(readBtn.style.backgroundColor == 'rgba(240, 206, 206, 0.753)')
        {
            readBtn.style.backgroundColor = 'rgba(99, 224, 94, 0.685)'; 
        }
        else
        {
            readBtn.style.backgroundColor = 'rgba(240, 206, 206, 0.753)';
        }
    });
}

function toggleRemove() {

}

function clear() {
    clearBtn.addEventListener('click', () => {
        books.replaceChildren();
    });
}



addBook();
getBook();
submit();