const Rental = require("./rental");

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Basantapur Apartment",
        city: " Durbar Square",
        street: "Basantapur Darbar Kshetra",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description:
          "Very nice apartment Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, laudantium! ",
        dailyRate: 340,
        shared: false
      },
      {
        title: "Sinamangal Apartment ",
        city: "Baneshwor",
        street: "Sinamangal",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description:
          "Very nice apartment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ad necessitatibus eos, veniam nihil dolor doloribus. Mollitia, quam natus.",
        dailyRate: 220,
        shared: false
      },
      {
        title: "Central Apartment ",
        city: "Naikap",
        street: "Hanuman Road",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description:
          "Very nice apartment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ad necessitatibus eos, veniam nihil dolor doloribus. Mollitia, quam natus.",
        dailyRate: 534,
        shared: true
      },
      {
        title: "Darbar Marg",
        city: "Naya Sadak",
        street: "Nachhen Galli, Kathmandu 44600, Nepal",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 4,
        description:
          "Very nice apartment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ad necessitatibus eos, veniam nihil dolor doloribus. Mollitia, quam natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ad necessitatibus eos, veniam nihil dolor doloribus. Mollitia, quam natus.",
        dailyRate: 950,
        shared: true
      },

      {
        title: "Ratna Marg",
        city: "Purano Sadak",
        street: "MakkhanLal, Kathmandu, Nepal",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 930,
        shared: true
      }
    ];
  }

  async cleanDb() {
    //TODO:  DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
    await Rental.remove({});
  }

  pushRentalsToDb() {
    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.save();
    });
  }

  seedDb() {
    //SOLVED: prevents from creating Db everytime when server is exicuted.
    //SOLVED: holds the process to clean the Db, then only allows to push Db.
    this.cleanDb();
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
