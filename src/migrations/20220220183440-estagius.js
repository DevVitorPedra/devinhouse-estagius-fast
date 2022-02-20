'use strict'

module.exports = {
  async up (queryInterface, Sequelize){
    return await queryInterface.createTable('categories',{
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      updated_at:{
        type:Sequelize.DATE
      }

    })

  
  },

async down  (queryInterface, Sequelize) {
  return await queryInterface.dropTable('categories')
  }
};
