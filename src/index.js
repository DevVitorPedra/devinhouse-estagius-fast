import express from 'express';


class App {
    constructor(){
        this.server = express()
        this.middlewares()
    }
    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server;