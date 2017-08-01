let makeRentalFrom = (movie, daysRented) => {
  return {
    get movie() { return movie; },
    getFrequentRenterPoints (){
      return movie.getFrequentRenterPoints(daysRented);
    },
    getCharge(){
      return movie.getCharge(daysRented);
    }
  };
};

export {makeRentalFrom};
