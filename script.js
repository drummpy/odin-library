let myLibrary = [];
const bookshelf = document.querySelector(".right");
const openDiag = document.getElementById("opendiag");
const closeDiag = document.getElementById("closediag");
const addBookBtn = document.getElementById("addbookdiag");
const form = document.querySelector("form");

const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(author, title, pages, read) {
  newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}

function removeBookFromLibrary(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  showBooks();
}

function showBooks() {
  bookshelf.innerHTML = ""; //Clear Bookshelf

  myLibrary.forEach((book) => {
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("bookfield");
    bookdiv.innerHTML = `
    <p><b>Author:</b> ${book.author}</p>
    <p><b>Title:</b> ${book.title}</p>
    <p><b>Pages:</b> ${book.pages}</p>
    <p><b>Read?</b> ${book.read}</p>
    <button class="deletebtn" id="${book.id}">Delete</button>`; //Add delete button
    bookdiv.id = book.id;

    bookshelf.appendChild(bookdiv);

    const deleteButton = document.getElementById(book.id);
    deleteButton.addEventListener("click", () => {
      removeBookFromLibrary(book.id);
    });
    console.log(myLibrary);
  });
}

openDiag.addEventListener("click", () => {
  dialog.showModal();
});

closeDiag.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
  // if (form.checkValidity()) {
  //   dialog.close();
  // }
});

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const author = authorInput.value;
  const title = titleInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked ? "Yes" : "No";
  addBookToLibrary(author, title, pages, read);
  showBooks();
  dialog.close();
  form.reset();
});

showBooks();
