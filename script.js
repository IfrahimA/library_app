clearBtn = document.getElementById("clear");
addBookBtn = document.querySelector(".inital_display");
books = document.querySelector(".books");
modal = document.querySelector(".modal");
submitBookBtn = document.querySelector("#submit");
inputTitle = document.getElementById("input_Title");
inputAuthor = document.getElementById("input_Author");
inputPages = document.getElementById("input_Pages");
inputRead = document.getElementById("read");
let newBook; 

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook()
{
    addBookBtn.addEventListener('click', () => {
        addBookBtn.style.display = 'none';
        modal.style.display = "block";
    });
}

/* Create a function to clear everything, back to the beginning.*/
function clear()
{

}

function submit()
{
    submitBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(inputTitle.value);
        console.log(inputAuthor.value);
        console.log(inputPages.value);
        console.log(inputRead.value);
        const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
        myLibrary.push(newBook);
        modal.style.display = "none"; 
        addBookBtn.style.display = "grid"; 
    });
}

addBook();
submit();