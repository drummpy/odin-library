const myLibrary = [];
const bookshelf = document.querySelector(".right");

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary() {
  newBook = new Book("Dickens", "The Night", 633, "Yes");

  myLibrary.push(newBook);

  newBook = new Book("Johnson", "Where's my Johnson?", 12, "No");

  myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);

myLibrary.forEach((book) => {
  const bookdiv = document.createElement("div");
  bookdiv.classList.add("bookfield");
  bookdiv.innerHTML = `
  <p><b>Author:</b> ${book.author}</p>
  <p><b>Title:</b> ${book.title}</p>
  <b>Pages:</b> ${book.pages}</p>
  <b>Read?</b> ${book.read}</p>`;
  bookdiv.id = book.id;

  bookshelf.appendChild(bookdiv);
});
