const { Sequelize, Model, DataTypes } = require('sequelize');

class Categories extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            Updated_at: {
                type: DataTypes.DATE
            },
            sequelize,
            tableName: 'categories'
        })
    }
}