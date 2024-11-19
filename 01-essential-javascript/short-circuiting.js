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
      rating: 0,
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

// falsy values: 0, '', undefined, null

// the && operator if the first value is false immediately returns it and doesn't look at the second value;
console.log(true && "some text"); // returns some text
console.log(false && "some text");

const hasMovieAdaptation = book.hasMovieAdaptation;
console.log(false && "Has a movie based on it"); // returns false

// for the || operator , returns first if it is true i.e not falsy
console.log(true || "text"); //returns true
console.log(false || "text"); //returns text
console.log(null || "some"); // returns some

const hasReviewCount = book.reviews.goodreads.rating;
hasReviewCount;
console.log(hasReviewCount || "no data");
// returns no rating
// but in above code the rating is 0 and it is not a falsy 0;it has data whose value is 0;
// to correct it we use ?? operator
console.log(hasReviewCount ?? "no data ");
//returns 0;
