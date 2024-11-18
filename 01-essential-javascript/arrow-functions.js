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

const { publicationDate } = book;

// TRADITIONAL FUNCTION DEFINATION
function getYear(date) {
  return date.split("-")[0];
}

console.log(getYear(publicationDate));

//SAME FUNCTION USING ARROW

const getOnlyYear = (date) => date.split("-")[0];

console.log(getOnlyYear(publicationDate));
