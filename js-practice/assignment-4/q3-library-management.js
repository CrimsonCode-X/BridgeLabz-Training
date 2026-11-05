// Q3: Library Management System (Classes + Objects)
class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Hobbit", "J.R.R. Tolkien", "9780007525492"),
  new Book("1984", "George Orwell", "9780451524935", true),
  new Book("Dune", "Frank Herbert", "9780441172719")
];

function displayAvailableBooks() {
  console.log("Available books:");
  books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} — ${book.author} (ISBN: ${book.isbn})`));
}

function issueBookByISBN(isbn) {
  const book = books.find(item => item.isbn === isbn);
  if (!book) return console.log("No book found for that ISBN.");
  if (!book.issueBook()) return console.log(`"${book.title}" is already issued.`);
  console.log(`Issued: ${book.title}`);
}

displayAvailableBooks();
const requestedISBN = prompt("Enter ISBN to issue a book:"); // Browser prompt; replace with an ISBN in Node.js.
if (requestedISBN) issueBookByISBN(requestedISBN.trim());
