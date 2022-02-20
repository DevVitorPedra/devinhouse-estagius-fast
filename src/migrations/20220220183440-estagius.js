'use strict';
import {Datatypes } from 'sequelize'
module.exports = {
  async up (queryInterface, Sequelize) {
    id:{
      type:Datatypes.String
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
