const bookList = [
  "A Smarter Way to Learn JavaScript",
  "JavaScript: The Definitive Guide",
  "Head First JavaScript Programming",
  "Eloquent JavaScript, 3rd Edition",
  "The Principles of Object-Oriented JavaScript",
  "JavaScript: The Good Parts",
  "JavaScript and JQuery",
  "Secrets of the JavaScript Ninja",
  "Learn JavaScript VISUALLY",
  "Professional JavaScript for Web Developers",
  "Effective JavaScript",
  "Javascript for Beginners",
  "You Don’t Know JS",
  "Speaking JavaScript",
  "JavaScript for Kids",
  "Programming JavaScript Applications",
  "High-Performance Browser Networking",
];
const javaScriptBook = [];
for (const book of bookList) {
  console.log(book.toLowerCase());
  if (book.toLowerCase().indexOf("javascript") != -1) {
    javaScriptBook.push(book);
  }
}
console.log(javaScriptBook);
