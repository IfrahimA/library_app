const clearBtn = document.getElementById("clear");
const addBookBtn = document.querySelector(".inital_display");
const books = document.querySelector(".books");
const modal = document.querySelector(".modal");
const submitBookBtn = document.querySelector("#submit");
const inputTitle = document.getElementById("input_Title");
const inputAuthor = document.getElementById("input_Author");
const inputPages = document.getElementById("input_Pages");
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
        modal.style.display = "block";
        books.style.display = "grid";
    });
}


isReadBtn = document.createElement("button");
removeBtn = document.createElement("button");

function submit()
{    
    submitBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isChecked = document.getElementById('read').checked;
        const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, isChecked);
        myLibrary.push(newBook);
        modal.style.display = "none";

        
        const displayBook = document.createElement('div'); 
        books.appendChild(displayBook);
        displayBook.classList.add("book");


        /* Adding Properties of Each Block */
        title = document.createElement("p");
        author = document.createElement("p");
        pages = document.createElement("p");
        title.classList.add("card-text");
        author.classList.add("card-text");
        pages.classList.add("card-text");
        displayBook.appendChild(title);
        displayBook.appendChild(author);
        displayBook.appendChild(pages);
        title.textContent = newBook.title;
        author.textContent = newBook.author; 
        pages.textContent = newBook.pages + " pages"; 
  

        /* Adding Buttons */
        removeBtn.textContent = "Remove"
        if (newBook.isRead == false)
        {
            isReadBtn.classList.add("not-read");
            isReadBtn.textContent = "Not Read!";
        }
        else
        {
            isReadBtn.classList.add("is-read"); 
            isReadBtn.textContent = "Read"; 
        }
        removeBtn.classList.add("remove-button");
        displayBook.appendChild(isReadBtn); 
        displayBook.appendChild(removeBtn);
    });
}

isReadBtn.addEventListener('click', () => {
    if (isReadBtn.textContent == "Not Read") {
        isReadBtn.classList.remove("not-read");
        isReadBtn.classList.add("is-read");
        isReadBtn.textContent = "Read";
    }
    else if (isReadBtn.textContent == "Read") {
        isReadBtn.classList.remove("is-read");
        isReadBtn.classList.add("not-read");
        isReadBtn.textContent = "Not Read";
    }
})

function removeBook()
{

}

function clear()
{
    clearBtn.addEventListener('click', () => 
    {
        books.replaceChildren();
    })
}

addBook();
submit();
clear(); 