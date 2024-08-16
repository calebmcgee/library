/*
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
    const player1 = new Player('steve', 'X');
    const player2 = new Player('also steve', 'O'); 

    console.log(Object.getPrototypeOf(player1) === Player.prototype);
    console.log(Object.getPrototypeOf(player2) === Player.prototype);
*/
const Book = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function (){ 
      return `${title} by ${author}, ${pages} pages, ${read}`;
  } 
};

const myLibrary = [];
const count = 1;

const addBookToLibrary = (form) => {
  let bookTitle = form.title.value;
  let bookAuthor = form.author.value;
  let bookPages = form.pages.value;
  let bookRead = form.read.value.toLowerCase();
  let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(book);
  console.log(myLibrary);
  displayBooks();
}
const displayBooks = () => { 
  let bookList = document.querySelector('.bookList');
  let last = myLibrary[myLibrary.length-1];
    let book = document.createElement('div');
    book.classList.add('book-' + count);
    count += 1;
    bookList.appendChild(book);

    let title = document.createElement('p');
    title.classList.add('title');
    book.appendChild(title);
    title.textContent = last.title;

    let remove = document.createElement('button');
    remove.classList.add('removeButton');
    let close_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    close_svg.setAttribute('viewBox', '0 0 24 24')
    let path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d','M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z');
    close_svg.appendChild(path);
    remove.appendChild(close_svg);
    book.appendChild(remove);

    remove.addEventListener('click', (event) => {
      event.target.parentNode.parentNode.remove();
    });

    let author = document.createElement('p');
    author.classList.add('author');
    author.textContent = last.author;
    book.appendChild(author);

    let pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = last.pages + ' pages';
    book.appendChild(pages);


    let toggleRead = document.createElement('button');
    toggleRead.classList.add('toggleRead');
    book.appendChild(toggleRead);
    if (last.read === 'read'){
      toggleRead.textContent = 'Read';
    } else if (last.read === 'unread') {
      toggleRead.textContent = 'Unread';
    } else {
      last.read = 'unread';
      toggleRead.textContent = 'Unread';
    }
    console.log(last.read);
    toggleRead.addEventListener('click', (event) => {
      if (last.read === 'read'){
        last.read = 'unread';
        toggleRead.textContent = 'Unread';
      } else if (last.read === 'unread') {
        last.read = 'read';
        toggleRead.textContent = 'Read';
      }
    });
}

let showButton = document.querySelector('.showButton');
showButton.addEventListener('click', (event) =>{ 
  document.querySelector('.modal').showModal();
});
let closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', (event) => {
  document.querySelector('.modal').close();
});

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.modal').close();
});