class Library
{
    constructor() {
        this.lib = []; 
    }

    addBook(bookObject)
    {
        this.lib.push(bookObject)
    }

    removeBook(bookObject)
    {
        this.lib = this.lib.filter(book => book != bookObject);
    }

} 

class Book {
    
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    setBook(t, a, p, iR)
    {
        this.title = t; 
        this.author = a; 
        this.pages = p; 
        this.isRead = iR; 
    }

    getBook()
    {
        return {
            title: this.title,
            author: this.author,
            pages: this.pages,
            isRead: this.isRead,
        };
    }
}

const myLibrary = new Library(); 
const books = document.querySelector('.books'); 
const clearBtn = document.getElementById('clear');
const addBookBtn = document.querySelector('.inital_display');
const modal = document.querySelector('.modal');
const submitBtn = document.getElementById('submit');

const newBooks = () =>
{
    addBookBtn.addEventListener('click', () => 
    {
        modal.classList.add('is-active');
    });
}

const submit = () => 
{
    submitBtn.addEventListener('click', (e) =>
    {
        e.preventDefault();
        const inputTitle = document.getElementById('input_Title');
        const inputAuthor = document.getElementById('input_Author');
        const inputPages = document.getElementById('input_Pages');
        const isChecked = document.getElementById('read');
        const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, isChecked.checked);
        myLibrary.addBook(newBook); 
        modal.classList.remove('is-active');
        render(newBook);
    });
}

const render = (bookObj) => 
{
    const book = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("button"); 
    const removeBtn = document.createElement("button"); 

    title.textContent = bookObj.title;
    author.textContent = bookObj.author; 
    pages.textContent = bookObj.pages; 
    isRead.textContent = bookObj.isRead;
    removeBtn.textContent = "Remove"; 

    book.appendChild(title); 
    book.appendChild(author); 
    book.appendChild(pages); 
    book.appendChild(isRead);
    book.appendChild(removeBtn); 

    book.classList.add('book');
    if(isRead.textContent === 'false')
    {
        isRead.textContent = "Not Read"; 
        isRead.classList.add("not-read"); 
    }
    else
    {
        isRead.textContent = "Read"; 
        isRead.classList.add("is-read"); 
    }
    removeBtn.classList.add('remove-button'); 
    
    books.appendChild(book); 

    isRead.addEventListener('click', (e) => {
        e.preventDefault();
        if (isRead.textContent == 'Not Read') {
            isRead.textContent = "Read";
            isRead.classList.remove("not-read");
            isRead.classList.add("is-read");
        }
        else {
            isRead.classList.remove("is-read");
            isRead.classList.add("not-read");
            isRead.textContent = "Not Read";
        }
    });

    removeBtn.addEventListener('click', () => 
    {
        myLibrary.removeBook(bookObj);
        book.remove();
    });

    console.log(myLibrary); 
}

(function() {
    newBooks(); 
    submit(); 
})();


