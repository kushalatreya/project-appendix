import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT
} from "./types";

//actions are objects
const rentals = [
  {
    id: 1,
    title: "Basantapur Apartment",
    city: " Durbar Square",
    street: "Basantapur Darbar Kshetra",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 340,
    shared: false,
    createdAt: "24/12/2019"
  },
  {
    id: 2,
    title: "Sinamangal Apartment ",
    city: "Baneshwor",
    street: "Sinamangal",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 120,
    shared: true,
    createdAt: "2/12/2019"
  },
  {
    id: 3,
    title: "Central Apartment ",
    city: "Naikap",
    street: "Hanuman Road",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "4/12/2019"
  },
  {
    id: 4,
    title: "Darbar Marg",
    city: "Naya Sadak",
    street: "Nachhen Galli, Kathmandu 44600, Nepal",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 330,
    shared: true,
    createdAt: "1/12/2019"
  },

  {
    id: 5,
    title: "Ratna Marg",
    city: "Purano Sadak",
    street: "MakkhanLal, Kathmandu, Nepal",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 330,
    shared: true,
    createdAt: "2/12/2019"
  }
];

//actionCreator
const fetchRentalsByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};

const fetchRentalByIdSuccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental: rental
  };
};

export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals: rentals
  };
};

export const fetchRentalById = rentalId => {
  // SEND REQUEST TO SERVER, ASYNC CODE HERE ...

  return function(dispatch) {
    dispatch(fetchRentalsByIdInit());
    //SIMULATE SERVER CALL
    setTimeout(() => {
      const rental = rentals.find(rental => rental.id.toString() === rentalId);
      dispatch(fetchRentalByIdSuccess(rental));
    }, 1000);
    /* return {
      type: FETCH_RENTALS_BY_ID,
      rental: rental
    }; */
  };
};
