const book = {
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
};

const { title, pages, hasMovieAdaptation } = book;

const summary = pages >= 1000 ? "has less than 1000" : "has more than 1000";
const movieSummary = hasMovieAdaptation
  ? "has a movie"
  : "does not have a movie";
console.log(`The book ${title} has ${summary} pages`);
console.log(`The book ${title} ${movieSummary} based on it`);
