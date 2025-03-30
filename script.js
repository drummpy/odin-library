const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary() {
  newBook = new Book("Dickens", "The Night", 633, true);

  myLibrary.push(newBook);

  newBook = new Book("Johnson", "Where's my Johnson?", 12, false);

  myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);
