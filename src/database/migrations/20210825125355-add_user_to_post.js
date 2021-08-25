'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("posts", "user_id", {
      type: Sequelize.INTERGER,
      references: {
        model: 'users',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("posts", "user_id"); 
      
  }
};
