const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBook(id) {
  return data.find((d) => d.id === id);
}

function getBooks() {
  return data;
}

// # JAVASCRIPT MAP METHOD

//doubling each numbers in the array
const numbers = [2, 6, 8, 4, 12, 34];

function doubleNumbers(arr) {
  return arr.map((a) => a * 2);
}
console.log(doubleNumbers(numbers)); //returns [4,12,16,8,24,68]

// get the array of all the books title

const books = getBooks();

const bookTitles = books.map((book) => book.title); // returns an array of book titles

// mapping the books to get the object with author and publication date;

const bookDetails = books.map((book) => ({
  Author: book.author,
  "Publication-Date": book.publicationDate,
}));

console.log(bookDetails); // returns an object in key:value pair.

// # JAVASCRIPT FILTER METHOD

//filtering the books that contains less than 600 pages.
const shortBooks = books.filter((book) => book.pages < 600);
console.log(shortBooks);

// filtering for the adventure books with pages more than 500 and mapping to show their titles only
const adventureBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks); //returns two books for adventure genre and pages>500;

// # JAVASCRIPT ARRAY REDUCE METHOD

// using reduce method to calculate the total amount of pages in all the books of above array.
// the sum is called accumulator, 0 is starting value, and on each iteration the sum keeps on increasing.
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(totalPages); //returns 3227

// # SORT METHOD IN ARRAYS -> JAVASCRIPT

const arr = [4, 1, 5, 2, 88, 67];
//use slice method to prevent the original array from modification. slice makes a copy of original so it remains unchanges.
const sortedArray = arr.slice().sort((a, b) => a - b); //a-b sorts in ascending order while b-a sorts in descending order
console.log(sortedArray);
console.log(arr);

// sorting the books from the page number
const sortedBooks = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedBooks); // returns the list of sorted books

// WORKING WITH THE IMMUTABLE ARRAYS
// MODIFYING WITHOUT CHANGING THE ORIGINAL ARRAY

// ADD A NEW BOOK TO THE LIST

const newBook = {
  id: 6,
  title: "Game of Clones",
  author: "Kaushal karki",
  genres: ["fantasy", "adventure", "fiction"],
};

const updatedBooks = [...books, newBook];
console.log(updatedBooks.length); // returns 6 books

// DELETE A BOOK FROM THE LIST

const booksAfterDeletion = books.filter((book) => book.id !== 2);
console.log(booksAfterDeletion);

// UPDATE A BOOK IN THE LIST

const updatedBookList = books.map((book) =>
  book.id === 3
    ? {
        ...book,
        author: "Kaushal Karki",
      }
    : book
);
console.log(updatedBookList); // returns the updated booklist with changed author
