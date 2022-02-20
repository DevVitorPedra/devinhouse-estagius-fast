import Sequelize from 'sequelize';
import databaseConfig from '../config';

const models = [];
class Database {
    constructor(){
        this.init();
    }

    init(){
        console.log('conectando')
        this.connection = new Sequelize(databaseConfig);

     models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection))
    }
}

export default new Database();