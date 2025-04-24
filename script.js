class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
  }
}

class Library {
  constructor() {
    this.books = [];
    this.bookshelf = document.querySelector(".right");
  }

  addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    this.books.push(newBook);
    this.showBooks();
  }

  removeBookFromLibrary(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.showBooks();
  }

  swapReadStatus(id) {
    const book = this.books.find((book) => book.id === id);

    if (book) {
      book.read = book.read === "Yes" ? "No" : "Yes";
    }
    this.showBooks();
  }

  showBooks() {
    this.bookshelf.innerHTML = ""; //Clear Bookshelf

    this.books.forEach((book) => {
      const bookdiv = document.createElement("div");
      bookdiv.classList.add("bookfield");
      bookdiv.innerHTML = `
    <p><b>Author:</b> ${book.author}</p>
    <p><b>Title:</b> ${book.title}</p>
    <p><b>Pages:</b> ${book.pages}</p>
    <p><b>Read?</b> ${book.read}</p>
    <button class="deletebtn" id="delete-${book.id}">Delete</button>
    <button class="readbtn" id="read-${book.id}">Read?</button>`;
      bookdiv.id = book.id;

      this.bookshelf.appendChild(bookdiv);

      const deleteButton = document.getElementById("delete-" + book.id);
      deleteButton.addEventListener("click", () => {
        this.removeBookFromLibrary(book.id);
      });
      const readButton = document.getElementById("read-" + book.id);
      readButton.addEventListener("click", () => {
        this.swapReadStatus(book.id);
      });
    });
  }
}

const library = new Library();

const dialog = document.getElementById("dialog");
const openDiag = document.getElementById("opendiag");
const closeDiag = document.getElementById("closediag");
const addBookBtn = document.getElementById("addbookdiag");
const form = document.querySelector("form");

const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

openDiag.addEventListener("click", () => {
  dialog.showModal();
});

closeDiag.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  library.addBookToLibrary(
    authorInput.value,
    titleInput.value,
    pagesInput.value,
    readInput.checked ? "Yes" : "No"
  );
  dialog.close();
  form.reset();
});

library.showBooks();
