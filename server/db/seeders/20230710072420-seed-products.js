const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { data } = await axios('https://fakestoreapi.com/products');
    await queryInterface.bulkInsert(
      'Products',
      data.map((apiProduct) => ({
        title: apiProduct.title,
        description: apiProduct.description,
        price: apiProduct.price * 100,
        img: apiProduct.image,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
