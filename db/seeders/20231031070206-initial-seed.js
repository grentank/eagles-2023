const { hashSync } = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        { name: 'Alex', email: '1@1', hashpass: hashSync('1', 10) },
        { name: 'Bob', email: '2@2', hashpass: hashSync('2', 10) },
        { name: 'Carl', email: '3@3', hashpass: hashSync('3', 10) },
        { name: 'Dave', email: '4@4', hashpass: hashSync('4', 10) },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Movies',
      [
        {
          title: 'Star Wars',
          year: 1977,
          type: 'Science fiction',
          userId: 1,
          img: 'https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1200?cb=20190313021755',
        },
        {
          title: 'Star Trek',
          year: 2009,
          type: 'Science fiction',
          userId: 2,
          img: 'https://assets-prd.ignimgs.com/2023/08/04/star-trek-in-order-1691190264355.jpg',
        },
        {
          title: 'The Matrix',
          year: 2002,
          type: 'Action',
          userId: 3,
          img: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        },
        {
          title: 'The Avengers',
          year: 2012,
          type: 'Action',
          userId: 4,
          img: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
          title: 'The Godfather',
          year: 1972,
          type: 'Crime',
          userId: 1,
          img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
        },
        {
          title: 'The Godfather: Part II',
          year: 1974,
          type: 'Crime',
          userId: 2,
          img: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          type: 'Action',
          userId: 3,
          img: 'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        },
        {
          title: 'The Dark Knight Rises',
          year: 2012,
          type: 'Action',
          userId: 4,
          img: 'https://play-lh.googleusercontent.com/i8F_nMjhXao8_bTeHofrUDZk-i00FxuQMeDrATexcu5WPcvGM7OoUwdA3ooSLhi4YzE-RB9_fBsvGXe1qLQ',
        },
        {
          title: 'Inception',
          year: 2010,
          type: 'Science fiction',
          userId: 1,
          img: 'https://kinotv.ru/upload/iblock/42f/42fceb8ba3580e32cea0353c6ed32c12/23cd9f0f5982a9496b7955350998f74c.jpg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
