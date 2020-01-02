const Rental = require("./rental");

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Basantapur Apartment",
        city: " Durbar Square",
        street: "Basantapur Darbar Kshetra",
        category: "apartment",
        image:
          "https://s.iha.com/2842400001716/Short-term-rentals-Paliouri-Kripis-Studio-Apartments-Paliouri_1.jpeg",
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
        image:
          "https://s.iha.com/4828500002184/Luxury-vacation-rental-Minsk-Luxury-apartment-flat_2.jpeg",
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
        image:
          "https://s.iha.com/4682800007106/Short-term-rentals-Patsch-Apartments-Tiroler-Alpenhof_7.jpeg",
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
        image:
          "https://images.interhome.com/AT6094.260.1/partner-medium/194937-1-15778-1437674006",
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
        image:
          "https://s.iha.com/4682800008666/Short-term-rentals-Patsch-Apartments-Tiroler-Alpenhof_8.jpeg",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 930,
        shared: true
      },

      {
        title: "Check Location",
        city: "Oulu",
        street: "Kotkantie 1, 04320 Tuusula",
        category: "house",
        image:
          "https://s.iha.com/592400008414/Short-term-rentals-Lans-Haus-Olympia_8.jpeg",
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
