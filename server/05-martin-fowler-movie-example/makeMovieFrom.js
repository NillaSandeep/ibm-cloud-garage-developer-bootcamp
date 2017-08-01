import {CHILDRENS, NEW_RELEASE, REGULAR} from "./movie-codes";

let makeMovieFrom = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    getFrequentRenterPoints(daysRented){
      if ((priceCode === NEW_RELEASE) && daysRented > 1) return 2;
      return 1;
    },
    getCharge(daysRented){
      let total = 0;

      switch (priceCode) {
            case REGULAR:

              total += 2;
              if (daysRented > 2) {
                total += (daysRented - 2) * 1.5;
              }
              break;

            case NEW_RELEASE:

              total += daysRented * 3;
              break;

            case CHILDRENS:

              total += 1.5;
              if (daysRented > 3) {
                total += (daysRented - 3) * 1.5;
              }

              break;
            default:

      }
      return total;
    }
  };
};

export {makeMovieFrom};
